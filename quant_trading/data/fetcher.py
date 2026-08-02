"""
fetcher.py: Conectores para Descarga y Procesamiento de Datos Financieros.
Implementa YahooDataFetcher y BinanceDataFetcher heredando de BaseDataFetcher.
"""

from typing import Dict, Any, Optional, List
import pandas as pd
import numpy as np
import yfinance as yf
from ..core.base import BaseDataFetcher


class YahooDataFetcher(BaseDataFetcher):
    """Fetcher de datos históricos y en tiempo real desde Yahoo Finance."""

    def __init__(self):
        super().__init__(source_name="YahooFinance")

    def fetch_historical_data(
        self, ticker: str, start_date: str, end_date: str, interval: str = "1d"
    ) -> pd.DataFrame:
        """
        Descarga datos de Yahoo Finance y calcula retornos simples y logarítmicos.
        """
        df = yf.download(ticker, start=start_date, end=end_date, interval=interval, progress=False)
        if df.empty:
            raise ValueError(f"No se encontraron datos para el ticker: {ticker}")
        
        # Limpieza de MultiIndex en columnas si existe
        if isinstance(df.columns, pd.MultiIndex):
            df.columns = df.columns.get_level_values(0)
            
        df = df[["Open", "High", "Low", "Close", "Volume"]].dropna()
        df["Simple_Return"] = df["Close"].pct_change()
        df["Log_Return"] = np.log(df["Close"] / df["Close"].shift(1))
        return df

    def fetch_realtime_quote(self, ticker: str) -> Dict[str, Any]:
        """Obtiene la cotización más reciente."""
        ticker_obj = yf.Ticker(ticker)
        fast_info = ticker_obj.fast_info
        return {
            "ticker": ticker,
            "last_price": float(fast_info.get("lastPrice", 0.0)),
            "previous_close": float(fast_info.get("previousClose", 0.0)),
            "currency": fast_info.get("currency", "USD")
        }


class BinanceDataFetcher(BaseDataFetcher):
    """Fetcher simulado/conector ligero para Criptomonedas (Binance)."""

    def __init__(self):
        super().__init__(source_name="Binance")

    def fetch_historical_data(
        self, ticker: str, start_date: str, end_date: str, interval: str = "1d"
    ) -> pd.DataFrame:
        """
        Descarga datos cripto a través de yfinance (e.g. BTC-USD, ETH-USD).
        """
        crypto_symbol = f"{ticker}-USD" if not ticker.endswith("-USD") else ticker
        yf_fetcher = YahooDataFetcher()
        return yf_fetcher.fetch_historical_data(crypto_symbol, start_date, end_date, interval)

    def fetch_realtime_quote(self, ticker: str) -> Dict[str, Any]:
        crypto_symbol = f"{ticker}-USD" if not ticker.endswith("-USD") else ticker
        yf_fetcher = YahooDataFetcher()
        return yf_fetcher.fetch_realtime_quote(crypto_symbol)
