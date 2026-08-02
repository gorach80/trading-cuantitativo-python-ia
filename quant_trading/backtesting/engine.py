"""
engine.py: Motor de Backtesting Vectorizado y Basado en Eventos.
Soporta simulación realista de comisiones, deslizamiento (slippage) y tamaño dinámico de posición.
"""

from typing import Dict, Any, Optional
import pandas as pd
import numpy as np
from .metrics import PerformanceMetrics
from ..core.base import BaseStrategy


class BacktestEngine:
    """
    Motor de Simulación de Trading Cuantitativo.
    Procesa un DataFrame con datos OHLCV y señales de una estrategia.
    """

    def __init__(
        self,
        initial_capital: float = 100000.0,
        commission_pct: float = 0.001,  # 0.1% comisión por operación
        slippage_pct: float = 0.0005,   # 0.05% slippage
    ):
        self.initial_capital = initial_capital
        self.commission_pct = commission_pct
        self.slippage_pct = slippage_pct

    def run_backtest(
        self, data: pd.DataFrame, strategy: BaseStrategy
    ) -> Dict[str, Any]:
        """
        Ejecuta el backtesting vectorizado/event-driven de una estrategia.
        """
        df = strategy.generate_signals(data)
        if "Signal" not in df.columns:
            raise ValueError("El DataFrame retornado por la estrategia debe incluir la columna 'Signal'.")

        cash = self.initial_capital
        holdings = 0.0
        portfolio_history = []

        for i in range(len(df)):
            date = df.index[i]
            price = df["Close"].iloc[i]
            signal = df["Signal"].iloc[i]
            
            # Tamaño de posición deseado según la estrategia
            pos_size = strategy.calculate_position_size(cash + (holdings * price), price)
            
            # Ejecución de operaciones con Comisiones y Slippage
            if signal == 1 and holdings == 0:
                # Comprar
                effective_price = price * (1 + self.slippage_pct)
                shares_to_buy = pos_size
                cost = shares_to_buy * effective_price
                commission = cost * self.commission_pct
                
                if cash >= (cost + commission):
                    cash -= (cost + commission)
                    holdings = shares_to_buy
                    
            elif signal == -1 and holdings > 0:
                # Vender
                effective_price = price * (1 - self.slippage_pct)
                revenue = holdings * effective_price
                commission = revenue * self.commission_pct
                cash += (revenue - commission)
                holdings = 0.0

            total_equity = cash + (holdings * price)
            portfolio_history.append({
                "Date": date,
                "Cash": cash,
                "Holdings_Val": holdings * price,
                "Total_Equity": total_equity,
                "Close": price,
                "Signal": signal
            })

        results_df = pd.DataFrame(portfolio_history).set_index("Date")
        results_df["Strategy_Returns"] = results_df["Total_Equity"].pct_change()
        results_df["Benchmark_Equity"] = (results_df["Close"] / results_df["Close"].iloc[0]) * self.initial_capital

        # Métricas KPI de la Estrategia vs Benchmark
        strategy_kpis = PerformanceMetrics.calculate_all_metrics(
            results_df["Total_Equity"], results_df["Strategy_Returns"]
        )
        benchmark_kpis = PerformanceMetrics.calculate_all_metrics(
            results_df["Benchmark_Equity"], results_df["Close"].pct_change()
        )

        return {
            "strategy_name": strategy.name,
            "initial_capital": self.initial_capital,
            "final_equity": round(results_df["Total_Equity"].iloc[-1], 2),
            "results_df": results_df,
            "strategy_kpis": strategy_kpis,
            "benchmark_kpis": benchmark_kpis
        }
