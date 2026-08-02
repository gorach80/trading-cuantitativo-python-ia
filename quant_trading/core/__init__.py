"""
Módulo Core: Programación Orientada a Objetos (Herencia de Clases) y Cómputo Paralelo/Concurrente.
"""

from .base import BaseStrategy, BaseDataFetcher
from .parallel import ParallelExecutor, TaskSynchronizer

__all__ = ["BaseStrategy", "BaseDataFetcher", "ParallelExecutor", "TaskSynchronizer"]
