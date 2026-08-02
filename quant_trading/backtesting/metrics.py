"""
metrics.py: Cálculo de Indicadores Clave de Rendimiento (KPIs Financieros).
Implementa CAGR, Sharpe Ratio, Sortino Ratio, Maximum Drawdown (MDD), Calmar Ratio y Win Rate.
"""

from typing import Dict, Any
import pandas as pd
import numpy as np


class PerformanceMetrics:
    """Calculadora de Métricas Financieras y KPIs de Rendimiento."""

    @staticmethod
    def calculate_cagr(equity_curve: pd.Series, periods_per_year: int = 252) -> float:
        """
        Calcula la Tasa Compuesta de Crecimiento Anual (CAGR).
        """
        if equity_curve.empty or len(equity_curve) < 2:
            return 0.0
        
        total_periods = len(equity_curve)
        years = total_periods / periods_per_year
        initial_val = equity_curve.iloc[0]
        final_val = equity_curve.iloc[-1]
        
        if initial_val <= 0 or years <= 0:
            return 0.0
            
        cagr = (final_val / initial_val) ** (1.0 / years) - 1.0
        return float(cagr)

    @staticmethod
    def calculate_sharpe_ratio(
        returns: pd.Series, risk_free_rate: float = 0.02, periods_per_year: int = 252
    ) -> float:
        """
        Calcula el Coeficiente de Sharpe (Rendimiento ajustado por riesgo total).
        """
        clean_returns = returns.dropna()
        if clean_returns.empty or clean_returns.std() == 0:
            return 0.0
        
        rf_per_period = risk_free_rate / periods_per_year
        excess_returns = clean_returns - rf_per_period
        sharpe = (excess_returns.mean() / clean_returns.std()) * np.sqrt(periods_per_year)
        return float(sharpe)

    @staticmethod
    def calculate_sortino_ratio(
        returns: pd.Series, risk_free_rate: float = 0.02, periods_per_year: int = 252
    ) -> float:
        """
        Calcula el Coeficiente de Sortino (Rendimiento ajustado por riesgo bajista/downside).
        """
        clean_returns = returns.dropna()
        if clean_returns.empty:
            return 0.0
            
        rf_per_period = risk_free_rate / periods_per_year
        excess_returns = clean_returns - rf_per_period
        downside_returns = clean_returns[clean_returns < 0]
        
        if downside_returns.empty or downside_returns.std() == 0:
            return 0.0
            
        downside_std = downside_returns.std()
        sortino = (excess_returns.mean() / downside_std) * np.sqrt(periods_per_year)
        return float(sortino)

    @staticmethod
    def calculate_max_drawdown(equity_curve: pd.Series) -> Dict[str, float]:
        """
        Calcula la Máxima Pérdida de Inversión (Maximum Drawdown - MDD).
        Retorna el MDD porcentual y el valor pico previo.
        """
        if equity_curve.empty:
            return {"max_drawdown": 0.0, "peak_val": 0.0}
            
        cumulative_max = equity_curve.cummax()
        drawdown = (equity_curve - cumulative_max) / cumulative_max
        max_dd = float(drawdown.min())
        return {
            "max_drawdown": max_dd,  # Valor negativo, e.g. -0.15 para 15% de caída
            "max_drawdown_pct": abs(max_dd) * 100.0
        }

    @staticmethod
    def calculate_calmar_ratio(cagr: float, max_drawdown: float) -> float:
        """Calcula el Ratio de Calmar (CAGR / |Max Drawdown|)."""
        abs_mdd = abs(max_drawdown)
        if abs_mdd == 0:
            return 0.0
        return float(cagr / abs_mdd)

    @classmethod
    def calculate_all_metrics(
        cls, equity_curve: pd.Series, returns: pd.Series, risk_free_rate: float = 0.02
    ) -> Dict[str, Any]:
        """
        Genera un reporte completo con todas las métricas KPI clave.
        """
        cagr = cls.calculate_cagr(equity_curve)
        sharpe = cls.calculate_sharpe_ratio(returns, risk_free_rate)
        sortino = cls.calculate_sortino_ratio(returns, risk_free_rate)
        mdd_info = cls.calculate_max_drawdown(equity_curve)
        mdd = mdd_info["max_drawdown"]
        calmar = cls.calculate_calmar_ratio(cagr, mdd)
        
        win_returns = returns[returns > 0]
        loss_returns = returns[returns < 0]
        win_rate = float(len(win_returns) / len(returns.dropna())) if len(returns.dropna()) > 0 else 0.0
        profit_factor = (
            float(win_returns.sum() / abs(loss_returns.sum()))
            if len(loss_returns) > 0 and loss_returns.sum() != 0
            else 0.0
        )

        return {
            "CAGR": round(cagr * 100.0, 2),            # %
            "Sharpe_Ratio": round(sharpe, 2),
            "Sortino_Ratio": round(sortino, 2),
            "Max_Drawdown_Pct": round(mdd_info["max_drawdown_pct"], 2), # %
            "Calmar_Ratio": round(calmar, 2),
            "Win_Rate_Pct": round(win_rate * 100.0, 2), # %
            "Profit_Factor": round(profit_factor, 2),
            "Total_Return_Pct": round(((equity_curve.iloc[-1] / equity_curve.iloc[0]) - 1) * 100.0, 2)
        }
