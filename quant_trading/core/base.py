"""
base.py: Clases Base Abstractas y Programación Orientada a Objetos para Trading Cuantitativo.
Aplica principios de Herencia de Clases, Polimorfismo y Modularidad.
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, Optional
import pandas as pd


class BaseDataFetcher(ABC):
    """
    Clase Abstracta Base para Extracción de Datos Financieros.
    Demuestra Herencia de Clases y Polimorfismo en la captura de datos.
    """

    def __init__(self, source_name: str):
        self.source_name = source_name

    @abstractmethod
    def fetch_historical_data(
        self, ticker: str, start_date: str, end_date: str, interval: str = "1d"
    ) -> pd.DataFrame:
        """Descarga datos históricos de precios en formato pandas DataFrame."""
        pass

    @abstractmethod
    def fetch_realtime_quote(self, ticker: str) -> Dict[str, Any]:
        """Obtiene una cotización en tiempo real."""
        pass


class BaseStrategy(ABC):
    """
    Clase Abstracta Base para Estrategias de Trading Cuantitativo.
    Todas las estrategias (Intradía, Swing, Largo Plazo, ML) heredan de esta clase.
    """

    def __init__(self, name: str, params: Optional[Dict[str, Any]] = None):
        self.name = name
        self.params = params or {}
        self.positions: Dict[str, float] = {}
        self.signals: Optional[pd.DataFrame] = None

    @abstractmethod
    def generate_signals(self, data: pd.DataFrame) -> pd.DataFrame:
        """
        Calcula indicadores y genera señales de compra (1), venta (-1) o mantener (0).
        Entrada: DataFrame con OHLCV.
        Salida: DataFrame con columna 'Signal'.
        """
        pass

    @abstractmethod
    def calculate_position_size(self, capital: float, price: float, risk_pct: float = 0.02) -> float:
        """Calcula el tamaño óptimo de posición en función de la gestión de riesgo."""
        pass

    def get_summary(self) -> Dict[str, Any]:
        """Retorna un resumen de los parámetros y estado actual de la estrategia."""
        return {
            "strategy_name": self.name,
            "params": self.params,
            "active_positions": self.positions
        }
