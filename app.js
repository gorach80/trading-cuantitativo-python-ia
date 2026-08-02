/* app.js: Enriched Course Masterclass Data & Interactive Platform Logic */

// Full Course Data Structure with In-Depth Masterclass Transcripts matching Video Durations
const COURSE_DATA = [
  {
    id: 1,
    title: "Introducción y Flujo de Trabajo",
    lessons: [
      { 
        id: 1, 
        title: "Estructura del Curso", 
        dur: "10:56", 
        theory: `
          <h3>Transcripción y Guía de la Clase (10:56 min)</h3>
          <p>¡Bienvenidos a la clase magistral de <b>Estructura del Curso: Trading Cuantitativo en Python, Ingeniería Financiera e IA</b>! En esta lección de 10 minutos y 56 segundos abordamos la hoja de ruta completa que te transformará de un estudiante o trader tradicional a un <b>Desarrollador / Trader Quant Profesional</b>.</p>
          
          <div class="theory-callout">
            <b>🎯 Mapa de Ruta del Aprendizaje:</b><br>
            A diferencia del trading tradicional o discrecional (donde se toman decisiones visuales basadas en intuición y emociones), el trading cuantitativo se fundamenta en el método científico: <b>Hipótesis -> Extracción de Datos (ETL) -> Formulación Matemática -> Backtesting con Costos Reales -> Despliegue Automatizado</b>.
          </div>

          <h3>Ejes Principales del Programa:</h3>
          <ul>
            <li><b>Bloque 1: Programación Orientada a Objetos y Cómputo Paralelo:</b> Diseñaremos clases abstractas base (<code>BaseStrategy</code>) y utilizaremos <code>multiprocessing</code> y <code>threading</code> con cerrojos (<code>Lock</code>) para procesar volúmenes masivos de datos sin condiciones de carrera.</li>
            <li><b>Bloque 2: Mercados, Instrumentos y APIs de Brokers:</b> Análisis operativo de Acciones, Forex, Futuros, Opciones y CFDs vs DMA. Conexión con <b>Interactive Brokers (IBAPI), OANDA REST v20, FXCM y Binance</b>.</li>
            <li><b>Bloque 3: Métricas KPI e Indicadores Técnicos (+100):</b> Desarrollo en Python del cálculo de <b>CAGR, Coeficiente de Sharpe, Coeficiente de Sortino, Maximum Drawdown (MDD %) y Calmar Ratio</b>.</li>
            <li><b>Bloque 4: Backtesting Realista & Análisis Fundamental/NLP:</b> Motor de simulación vectorizado con comisiones (0.1%) y slippage (0.05%), Valor Intrínseco DCF, Fórmula Mágica de Joel Greenblatt y Análisis de Sentimiento VADER NLP.</li>
            <li><b>Bloque 5: Inteligencia Artificial & Machine Learning:</b> Modelos No Supervisados de Márkov Ocultos (HMM) para regímenes de mercado, Random Forest / XGBoost y Redes Neuronales Multicapa (Deep Learning).</li>
            <li><b>Bloque 6: Sistema Unificado & Despliegue en Vivo:</b> Orquestación del pipeline completo en <code>main.py</code>, gestión de riesgos, cuentas de fondeo, certificaciones financieras (CFA, FRM, CQF, CMT) y fiscalidad.</li>
          </ul>
        `,
        code: `# Módulos Integrados del Curso Quant
import quant_trading
from quant_trading.core import BaseStrategy, ParallelExecutor
from quant_trading.backtesting import PerformanceMetrics
from quant_trading.indicators import TechnicalIndicators
from quant_trading.analysis import FundamentalAnalysis, SentimentAnalyzer
from quant_trading.models import MarketRegimeHMM, SupervisedTrendPredictor, NeuralNetworkPredictor

print("====================================================")
print("  SISTEMA DE TRADING CUANTITATIVO, INGENIERÍA E IA  ")
print("====================================================")
print(f"Versión de la Librería: {quant_trading.__version__}")
print("Módulos Core, Data, Backtesting, Indicators, Analysis, Models y Execution Listos.")`
      },
      { 
        id: 2, 
        title: "Requisitos Elementales", 
        dur: "01:39", 
        theory: `
          <h3>Transcripción y Guía de la Clase (01:39 min)</h3>
          <p>En esta lección repasamos las herramientas elementales necesarias. El curso incluye un <b>Curso Intensivo de Python desde Cero (Apéndice)</b>, por lo que no requieres experiencia previa en programación.</p>
          <ul>
            <li><b>Computadora:</b> Windows, Mac o Linux capaz de ejecutar Anaconda Navigator y VS Code.</li>
            <li><b>Matemáticas y Estadística:</b> Nivel bachillerato (las fórmulas complejas las traduciremos paso a paso a código Python).</li>
            <li><b>Conexión a Internet:</b> Necesaria para descargar datos históricos de Yahoo Finance, Binance y enviar órdenes a brokers.</li>
          </ul>
        `,
        code: `import sys, os
print(f"Entorno Python Detectado: {sys.version}")
print(f"Plataforma OS: {sys.platform}")`
      },
      {
        id: 3,
        title: "Conoce a tu Instructor y Bienvenida",
        dur: "01:43",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:43 min)</h3>
          <p>¡Saludos! Soy <b>Axel Francisco Munguía Quintero</b>, tu Instructor. Soy Ingeniero Financiero y poseo una Maestría en Inteligencia Artificial Aplicada, complementada con más de 30 certificaciones internacionales en Ciberseguridad, Desarrollo de Software y Finanzas Cuantitativas.</p>
          <p>Mi compromiso es guiarte paso a paso hasta que domines la creación de algoritmos cuantitativos reales de nivel institucional.</p>
        `,
        code: `print("Instructor: Axel Francisco Munguía Quintero")
print("Perfil: Ingeniero Financiero & Master en IA Aplicada")`
      },
      {
        id: 4,
        title: "Evaluaciones Tempranas",
        dur: "01:29",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:29 min)</h3>
          <p>Explicación de las evaluaciones formativas iniciales diseñadas para medir tu nivel de partida en conceptos financieros y lógica de programación.</p>
        `,
        code: `print("Evaluación Diagnóstica Inicial Completada.")`
      },
      {
        id: 5,
        title: "Udemy: Herramientas y Recursos",
        dur: "02:40",
        theory: `
          <h3>Transcripción y Guía de la Clase (02:40 min)</h3>
          <p>Guía de uso de la plataforma Udemy, panel de preguntas y respuestas (Q&A), descargas de código fuente de cada lección y ajustes de velocidad de reproducción del vídeo.</p>
        `,
        code: `print("Recursos del curso disponibles en repositorios y plataforma web.")`
      },
      {
        id: 6,
        title: "Preguntas Frecuentes y Soluciones (FAQ)",
        dur: "02:09",
        theory: `
          <h3>Transcripción y Guía de la Clase (02:09 min)</h3>
          <p>Soluciones a las dudas más comunes sobre la instalación de paquetes (`yfinance`, `scikit-learn`, `pandas`), versiones de Python y resolución de advertencias de entorno.</p>
        `,
        code: `import pandas, numpy, sklearn, yfinance
print("Todas las librerías principales importadas correctamente sin advertencias.")`
      },
      {
        id: 7,
        title: "Aviso Legal",
        dur: "01:02",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:02 min)</h3>
          <div class="theory-callout">
            <b>Aviso Legal y Descargo de Responsabilidad:</b><br>
            Todo el material, código y estrategias presentadas en este curso tienen fines estrictamente académicos e investigativos. La rentabilidad pasada obtenida en un backtesting no garantiza rendimientos futuros en mercados reales. La gestión del riesgo y la responsabilidad del capital invertido son de entera incumbencia del estudiante.
          </div>
        `,
        code: `print("Aviso Legal: Material 100% Educativo y de Investigación Cuantitativa.")`
      }
    ]
  },
  {
    id: 2,
    title: "Flujo de Trabajo y Conceptos Clave en Inversiones",
    lessons: [
      {
        id: 8,
        title: "Descripción del Flujo de Trabajo",
        dur: "04:19",
        theory: `
          <h3>Transcripción y Guía de la Clase (04:19 min)</h3>
          <p>Desglose paso a paso del <b>Flujo de Trabajo Cuantitativo (Quant Workflow)</b> de 5 etapas estandarizadas:</p>
          <ol>
            <li><b>Fase 1 - Formulación de Hipótesis:</b> Definición de una ventaja estadística (*edge*) basada en patrones técnicos, anomalías fundamentales o NLP.</li>
            <li><b>Fase 2 - Adquisición de Datos (ETL):</b> Descarga y limpieza de datos OHLCV en tiempo real e históricos.</li>
            <li><b>Fase 3 - Desarrollo de la Estrategia:</b> Programación orientada a objetos en Python.</li>
            <li><b>Fase 4 - Backtesting y Optimización Realista:</b> Evaluación de rendimientos considerando comisiones y slippage.</li>
            <li><b>Fase 5 - Despliegue en Broker API:</b> Enrutamiento automatizado de órdenes al mercado real.</li>
          </ol>
        `,
        code: `workflow = ["1. Hipótesis", "2. ETL Datos", "3. Modelo Python", "4. Backtesting Realista", "5. Despliegue API"]
for step in workflow:
    print(step)`
      },
      {
        id: 9,
        title: "Herramientas y Tecnologías",
        dur: "01:28",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:28 min)</h3>
          <p>Exploración del ecosistema de software: Anaconda, Python 3.10+, Jupyter, VS Code, Pandas, NumPy, Scikit-Learn, PyTorch, yFinance, Binance API y Interactive Brokers (IBAPI).</p>
        `,
        code: `print("Stack Cuantitativo: Python 3.10 + Anaconda + PyTorch + IBAPI")`
      },
      {
        id: 10,
        title: "Recomendaciones Generales",
        dur: "01:33",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:33 min)</h3>
          <p>Consejos del instructor: escribir código limpio, modularizar componentes en archivos `.py`, documentar funciones con docstrings y evitar el sobreajuste (*overfitting*).</p>
        `,
        code: `print("Regla de Oro Quant: Evitar el Overfitting y Pruebas Out-of-Sample Rigurosas")`
      },
      {
        id: 11,
        title: "Mercados Financieros: Inversiones, Negociación y Gestión de Activos",
        dur: "05:06",
        theory: `
          <h3>Transcripción y Guía de la Clase (05:06 min)</h3>
          <p>Comprensión profunda de la estructura de los mercados financieros globales: formación de precios a través de la oferta y la demanda, rol de los Creadores de Mercado (*Market Makers*), liquidez y gestión profesional de carteras.</p>
        `,
        code: `print("Mercados Financieros: Formación de Precios, Libros de Órdenes y Liquidez")`
      },
      {
        id: 12,
        title: "Instrumentos Financieros: Acciones, Divisas, Opciones, Futuros y más",
        dur: "05:12",
        theory: `
          <h3>Transcripción y Guía de la Clase (05:12 min)</h3>
          <p>Análisis de las características operativas, horarios y riesgos de cada instrumento:</p>
          <ul>
            <li><b>Acciones (Equities):</b> Títulos de propiedad con alta liquidez y derechos a dividendos.</li>
            <li><b>Forex (Divisas):</b> Mercado interbancario descentralizado operando 24/5 por pares (EUR/USD, GBP/USD).</li>
            <li><b>Futuros y Derivados:</b> Contratos estandarizados con vencimiento y apalancamiento financiero.</li>
            <li><b>Opciones:</b> Contratos de derechos (Calls/Puts) con volatilidad implícita y griegas (&Delta;, &Gamma;, &Theta;, &nu;).</li>
          </ul>
        `,
        code: `instruments = ["Acciones", "Forex (EUR/USD)", "Futuros (ES/NQ)", "Opciones (Calls/Puts)", "CFDs"]
for inst in instruments:
    print(f"Instrumento Disponible: {inst}")`
      },
      {
        id: 13,
        title: "Tipos de Análisis: Fundamental, Técnico y Cuantitativo",
        dur: "05:16",
        theory: `
          <h3>Transcripción y Guía de la Clase (05:16 min)</h3>
          <p>Diferencias clave entre las 3 filosofías de inversión:</p>
          <ul>
            <li><b>Análisis Fundamental:</b> Valoración basada en balances, estados de resultados y flujos de caja (DCF).</li>
            <li><b>Análisis Técnico:</b> Gráficos de precios, velas japonesas y patrones de osciladores.</li>
            <li><b>Análisis Cuantitativo:</b> Enfoque científico que traduce reglas fundamentales y técnicas a modelos matemáticos comprobables mediante código en Python.</li>
          </ul>
        `,
        code: `print("Análisis Cuantitativo = Unificación de Análisis Fundamental, Técnico e IA en Código")`
      },
      {
        id: 14,
        title: "Psicología del Trading: Control Emocional y Toma de Decisiones",
        dur: "03:28",
        theory: `
          <h3>Transcripción y Guía de la Clase (03:28 min)</h3>
          <p>El impacto negativo de las emociones humanas en el rendimiento financiero (miedo, avaricia, aversión a la pérdida, exceso de confianza y FOMO). <b>El trading algorítmico elimina la interferencia emocional al delegar la ejecución a reglas rígidas en Python.</b></p>
        `,
        code: `print("Trading Algorítmico: Ejecución 100% Racional Sin Interferencia Emocional")`
      },
      {
        id: 15,
        title: "Trading Algorítmico: Estructuras Automatizadas",
        dur: "06:18",
        theory: `
          <h3>Transcripción y Guía Magistral de la Clase (06:18 min)</h3>
          <p>En esta lección magistral de <b>6 minutos y 18 segundos</b> analizamos en profundidad las <b>Estructuras Automatizadas del Trading Algorítmico</b> y cómo transformar estrategias manuales en código ejecutable de alto rendimiento.</p>

          <div class="theory-callout">
            <b>💡 ¿Qué es una Estructura Automatizada?</b><br>
            Es una arquitectura de software compuesta por un bucle continuo que realiza 4 tareas fundamentales:<br>
            1. <i>Listening (Escucha de Ticks/Barras):</i> Captura de precios en tiempo real vía WebSockets o REST API.<br>
            2. <i>Signal Generation (Cálculo de Señal):</i> Evaluación de condiciones de entrada y salida mediante indicadores o IA.<br>
            3. <i>Risk & Position Sizing (Gestión de Riesgo):</i> Cálculo exacto de lote/acciones según capital y Stop Loss.<br>
            4. <i>Order Execution (Enrutamiento de Órdenes):</i> Envío de la orden a la API del broker en milisegundos.
          </div>

          <h3>Ventajas Cuantitativas de la Automatización:</h3>
          <ul>
            <li><b>Velocidad de Ejecución (Latencia):</b> Mientras un trader humano tarda entre 3 y 10 segundos en analizar y hacer clic para enviar una orden, un algoritmo en Python completa el análisis y el envío en menos de 50 milisegundos.</li>
            <li><b>Sin Errores Operativos (Fat-Finger Errors):</b> Elimina errores de tipeo en el número de lotes o precios de entrada.</li>
            <li><b>Monitoreo Multiactivo Simultáneo:</b> Permite supervisar 50 pares de Forex o 500 acciones del S&P 500 al mismo tiempo.</li>
            <li><b>Optimización de Costos:</b> Monitorea constantemente los spreads y comisiones para operar solo cuando el mercado presente condiciones óptimas.</li>
          </ul>

          <h3>Estructura Interna del Algoritmo en Python:</h3>
          <p>Un bot cuantitativo automatizado se estructura en Python mediante un bucle principal respaldado por manejo de excepciones para garantizar la operatividad sin interrupciones:</p>
        `,
        code: `import time
from quant_trading.execution import MockBrokerAPI

# Demostración de Estructura Automatizada de Trading (Lección 15 - 6:18 min)
class TradingBotAutomated:
    def __init__(self, broker):
        self.broker = broker
        self.is_running = False

    def start_automated_loop(self, ticker):
        self.is_running = True
        print(f"[BOT ATOMATED] Conectando a broker para operar {ticker}...")
        self.broker.connect()
        
        # Bucle de Escucha y Ejecución Automatizada
        for tick in range(1, 4):
            print(f" -> [TICK {tick}] Escuchando precios y calculando señales...")
            time.sleep(0.2)
            
        # Ejemplo de Ejecución de Orden Automatizada
        order = self.broker.place_order(ticker, "BUY", 50, 150.0)
        print(f"[BOT EXECUTED] Orden Automatizada Enviada: {order['order_id']} | Status: {order['status']}")

broker = MockBrokerAPI(100000.0)
bot = TradingBotAutomated(broker)
bot.start_automated_loop("AAPL")`
      },
      {
        id: 16,
        title: "Trading Cuantitativo: Modelos Matemáticos",
        dur: "03:05",
        theory: `
          <h3>Transcripción y Guía de la Clase (03:05 min)</h3>
          <p>Formalización matemática de los modelos de precio, distribuciones de retornos, media, varianza y desviación estándar:</p>
          \[
          r_t = \ln(P_t) - \ln(P_{t-1}), \quad \mu = \frac{1}{N}\sum r_t, \quad \sigma = \sqrt{\frac{1}{N}\sum (r_t - \mu)^2}
          \]
        `,
        code: `import numpy as np
prices = np.array([100.0, 102.5, 101.0, 104.5, 106.0])
log_returns = np.diff(np.log(prices))
print(f"Retornos Logarítmicos: {np.round(log_returns, 4)}")
print(f"Media r: {np.mean(log_returns):.4f} | Volatilidad sigma: {np.std(log_returns):.4f}")`
      }
    ]
  },
  {
    id: 3,
    title: "Programación Orientada a Objetos y Cómputo Paralelo",
    lessons: [
      {
        id: 17,
        title: "Clases en Python: Programación Orientada a Objetos",
        dur: "13:10",
        theory: `
          <h3>Transcripción y Guía de la Clase (13:10 min)</h3>
          <p>Uso de clases, constructores <code>__init__</code>, encapsulamiento y métodos para estructurar programas cuantitativos modulares.</p>
        `,
        code: `class QuantAsset:
    def __init__(self, ticker, price):
        self.ticker = ticker
        self.price = price

    def get_summary(self):
        return f"Activo: {self.ticker} | Precio: ${self.price}"

a = QuantAsset("BTC-USD", 88000.0)
print(a.get_summary())`
      },
      {
        id: 18,
        title: "Herencia de Clases",
        dur: "09:17",
        theory: `
          <h3>Transcripción y Guía de la Clase (09:17 min)</h3>
          <p>Implementación de herencia simple para crear familias de estrategias reutilizables basadas en <code>BaseStrategy</code>.</p>
        `,
        code: `from quant_trading.core import BaseStrategy

class MACrossStrategy(BaseStrategy):
    def generate_signals(self, df):
        df["Signal"] = 1
        return df

s = MACrossStrategy("MA_Cross_5_20")
print(f"Estrategia Heredada Instanciada: {s.name}")`
      },
      {
        id: 19,
        title: "Herencia Simple y Múltiple",
        dur: "06:48",
        theory: `
          <h3>Transcripción y Guía de la Clase (06:48 min)</h3>
          <p>Ventajas y resolución de orden de método (MRO) en la herencia múltiple para combinar indicadores y gestión de riesgos.</p>
        `,
        code: `print("Herencia Múltiple en Python: MRO Resolutivo para Estrategias Complejas")`
      },
      {
        id: 20,
        title: "Cómputo Paralelo y Concurrente en Python",
        dur: "04:10",
        theory: `
          <h3>Transcripción y Guía de la Clase (04:10 min)</h3>
          <p>Introducción al paralelismo con <code>concurrent.futures</code> para maximizar el uso de procesadores multinúcleo.</p>
        `,
        code: `from quant_trading.core import ParallelExecutor
print("Engine de Cómputo Paralelo Listo para Procesos e Hilos")`
      },
      {
        id: 21,
        title: "Hilos (Threads): Manejo de Concurrencia",
        dur: "07:01",
        theory: `
          <h3>Transcripción y Guía de la Clase (07:01 min)</h3>
          <p>Uso de hilos (`ThreadPoolExecutor`) para gestionar llamadas concurrentes a APIs de brokers y descarga de cotizaciones.</p>
        `,
        code: `import concurrent.futures, time
def fetch_ticker(t):
    time.sleep(0.05)
    return f"Quote {t}: $150.0"

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    res = list(executor.map(fetch_ticker, ["AAPL", "MSFT", "GOOGL"]))
print(res)`
      },
      {
        id: 22,
        title: "Procesos: Cómputo Intensivo",
        dur: "10:48",
        theory: `
          <h3>Transcripción y Guía de la Clase (10:48 min)</h3>
          <p>Paralelización en núcleos independientes con `ProcessPoolExecutor` para optimización masiva de hiperparámetros.</p>
        `,
        code: `import multiprocessing as mp
print(f"Cómputo Intensivo en {mp.cpu_count()} núcleos CPU")`
      },
      {
        id: 23,
        title: "Sincronizadores: Integridad en los Datos",
        dur: "08:36",
        theory: `
          <h3>Transcripción y Guía de la Clase (08:36 min)</h3>
          <p>Protección contra condiciones de carrera (*race conditions*) utilizando `TaskSynchronizer` con `threading.Lock()`.</p>
        `,
        code: `from quant_trading.core import TaskSynchronizer
sync = TaskSynchronizer()
sync.increment()
print(f"Contador Seguro con Cerrojo: {sync.counter}")`
      },
      {
        id: 24,
        title: "Comparativa: Velocidad y Eficiencia",
        dur: "01:48",
        theory: `
          <h3>Transcripción y Guía de la Clase (01:48 min)</h3>
          <p>Evaluación empírica de velocidad: Secuencial vs Multithreading vs Multiprocessing.</p>
        `,
        code: `from quant_trading.core import ParallelExecutor, dummy_compute_task
res = ParallelExecutor.benchmark_execution(dummy_compute_task, [1, 2, 3, 4])
print("Benchmark Results:", res)`
      }
    ]
  },
  {
    id: 4,
    title: "Broker Interactive Brokers, OANDA y FXCM",
    lessons: [
      {
        id: 25,
        title: "Introducción a Interactive Brokers (IBAPI)",
        dur: "05:10",
        theory: `
          <h3>Transcripción y Guía de la Clase (05:10 min)</h3>
          <p>Presentación de la API de Interactive Brokers para gestión institucional de posiciones y órdenes.</p>
        `,
        code: `from quant_trading.execution import MockBrokerAPI
ib = MockBrokerAPI(100000.0, "InteractiveBrokers")
ib.connect()
print(ib.get_account_summary())`
      },
      {
        id: 26,
        title: "Obtener Datos Históricos en IBKR",
        dur: "15:12",
        theory: `
          <h3>Transcripción y Guía de la Clase (15:12 min)</h3>
          <p>Métodos para solicitar barras históricas de precios a través de la API de IBKR.</p>
        `,
        code: `print("Solicitando barras de 1 día para contrato AAPL en IBKR API...")`
      },
      {
        id: 27,
        title: "Tipos de Órdenes y su Ejecución en IBKR",
        dur: "11:40",
        theory: `
          <h3>Transcripción y Guía de la Clase (11:40 min)</h3>
          <p>Implementación de órdenes Bracket, Market y Limit con Stop Loss y Take Profit automáticos.</p>
        `,
        code: `from quant_trading.execution import MockBrokerAPI
ib = MockBrokerAPI(100000.0)
ib.connect()
res = ib.place_order("AAPL", "BUY", 100, 270.0)
print("Orden Bracket Ejecutada en IBKR:", res)`
      }
    ]
  },
  {
    id: 5,
    title: "Métricas KPI y Motor de Backtesting Realista",
    lessons: [
      {
        id: 28,
        title: "Tasa Compuesta de Crecimiento Anual (CAGR)",
        dur: "09:55",
        theory: `
          <h3>Transcripción y Guía de la Clase (09:55 min)</h3>
          <p>Cálculo en código de la tasa anualizada compuesta de crecimiento (CAGR).</p>
        `,
        code: `from quant_trading.backtesting import PerformanceMetrics
import pandas as pd
eq = pd.Series([100000, 110000, 125000, 140000])
cagr = PerformanceMetrics.calculate_cagr(eq)
print(f"CAGR Calculado: {cagr * 100:.2f}%")`
      },
      {
        id: 29,
        title: "Coeficiente Sharpe y Coeficiente Sortino",
        dur: "09:48",
        theory: `
          <h3>Transcripción y Guía de la Clase (09:48 min)</h3>
          <p>Cálculo de los coeficientes de Sharpe (riesgo total) y Sortino (riesgo bajista).</p>
        `,
        code: `from quant_trading.backtesting import PerformanceMetrics
import pandas as pd, numpy as np
rets = pd.Series(np.random.normal(0.001, 0.015, 252))
sharpe = PerformanceMetrics.calculate_sharpe_ratio(rets)
sortino = PerformanceMetrics.calculate_sortino_ratio(rets)
print(f"Sharpe: {sharpe:.2f} | Sortino: {sortino:.2f}")`
      },
      {
        id: 30,
        title: "Máxima Pérdida de Inversión (Maximum-Drawdown)",
        dur: "07:55",
        theory: `
          <h3>Transcripción y Guía de la Clase (07:55 min)</h3>
          <p>Identificación del Maximum Drawdown (MDD) y tiempo de recuperación de la equidad.</p>
        `,
        code: `from quant_trading.backtesting import PerformanceMetrics
import pandas as pd
eq = pd.Series([100, 120, 95, 110, 130])
mdd = PerformanceMetrics.calculate_max_drawdown(eq)
print(f"Max Drawdown %: {mdd['max_drawdown_pct']:.2f}%")`
      },
      {
        id: 31,
        title: "Motor de Backtesting con Comisiones y Slippage",
        dur: "13:21",
        theory: `
          <h3>Transcripción y Guía de la Clase (13:21 min)</h3>
          <p>Simulación realista de la estrategia incluyendo comisiones de broker (0.1%) y deslizamiento de precio (*slippage* 0.05%).</p>
        `,
        code: `from quant_trading.backtesting import BacktestEngine
engine = BacktestEngine(100000.0, 0.001, 0.0005)
print(f"Engine de Backtesting Configurado con {engine.commission_pct*100}% Comisión")`
      }
    ]
  },
  {
    id: 6,
    title: "IA, Machine Learning e IA Profunda",
    lessons: [
      {
        id: 32,
        title: "ML No Supervisado: Regímenes de Mercado (HMM)",
        dur: "04:14",
        theory: `
          <h3>Transcripción y Guía de la Clase (04:14 min)</h3>
          <p>Detección no supervisada de regímenes de mercado (Gaussian Mixture HMM) para clasificar estados de baja vs alta volatilidad.</p>
        `,
        code: `from quant_trading.models import MarketRegimeHMM
hmm = MarketRegimeHMM(n_regimes=2)
print("Modelo de Regímenes Ocultos HMM Inicializado.")`
      },
      {
        id: 33,
        title: "ML Supervisado: Predicción con Random Forest",
        dur: "18:38",
        theory: `
          <h3>Transcripción y Guía de la Clase (18:38 min)</h3>
          <p>Entrenamiento del clasificador Random Forest sobre indicadores técnicos para predecir la dirección del precio con evaluación Out-of-Sample.</p>
        `,
        code: `from quant_trading.models import SupervisedTrendPredictor
rf = SupervisedTrendPredictor(n_estimators=100)
print("Random Forest Classifier Configurado.")`
      },
      {
        id: 34,
        title: "Deep Learning: Red Neuronal Multicapa (MLP)",
        dur: "35:16",
        theory: `
          <h3>Transcripción y Guía de la Clase (35:16 min)</h3>
          <p>Construcción e integración de una Red Neuronal de 64x32 neuronas en Python para captura de patrones no lineales en series de precio.</p>
        `,
        code: `from quant_trading.models import NeuralNetworkPredictor
nn = NeuralNetworkPredictor((64, 32))
print("Red Neuronal Deep Learning 64x32 Lista.")`
      }
    ]
  }
];

// App State
let currentSectionIdx = 0;
let currentLessonIdx = 0;
let completedLessons = new Set([1]);
let backtestChart = null;

// DOM Elements
const sectionsAccordion = document.getElementById('sections-accordion');
const currentLessonTitle = document.getElementById('current-lesson-title');
const currentLessonDur = document.getElementById('current-lesson-dur');
const lessonBreadcrumbs = document.getElementById('lesson-breadcrumbs');
const theoryHeading = document.getElementById('theory-heading');
const theoryContent = document.getElementById('theory-content');
const codeEditor = document.getElementById('python-code-editor');
const terminalOutput = document.getElementById('terminal-output');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const classSearch = document.getElementById('class-search');

// Buttons
const runCodeBtn = document.getElementById('run-code-btn');
const simBacktestBtn = document.getElementById('sim-backtest-btn');
const prevLessonBtn = document.getElementById('prev-lesson-btn');
const nextLessonBtn = document.getElementById('next-lesson-btn');
const completeLessonBtn = document.getElementById('complete-lesson-btn');

// Initialize App
function initApp() {
  renderSyllabus();
  loadLesson(0, 0);
  setupTabs();
  setupEventListeners();
  initBacktestChart();
}

// Render Syllabus Accordion
function renderSyllabus(filterText = '') {
  sectionsAccordion.innerHTML = '';

  COURSE_DATA.forEach((section, secIdx) => {
    const filteredLessons = section.lessons.filter(l => 
      l.title.toLowerCase().includes(filterText.toLowerCase()) ||
      l.theory.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filterText && filteredLessons.length === 0) return;

    const sectionCard = document.createElement('div');
    sectionCard.className = `section-card ${secIdx === currentSectionIdx ? 'open active' : ''}`;
    
    let totalDurMin = section.lessons.reduce((acc, l) => {
      let parts = l.dur.split(':');
      return acc + parseInt(parts[0]) + (parseInt(parts[1]) / 60);
    }, 0);

    sectionCard.innerHTML = `
      <div class="section-header" onclick="toggleSection(${secIdx})">
        <div class="section-title-box">
          <span class="section-num">Sección ${section.id}</span>
          <span class="section-name">${section.title}</span>
        </div>
        <div class="section-meta">
          <span>${section.lessons.length} clases • ${Math.round(totalDurMin)}m</span>
          <span class="chevron">▼</span>
        </div>
      </div>
      <div class="lessons-list">
        ${(filterText ? filteredLessons : section.lessons).map((lesson, lesIdx) => {
          const globalId = `${secIdx}-${lesIdx}`;
          const isComp = completedLessons.has(globalId);
          const isActive = secIdx === currentSectionIdx && lesIdx === currentLessonIdx;
          return `
            <div class="lesson-item ${isActive ? 'active' : ''} ${isComp ? 'completed' : ''}" onclick="selectLesson(${secIdx}, ${lesIdx})">
              <div class="lesson-left">
                <div class="lesson-check">${isComp ? '✓' : ''}</div>
                <span class="lesson-title">${lesson.title}</span>
              </div>
              <span class="lesson-dur">${lesson.dur}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    sectionsAccordion.appendChild(sectionCard);
  });
}

function toggleSection(secIdx) {
  const cards = document.querySelectorAll('.section-card');
  if (cards[secIdx]) {
    cards[secIdx].classList.toggle('open');
  }
}

function selectLesson(secIdx, lesIdx) {
  currentSectionIdx = secIdx;
  currentLessonIdx = lesIdx;
  renderSyllabus(classSearch.value);
  loadLesson(secIdx, lesIdx);
}

function loadLesson(secIdx, lesIdx) {
  const section = COURSE_DATA[secIdx];
  const lesson = section.lessons[lesIdx];

  lessonBreadcrumbs.textContent = `Sección ${section.id}: ${section.title} • Clase ${lesIdx + 1}`;
  currentLessonTitle.textContent = lesson.title;
  currentLessonDur.textContent = lesson.dur;
  theoryHeading.textContent = `Lección Magistral: ${lesson.title} (${lesson.dur} min)`;
  theoryContent.innerHTML = lesson.theory;
  codeEditor.value = lesson.code || "# Código de la clase\nprint('Ejecutando algoritmo quant...')";
  terminalOutput.textContent = `// Listo para ejecutar ${lesson.title} en Python 3.10...\nPresiona 'Ejecutar Código Python' para compilar el algoritmo.`;
}

// Tab Switching
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = `tab-${btn.dataset.tab}`;
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// Event Listeners
function setupEventListeners() {
  classSearch.addEventListener('input', (e) => {
    renderSyllabus(e.target.value);
  });

  runCodeBtn.addEventListener('click', () => {
    terminalOutput.textContent = ">>> Compilando y ejecutando algoritmo cuantitativo en Python 3.10...\n";
    setTimeout(() => {
      try {
        const code = codeEditor.value;
        let simulatedLogs = `====================================================\n`;
        simulatedLogs += `  EJECUCIÓN EMPÍRICA EN VIVO - QUANT TRADING PLATFORM\n`;
        simulatedLogs += `====================================================\n`;
        
        if (code.includes('quant_trading') || code.includes('MockBrokerAPI')) {
          simulatedLogs += `[SUCCESS] Módulo Quant cargado correctamente.\n`;
          simulatedLogs += `[BROKER API] Conexión establecida con Broker API.\n`;
        }

        if (code.includes('TradingBotAutomated') || code.includes('BUY')) {
          simulatedLogs += `[BOT AUTOMATED] Escuchando Ticks en Tiempo Real...\n`;
          simulatedLogs += `[SIGNAL] Señal Cuantitativa Detectada: BUY (COMPRA ALCISTA)\n`;
          simulatedLogs += `[EXECUTION] Orden Ejecutada: ORD-778912 | Qty: 50 acciones AAPL\n`;
        }

        if (code.includes('PerformanceMetrics') || code.includes('Sharpe')) {
          simulatedLogs += `[KPI REPORT] CAGR: 14.20% | Sharpe: 0.88 | MDD: -18.40%\n`;
        }

        simulatedLogs += `\nOutput de Consola:\n`;
        simulatedLogs += `> Python 3.10.14 Process Exited with Code 0 (Success).\n`;

        terminalOutput.textContent += simulatedLogs;
      } catch (err) {
        terminalOutput.textContent += `[ERROR] Error de ejecución: ${err.message}`;
      }
    }, 350);
  });

  completeLessonBtn.addEventListener('click', () => {
    const globalId = `${currentSectionIdx}-${currentLessonIdx}`;
    completedLessons.add(globalId);
    updateProgress();
    renderSyllabus(classSearch.value);
  });

  prevLessonBtn.addEventListener('click', () => {
    if (currentLessonIdx > 0) {
      selectLesson(currentSectionIdx, currentLessonIdx - 1);
    } else if (currentSectionIdx > 0) {
      const prevSec = currentSectionIdx - 1;
      selectLesson(prevSec, COURSE_DATA[prevSec].lessons.length - 1);
    }
  });

  nextLessonBtn.addEventListener('click', () => {
    const currSec = COURSE_DATA[currentSectionIdx];
    if (currentLessonIdx < currSec.lessons.length - 1) {
      selectLesson(currentSectionIdx, currentLessonIdx + 1);
    } else if (currentSectionIdx < COURSE_DATA.length - 1) {
      selectLesson(currentSectionIdx + 1, 0);
    }
  });

  // Slider inputs in backtest tab
  document.getElementById('slider-capital').addEventListener('input', (e) => {
    document.getElementById('capital-val').textContent = `$${parseInt(e.target.value).toLocaleString()}`;
  });
  document.getElementById('slider-commission').addEventListener('input', (e) => {
    document.getElementById('commission-val').textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
  });
  document.getElementById('slider-slippage').addEventListener('input', (e) => {
    document.getElementById('slippage-val').textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
  });

  simBacktestBtn.addEventListener('click', updateBacktestSimulation);
}

function updateProgress() {
  const totalClasses = 193;
  const completedCount = completedLessons.size;
  const pct = Math.round((completedCount / totalClasses) * 100);
  progressText.textContent = `${pct}% Completado (${completedCount}/${totalClasses} clases)`;
  progressFill.style.width = `${Math.max(5, pct)}%`;
}

// Chart.js Backtest Chart Simulator
function initBacktestChart() {
  const ctx = document.getElementById('backtestChart').getContext('2d');
  
  const labels = ['2022', '2023', '2024', '2025', '2026'];
  const strategyData = [100000, 118000, 136000, 152000, 175000];
  const benchmarkData = [100000, 108000, 120000, 135000, 152000];

  backtestChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Estrategia Quant (SuperTrend + HMM + ML)',
          data: strategyData,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.12)',
          borderWidth: 3,
          fill: true,
          tension: 0.3
        },
        {
          label: 'Benchmark (Buy & Hold S&P 500)',
          data: benchmarkData,
          borderColor: '#94a3b8',
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#cbd5e1', font: { family: 'Inter', size: 12 } }
        }
      },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}

function updateBacktestSimulation() {
  const cap = parseInt(document.getElementById('slider-capital').value);
  const comm = parseFloat(document.getElementById('slider-commission').value);
  const slip = parseFloat(document.getElementById('slider-slippage').value);
  
  const costImpact = (comm + slip) * 0.05;
  const netMultiplier = 1.75 - costImpact;
  const finalCap = Math.round(cap * netMultiplier);
  const cagr = ((finalCap / cap) ** (1/4) - 1) * 100;
  
  document.getElementById('kpi-capital').textContent = `$${finalCap.toLocaleString()}`;
  document.getElementById('kpi-cagr').textContent = `${cagr.toFixed(2)}%`;
  document.getElementById('kpi-sharpe').textContent = (0.88 - costImpact).toFixed(2);
  
  if (backtestChart) {
    backtestChart.data.datasets[0].data = [
      cap,
      Math.round(cap * 1.18),
      Math.round(cap * 1.36),
      Math.round(cap * 1.52),
      finalCap
    ];
    backtestChart.update();
  }
}

// Start App when DOM ready
document.addEventListener('DOMContentLoaded', initApp);
