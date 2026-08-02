"""
Módulo Backtesting: Motor de Simulación, Métricas KPI y Evaluación de Estrategias.
"""

from .metrics import PerformanceMetrics
from .engine import BacktestEngine

__all__ = ["PerformanceMetrics", "BacktestEngine"]

