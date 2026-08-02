# Manual Teórico Completo: Trading Cuantitativo en Python, Ingeniería Financiera e IA

**Autor / Instructor:** Axel Francisco Munguía Quintero  
*Ingeniero Financiero • Máster en Inteligencia Artificial Aplicada • Quant Developer*

---

## 📚 MÓDULO I: Fundamentos de Trading Cuantitativo y Python para Finanzas

### 1.1 Trading Cuantitativo vs. Trading Tradicional / Discrecional
El trading cuantitativo consiste en el diseño, validación y ejecución de estrategias de inversión utilizando modelos matemáticos, análisis estadístico rigoroso y código automatizado. 

| Dimensión | Trading Discrecional | Trading Cuantitativo |
| :--- | :--- | :--- |
| **Toma de Decisiones** | Subjetiva, basada en intuición, lectura visual de gráficos y emociones. | Objetiva, basada en algoritmos probados con datos históricos. |
| **Sesgo Emocional** | Alto (Miedo a perder, avaricia, aversión a la pérdida, FOMO). | Nulo (El código ejecuta reglas matemáticas rígidas). |
| **Validación** | Suposiciones no probadas empíricamente. | Backtesting histórico riguroso con comisiones y slippage. |
| **Velocidad y Escala** | Limitada a la capacidad humana de monitoreo. | Monitoreo simultáneo de cientos de activos en milisegundos. |

### 1.2 Formulación Matemática de Precios y Retornos
Para analizar estadísticamente las series temporales de activos financieros, convertimos los precios de cierre \(P_t\) en retornos:

1. **Retorno Simple:**
   \[
   R_t = \frac{P_t - P_{t-1}}{P_{t-1}}
   \]
2. **Retorno Logarítmico (Continuo):**
   \[
   r_t = \ln\left(\frac{P_t}{P_{t-1}}\right) = \ln(P_t) - \ln(P_{t-1})
   \]
   *Ventaja del Retorno Logarítmico:* Es aditivo a través del tiempo, permitiendo sumar los retornos diarios para obtener el retorno acumulado mensual o anual.

### 1.3 Programación Orientada a Objetos (POO) para Quants
La arquitectura modular en Python requiere el uso de clases abstractas base (`ABC`) para definir el contrato de interacción entre estrategias, motores de descarga de datos y adaptadores de brokers:

```python
from abc import ABC, abstractmethod
import pandas as pd

class BaseStrategy(ABC):
    def __init__(self, name: str, params: dict = None):
        self.name = name
        self.params = params or {}

    @abstractmethod
    def generate_signals(self, data: pd.DataFrame) -> pd.DataFrame:
        """Entrada: OHLCV DataFrame. Salida: DataFrame con columna 'Signal' (-1, 0, 1)."""
        pass
```

### 1.4 Cómputo Concurrente y Paralelo
- **Multithreading (`threading` / `ThreadPoolExecutor`):** Utilizado para tareas de entrada y salida (I/O Bound) como consultar APIs de brokers o realizar Web Scraping.
- **Multiprocessing (`multiprocessing` / `ProcessPoolExecutor`):** Utilizado para tareas intensivas de procesamiento (CPU Bound) en núcleos independientes, multiplicando la velocidad en optimizaciones de parámetros (Grid Search) y modelos de Machine Learning.
- **Sincronizadores (`Lock`):** Cerramientos de seguridad que evitan la sobreescritura simultánea de variables globales (como el saldo disponible en la cuenta) cuando múltiples hilos se ejecutan simultáneamente.

---

## 🏛️ MÓDULO II: Mercados Financieros, Instrumentos y Broker APIs

### 2.1 Estructura de Mercados e Instrumentos
1. **Acciones (Equities):** Títulos representativos del capital social de una empresa.
2. **Forex (Foreign Exchange):** Mercado descentralizado de cotización de pares de divisas operando 24 horas al día.
3. **Futuros y Opciones (Derivados):** Contratos estandarizados con apalancamiento donde el comprador y vendedor acuerdan intercambiar un activo subyacente a un precio fijado en una fecha futura.
4. **CFDs (Contratos por Diferencia) vs. DMA (Direct Market Access):** 
   - *CFD:* Contrato entre el trader y el broker que replica el precio sin poseer el activo subyacente.
   - *DMA:* Enrutamiento directo al libro de órdenes centralizado de la bolsa de valores real.

### 2.2 Gestión de Órdenes
- **Market Order (Orden a Mercado):** Garantiza la ejecución inmediata pero no el precio final exacto.
- **Limit Order (Orden Límite):** Garantiza el precio máximo de compra o mínimo de venta, pero no asegura la ejecución si el precio no alcanza el límite.
- **Stop Loss / Take Profit:** Órdenes automáticas de protección para cortar pérdidas o asegurar ganancias acumuladas.

### 2.3 Integración con APIs de Brokers
La comunicación entre Python y los brokers se realiza mediante protocolos REST (peticiones HTTP) y WebSockets (transmisión bidireccional en tiempo real):
- **Interactive Brokers (IBAPI):** Acceso institucional multiactivo.
- **OANDA API / FXCM REST API:** Operativa especializada en Forex y CFDs.
- **Binance API / CCXT:** Operativa cuantitativa en Criptoactivos.

---

## 📊 MÓDULO III: Indicadores Clave de Rendimiento (KPIs) y Análisis Técnico

### 3.1 Indicadores Clave de Rendimiento (KPIs Financieros)
Para determinar si un algoritmo es rentable y robusto, evaluamos las siguientes métricas:

1. **CAGR (Tasa Compuesta de Crecimiento Anual):**
   \[
   CAGR = \left(\frac{V_{final}}{V_{inicial}}\right)^{\frac{252}{N_{dias}}} - 1
   \]
2. **Coeficiente de Sharpe:** Mide el exceso de rendimiento por unidad de volatilidad total.
   \[
   Sharpe = \frac{E[R] - R_f}{\sigma_{total}} \times \sqrt{252}
   \]
3. **Coeficiente de Sortino:** Mide el rendimiento ajustado únicamente por volatilidad bajista (*downside deviation*), ignorando la volatilidad al alza.
   \[
   Sortino = \frac{E[R] - R_f}{\sigma_{downside}} \times \sqrt{252}
   \]
4. **Maximum Drawdown (MDD %):** La peor caída de pico a valle en la curva de capital de la cuenta.
   \[
   MDD = \max \left( \frac{\text{Pico} - \text{Valle}}{\text{Pico}} \right)
   \]

### 3.2 Indicadores Técnicos Avanzados
- **Medias Móviles (SMA / EMA):** Filtros de tendencia que promedian los precios históricos.
- **RSI (Relative Strength Index):** Oscilador de cantidad de movimiento entre 0 y 100 para evaluar sobrecompra (>70) o sobreventa (<30).
- **MACD (Moving Average Convergence Divergence):** Divergencia de medias exponenciales de 12 y 26 periodos con línea de señal de 9 periodos.
- **Bandas de Bollinger:** Envolventes a 2 desviaciones estándar de la SMA de 20 periodos para medir expansión y contracción de volatilidad.
- **ATR (Average True Range):** Medición de la volatilidad absoluta en dólares del activo para ajustar el tamaño de posición y stop loss dinámico.
- **SuperTrend:** Indicador de seguimiento de tendencia basado en ATR y canales de precio.

---

## ⚙️ MÓDULO IV: Backtesting Realista, Análisis Fundamental y NLP

### 4.1 Motor de Backtesting Vectorizado y Event-Driven
Un motor de backtesting evalúa el rendimiento histórico de una estrategia. Para evitar resultados falsamente optimistas, el motor debe modelar:
- **Comisiones de Transacción:** Costos fijos o porcentuales cobrados por el broker por cada contrato u orden ejecutada (ej. 0.1%).
- **Deslizamiento (Slippage):** La diferencia de precio entre el momento en que se genera la señal y el precio de llenado real de la orden (ej. 0.05%).

### 4.2 Análisis Fundamental e Integración de Value Investing
- **Valor Intrínseco por Flujo de Caja Descontado (DCF):** Estimación del valor financiero proyectando los Flujos de Caja Libres (FCF) futuros a 5 años descontados con la tasa WACC (Weighted Average Cost of Capital) más el Valor Terminal de Gordon.
- **Fórmula Mágica de Joel Greenblatt:** Selección cuantitativa de acciones ordenando el universo de inversión por la combinación de:
  - *Earnings Yield:* \(\frac{\text{EBIT}}{\text{Enterprise Value}}\)
  - *Return on Capital (ROC):* \(\frac{\text{EBIT}}{\text{Net Working Capital} + \text{Net Fixed Assets}}\)
- **Piotroski F-Score:** Evaluación cuantitativa de 9 criterios de salud financiera.

### 4.3 Análisis de Sentimiento con Procesamiento de Lenguaje Natural (NLP)
Extracción de señales del mercado procesando fuentes de texto no estructuradas (noticias financieras, reportes trimestrales y redes sociales):
- Limpieza y tokenización del texto.
- Aplicación de **VADER (Valence Aware Dictionary and sEntiment Reasoner)** adaptado con léxico financiero para categorizar la polaridad en puntuaciones compuestas entre -1.0 (Bearish) y +1.0 (Bullish).

---

## 🤖 MÓDULO V: Inteligencia Artificial, Machine Learning y Deep Learning

### 5.1 ML No Supervisado: Regímenes de Mercado (HMM)
Los mercados cambian constantemente de comportamiento. Los **Modelos de Márkov Ocultos (HMM / Gaussian Mixture Models)** identifican estados no observables (regímenes):
- **Régimen 0 (Baja Volatilidad / Tendencia Alcista):** Ideal para estrategias de seguimiento de tendencia y compra de activos.
- **Régimen 1 (Alta Volatilidad / Crisis o Crash):** Estado caracterizado por caídas abruptas donde el algoritmo debe desactivar compras o cambiar a cobertura.

### 5.2 ML Supervisado: Clasificación y Regresión (Random Forest / XGBoost)
Entrenamiento de algoritmos basados en ensembles de árboles de decisión utilizando *features* técnicas (RSI, MACD, ATR, Momentum) para predecir si el retorno en \(t+1\) será positivo (1) o negativo (0):
- **Evaluación Out-of-Sample:** División estricta sin solapamiento temporal (80% Train / 20% Test) para evitar el sesgo de anticipación (*look-ahead bias*).
- **Métricas:** Accuracy, Precision, Recall y F1-Score.

### 5.3 Deep Learning / Redes Neuronales Multicapas (MLP)
Uso de arquitecturas secuenciales compuestas por múltiples capas ocultas de neuronas con funciones de activación no lineales (ReLU) u optimizador Adam para aprender relaciones complejas en grandes volúmenes de datos financieros.

---

## 🚀 MÓDULO VI: Sistema Integrado Unificado, Gestión de Riesgos y Fiscalidad

### 6.1 Pipeline Unificado de Producción
Orquestación en tiempo real de las 7 etapas:
1. Conexión segura con la API del Broker.
2. Captura de precios e información en tiempo real.
3. Evaluación de sentimiento financiero (NLP).
4. Cálculo de indicadores técnicos y detección de régimen HMM.
5. Predicción con modelo de Machine Learning.
6. Emisión de señal cuantitativa unificada.
7. Envío y ejecución automatizada de la orden en el Broker.

### 6.2 Gestión de Riesgo y Position Sizing
- **Gestión por Riesgo Porcentual:** Determina la cantidad de acciones a comprar según la distancia al Stop Loss:
  \[
  \text{Tamaño de Posición} = \frac{\text{Capital Total} \times \text{Riesgo \%}}{\text{Precio de Entrada} - \text{Stop Loss}}
  \]
- **Criterio de Kelly:** Optimización del porcentaje de capital a arriesgar en cada operación para maximizar el crecimiento de la cuenta a largo plazo.

### 6.3 Certificaciones Financieras y Entorno Regulatorio / Fiscal
- **Certificaciones Financieras:** CFA (Análisis Financiero), FRM (Gestión de Riesgos), CQF (Finanzas Cuantitativas) y CMT (Análisis Técnico).
- **Responsabilidad Fiscal:** Declaración de impuestos sobre ganancias de capital realizadas, deducción de comisiones operativas y firma del formulario W-8BEN para inversiones internacionales.
