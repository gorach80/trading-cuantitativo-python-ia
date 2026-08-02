# Sección 4: Programación Orientada a Objetos (POO) y Cómputo Paralelo para Quants

**Instructor:** Axel Francisco Munguía Quintero  
**Clases:** 34 a 49 (~1.5 horas de contenido)

---

## 📽️ Clase 34-36: POO y Herencia de Clases en Python (29:15)
- **Clases en Python:** Definición de atributos y métodos en objetos.
- **Herencia Simple y Múltiple:** Reutilización de código para crear familias de estrategias:
  ```python
  class BaseStrategy(ABC):
      @abstractmethod
      def generate_signals(self, data: pd.DataFrame) -> pd.DataFrame:
          pass

  class MovingAverageStrategy(BaseStrategy):
      def generate_signals(self, data: pd.DataFrame) -> pd.DataFrame:
          # Implementación concreta
          pass
  ```

## 📽️ Clase 37-41: Cómputo Paralelo y Concurrente (39:43)
- **Hilos (Threads):** Concurrencia orientada a operaciones I/O (Llamadas a APIs de brokers, web scraping de noticias).
- **Procesos (Multiprocessing):** Paralelización intensiva de CPU en núcleos independientes para Backtesting, optimización de parámetros y entrenamiento de modelos ML.
- **Sincronizadores (Locks):** Prevención de condiciones de carrera mediante `threading.Lock()` para garantizar integridad en datos financieros compartidos.
- **Comparativa de Eficiencia:** Medición empírica de velocidad (Secuencial vs Threads vs Processes).
