"""
unified_system.py: Sistema Completo Unificado de Trading Cuantitativo e Inversión Automatizada.
Integra Descarga de Datos, Análisis Fundamental/NLP, Indicadores Técnicos, HMM Filtro de Regímenes, ML Supervisado y Ejecución Directa en Broker.
"""

from typing import Dict, Any, List
import pandas as pd
import numpy as np

from ..data.fetcher import YahooDataFetcher
from ..indicators.technical import TechnicalIndicators
from ..analysis.fundamental import FundamentalAnalysis, GreenblattMagicFormula
from ..analysis.sentiment import SentimentAnalyzer
from ..models.ml_models import MarketRegimeHMM, SupervisedTrendPredictor
from ..backtesting.engine import BacktestEngine
from ..backtesting.metrics import PerformanceMetrics
from .broker_api import MockBrokerAPI


class QuantTradingEngine:
    """
    Motor Cuantitativo Unificado de Producción.
    Ejecuta el pipeline completo de trading automatizado de extremo a extremo.
    """

    def __init__(self, initial_capital: float = 100000.0, broker_name: str = "InteractiveBrokers"):
        self.initial_capital = initial_capital
        self.fetcher = YahooDataFetcher()
        self.sentiment_analyzer = SentimentAnalyzer()
        self.broker = MockBrokerAPI(initial_balance=initial_capital, broker_name=broker_name)

    def run_full_pipeline(
        self, ticker: str, start_date: str = "2020-01-01", headlines: List[str] = None
    ) -> Dict[str, Any]:
        """
        Ejecuta el pipeline completo de 7 etapas sobre un activo.
        """
        # Etapa 1: Conectar al Broker
        self.broker.connect()

        # Etapa 2: Obtener Datos de Mercado
        df = self.fetcher.fetch_historical_data(ticker, start_date=start_date, end_date="2026-01-01")
        curr_quote = self.fetcher.fetch_realtime_quote(ticker)
        current_price = curr_quote["last_price"] if curr_quote["last_price"] > 0 else df["Close"].iloc[-1]

        # Etapa 3: Análisis de Sentimiento (NLP)
        headlines = headlines or [
            f"{ticker} reports solid quarterly performance and growth in margins",
            f"Analysts upgrade {ticker} following positive market sentiment"
        ]
        sentiment_res = self.sentiment_analyzer.analyze_news_feed(headlines)

        # Etapa 4: Análisis Técnico & ML No Supervisado (Regímenes HMM)
        df_enriched = TechnicalIndicators.add_all_indicators(df)
        hmm = MarketRegimeHMM(n_regimes=2)
        df_regimes = hmm.fit_predict(df_enriched)
        curr_regime = df_regimes["Market_Regime"].iloc[-1]

        # Etapa 5: ML Supervisado (Predicción Random Forest)
        ml_predictor = SupervisedTrendPredictor(n_estimators=100)
        ml_metrics = ml_predictor.train_and_evaluate(df)

        # Etapa 6: Generación de Señal Unificada Cuantitativa
        # Regla: Si Régimen es 0 (Alcista) Y Sentimiento NLP >= 0 Y RSI < 65 Y Precio > EMA_26 -> COMPRA
        rsi_val = df_enriched["RSI_14"].iloc[-1]
        ema_26 = df_enriched["EMA_26"].iloc[-1]

        if curr_regime == 0.0 and sentiment_res["aggregate_signal"] >= 0 and rsi_val < 65 and current_price > ema_26:
            unified_signal = 1
            signal_text = "BUY (COMPRA ALCISTA)"
        elif curr_regime == 1.0 or rsi_val > 70:
            unified_signal = -1
            signal_text = "SELL / NEUTRALIZAR RIESGO"
        else:
            unified_signal = 0
            signal_text = "HOLD (MANTENER)"

        # Etapa 7: Ejecución Automatizada en Broker API
        order_res = None
        if unified_signal == 1:
            position_size = np.floor((self.initial_capital * 0.95) / current_price)
            order_res = self.broker.place_order(
                ticker=ticker, side="BUY", qty=position_size, price=current_price
            )
        elif unified_signal == -1 and ticker in self.broker.get_open_positions():
            curr_qty = self.broker.get_open_positions()[ticker]["qty"]
            order_res = self.broker.place_order(
                ticker=ticker, side="SELL", qty=curr_qty, price=current_price
            )

        account_summary = self.broker.get_account_summary()

        return {
            "ticker": ticker,
            "current_price": round(current_price, 2),
            "sentiment_summary": sentiment_res["market_sentiment"],
            "current_market_regime": "Baja Volatilidad / Alcista" if curr_regime == 0 else "Alta Volatilidad / Crash",
            "ml_accuracy_out_of_sample": ml_metrics["accuracy"],
            "unified_signal": signal_text,
            "executed_order": order_res,
            "account_summary": account_summary
        }
