"""
parallel.py: Cómputo Paralelo y Concurrente para Finanzas Cuantitativas.
Implementa Multiprocessing (para cargas intensivas) y Multithreading (para operaciones I/O).
Incluye sincronizadores (Locks) para proteger estados compartidos.
"""

import concurrent.futures
import multiprocessing as mp
import threading
import time
from typing import Callable, List, Any, Dict


class TaskSynchronizer:
    """Garantiza la integridad de datos compartidos entre hilos con Locks."""

    def __init__(self):
        self._lock = threading.Lock()
        self._counter = 0

    def increment(self) -> int:
        with self._lock:
            self._counter += 1
            return self._counter

    @property
    def counter(self) -> int:
        with self._lock:
            return self._counter


class ParallelExecutor:
    """
    Motor de Cómputo Paralelo y Concurrente.
    Soporta Threads (I/O) y Processes (CPU-bound) para optimizar tiempo de ejecución.
    """

    @staticmethod
    def run_threads(func: Callable, items: List[Any], max_workers: int = 5) -> List[Any]:
        """Ejecuta una función en paralelo utilizando hilos (ideal para I/O: llamadas a APIs, Web Scraping)."""
        results = []
        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_item = {executor.submit(func, item): item for item in items}
            for future in concurrent.futures.as_completed(future_to_item):
                try:
                    data = future.result()
                    results.append(data)
                except Exception as exc:
                    item = future_to_item[future]
                    results.append({"item": item, "error": str(exc)})
        return results

    @staticmethod
    def run_processes(func: Callable, items: List[Any], max_workers: int = None) -> List[Any]:
        """Ejecuta una función en paralelo utilizando procesos (ideal para CPU-bound: Backtesting, ML, Monte Carlo)."""
        workers = max_workers or mp.cpu_count()
        with concurrent.futures.ProcessPoolExecutor(max_workers=workers) as executor:
            results = list(executor.map(func, items))
        return results

    @staticmethod
    def benchmark_execution(func: Callable, items: List[Any]) -> Dict[str, Any]:
        """Compara la velocidad de ejecución Secuencial vs Threads vs Processes."""
        # 1. Secuencial
        t0 = time.perf_counter()
        seq_res = [func(x) for x in items]
        t_seq = time.perf_counter() - t0

        # 2. Threads
        t0 = time.perf_counter()
        thread_res = ParallelExecutor.run_threads(func, items)
        t_threads = time.perf_counter() - t0

        # 3. Processes
        t0 = time.perf_counter()
        proc_res = ParallelExecutor.run_processes(func, items)
        t_proc = time.perf_counter() - t0

        return {
            "num_items": len(items),
            "sequential_sec": round(t_seq, 4),
            "threads_sec": round(t_threads, 4),
            "processes_sec": round(t_proc, 4),
            "speedup_processes_vs_seq": round(t_seq / t_proc, 2) if t_proc > 0 else None
        }


def dummy_compute_task(asset_id: int) -> float:
    """Función top-level para simulación de cómputo de Monte Carlo / optimización quant."""
    import numpy as np
    res = 0.0
    for i in range(1, 100000):
        res += np.sin(i * asset_id) * np.cos(i)
    return res

