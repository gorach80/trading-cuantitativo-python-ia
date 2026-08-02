"""
technical.py: Biblioteca de Indicadores Técnicos Avanzados e Identificadores de Tendencia/Volatilidad.
Implementado vectorialmente con Pandas y NumPy.
"""

from typing import Tuple
import pandas as pd
import numpy as np


class TechnicalIndicators:
    """Calculadora vectorizada de Indicadores Técnicos Avanzados."""

    @staticmethod
    def sma(series: pd.Series, period: int = 20) -> pd.Series:
        """Media Móvil Simple (SMA)."""
        return series.rolling(window=period).mean()

    @staticmethod
    def ema(series: pd.Series, period: int = 20) -> pd.Series:
        """Media Móvil Exponencial (EMA)."""
        return series.ewm(span=period, adjust=False).mean()

    @staticmethod
    def rsi(series: pd.Series, period: int = 14) -> pd.Series:
        """
        Índice de Fuerza Relativa (RSI).
        """
        delta = series.diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
        
        rs = gain / loss.replace(0, np.nan)
        rsi = 100 - (100 / (1 + rs))
        return rsi.fillna(50)

    @staticmethod
    def macd(
        series: pd.Series, fast: int = 12, slow: int = 26, signal: int = 9
    ) -> Tuple[pd.Series, pd.Series, pd.Series]:
        """
        Moving Average Convergence Divergence (MACD).
        Retorna: (MACD_Line, Signal_Line, Histogram)
        """
        ema_fast = TechnicalIndicators.ema(series, fast)
        ema_slow = TechnicalIndicators.ema(series, slow)
        macd_line = ema_fast - ema_slow
        signal_line = TechnicalIndicators.ema(macd_line, signal)
        histogram = macd_line - signal_line
        return macd_line, signal_line, histogram

    @staticmethod
    def bollinger_bands(
        series: pd.Series, period: int = 20, std_dev: float = 2.0
    ) -> Tuple[pd.Series, pd.Series, pd.Series]:
        """
        Bandas de Bollinger.
        Retorna: (Upper_Band, Middle_Band, Lower_Band)
        """
        middle = TechnicalIndicators.sma(series, period)
        std = series.rolling(window=period).std()
        upper = middle + (std_dev * std)
        lower = middle - (std_dev * std)
        return upper, middle, lower

    @staticmethod
    def atr(df: pd.DataFrame, period: int = 14) -> pd.Series:
        """
        Average True Range (ATR) para medición de Volatilidad y Stop Loss dinámico.
        Requiere columnas 'High', 'Low', 'Close'.
        """
        high = df["High"]
        low = df["Low"]
        close_prev = df["Close"].shift(1)
        
        tr1 = high - low
        tr2 = (high - close_prev).abs()
        tr3 = (low - close_prev).abs()
        
        tr = pd.concat([tr1, tr2, tr3], axis=1).max(axis=1)
        return tr.rolling(window=period).mean()

    @staticmethod
    def supertrend(
        df: pd.DataFrame, period: int = 10, multiplier: float = 3.0
    ) -> Tuple[pd.Series, pd.Series]:
        """
        Indicador SuperTrend para Seguimiento de Tendencia.
        Retorna: (SuperTrend_Value, Direction [1 para alcista, -1 para bajista])
        """
        atr_series = TechnicalIndicators.atr(df, period)
        hl2 = (df["High"] + df["Low"]) / 2
        
        upper_band = hl2 + (multiplier * atr_series)
        lower_band = hl2 - (multiplier * atr_series)
        
        supertrend = pd.Series(index=df.index, dtype=float)
        direction = pd.Series(1, index=df.index, dtype=int)
        
        for i in range(1, len(df)):
            curr_close = df["Close"].iloc[i]
            prev_supertrend = supertrend.iloc[i-1] if not np.isnan(supertrend.iloc[i-1]) else lower_band.iloc[i]
            
            if curr_close > upper_band.iloc[i-1]:
                direction.iloc[i] = 1
            elif curr_close < lower_band.iloc[i-1]:
                direction.iloc[i] = -1
            else:
                direction.iloc[i] = direction.iloc[i-1]
                if direction.iloc[i] == 1 and lower_band.iloc[i] < lower_band.iloc[i-1]:
                    lower_band.iloc[i] = lower_band.iloc[i-1]
                if direction.iloc[i] == -1 and upper_band.iloc[i] > upper_band.iloc[i-1]:
                    upper_band.iloc[i] = upper_band.iloc[i-1]
                    
            supertrend.iloc[i] = lower_band.iloc[i] if direction.iloc[i] == 1 else upper_band.iloc[i]
            
        return supertrend, direction

    @staticmethod
    def add_all_indicators(df: pd.DataFrame) -> pd.DataFrame:
        """
        Enriquece el DataFrame con la suite completa de indicadores principales.
        """
        data = df.copy()
        data["SMA_20"] = TechnicalIndicators.sma(data["Close"], 20)
        data["SMA_50"] = TechnicalIndicators.sma(data["Close"], 50)
        data["EMA_12"] = TechnicalIndicators.ema(data["Close"], 12)
        data["EMA_26"] = TechnicalIndicators.ema(data["Close"], 26)
        data["RSI_14"] = TechnicalIndicators.rsi(data["Close"], 14)
        
        macd, signal, hist = TechnicalIndicators.macd(data["Close"])
        data["MACD"] = macd
        data["MACD_Signal"] = signal
        data["MACD_Hist"] = hist
        
        upper, middle, lower = TechnicalIndicators.bollinger_bands(data["Close"])
        data["BB_Upper"] = upper
        data["BB_Middle"] = middle
        data["BB_Lower"] = lower
        data["BB_Bandwidth"] = (upper - lower) / middle
        
        data["ATR_14"] = TechnicalIndicators.atr(data)
        supertrend, st_dir = TechnicalIndicators.supertrend(data)
        data["SuperTrend"] = supertrend
        data["SuperTrend_Direction"] = st_dir
        
        return data
