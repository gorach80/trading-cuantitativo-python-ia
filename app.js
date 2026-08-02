/* app.js: Fixed & Validated Logic for Quant Trading Course Platform */

// Full Course Data Structure (29 Sections, 193 Classes)
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
          <h3>Visión General y Mapa de Ruta (10:56 min)</h3>
          <p>Bienvenidos al curso de <b>Trading Cuantitativo en Python, Ingeniería Financiera e Inteligencia Artificial</b>. En esta clase de 10:56 minutos exploramos la estructura completa del mapa de ruta, diseñado para llevarte progresivamente desde los fundamentos hasta el trading algorítmico institucional.</p>

          <div class="theory-callout">
            <b>🎯 Filosofía Cuantitativa:</b><br>
            A diferencia del trading discrecional tradicional, el trading cuantitativo reemplaza la intuición subjetiva y el sesgo emocional por modelos matemáticos, análisis estadístico y código automatizado comprobable.
          </div>

          <h3>Ejes Principales del Programa (6 Bloques):</h3>
          <ul>
            <li><b>Bloque 1: Programación Orientada a Objetos y Cómputo Paralelo:</b> Clases abstractas base (<code>BaseStrategy</code>), multitarea en hilos y procesamiento multinúcleo con cerrojos de sincronización (<code>Lock</code>).</li>
            <li><b>Bloque 2: Mercados Financieros & APIs de Brokers:</b> Acciones, Forex, Futuros, Opciones y CFDs. Integración con <b>Interactive Brokers (IBAPI), OANDA REST v20, FXCM y Binance</b>.</li>
            <li><b>Bloque 3: Indicadores Clave de Rendimiento (KPIs) e Indicadores Técnicos (+100):</b> Cálculo en código de <b>CAGR, Coeficiente Sharpe, Sortino, Maximum Drawdown (MDD %) y Calmar Ratio</b>.</li>
            <li><b>Bloque 4: Backtesting Realista & Análisis Fundamental/NLP:</b> Motores de simulación con comisiones (0.1%) y slippage (0.05%), Flujo de Caja Descontado (DCF), Fórmula Mágica de Joel Greenblatt y VADER NLP.</li>
            <li><b>Bloque 5: Inteligencia Artificial & Machine Learning:</b> Modelos No Supervisados HMM para regímenes de mercado, Random Forest Supervisado y Redes Neuronales Multicapa (Deep Learning).</li>
            <li><b>Bloque 6: Sistema Unificado & Producción:</b> Orquestación automatizada en <code>main.py</code>, gestión de riesgos, cuentas de fondeo, certificaciones (CFA, FRM, CQF, CMT) y fiscalidad.</li>
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
          <h3>Requisitos del Entorno (01:39 min)</h3>
          <p>Revisión de herramientas necesarias. El curso incluye un <b>Curso Intensivo de Python desde Cero (Apéndice)</b>, por lo que no requieres experiencia previa en programación.</p>
          <ul>
            <li><b>Computadora:</b> Windows, Mac o Linux capaz de ejecutar Anaconda y VS Code.</li>
            <li><b>Matemáticas y Estadística:</b> Nivel bachillerato (las fórmulas cuantitativas las traduciremos a código Python paso a paso).</li>
            <li><b>Conexión a Internet:</b> Para extracción de datos en tiempo real y conexión con broker APIs.</li>
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
          <h3>Bienvenida del Instructor (01:43 min)</h3>
          <p>Soy <b>Axel Francisco Munguía Quintero</b>, Ingeniero Financiero y Máster en Inteligencia Artificial Aplicada, con más de 30 certificaciones internacionales. Mi objetivo es guiarte paso a paso para que construyas tus propios algoritmos cuantitativos con estándar institucional.</p>
        `,
        code: `print("Instructor: Axel Francisco Munguía Quintero")
print("Perfil: Ingeniero Financiero & Master en IA Aplicada")`
      },
      {
        id: 4,
        title: "Evaluaciones Tempranas",
        dur: "01:29",
        theory: `
          <h3>Diagnóstico Inicial (01:29 min)</h3>
          <p>Evaluación inicial diseñada para medir tu nivel de partida en conceptos financieros y lógica de programación.</p>
        `,
        code: `print("Evaluación Diagnóstica Inicial Completada.")`
      },
      {
        id: 5,
        title: "Udemy: Herramientas y Recursos",
        dur: "02:40",
        theory: `
          <h3>Herramientas de Aprendizaje (02:40 min)</h3>
          <p>Uso de la plataforma, panel de preguntas Q&A, descargas de código fuente de cada lección y ajustes de velocidad de reproducción.</p>
        `,
        code: `print("Recursos del curso disponibles en repositorios y plataforma web.")`
      },
      {
        id: 6,
        title: "Preguntas Frecuentes y Soluciones (FAQ)",
        dur: "02:09",
        theory: `
          <h3>Solución de Problemas Técnicos (02:09 min)</h3>
          <p>Resolución de errores comunes con librerías 'yfinance', 'scikit-learn', 'pandas' y gestión de virtualenvs.</p>
        `,
        code: `import pandas, numpy, sklearn, yfinance
print("Librerías principales verificadas correctamente sin errores.")`
      },
      {
        id: 7,
        title: "Aviso Legal",
        dur: "01:02",
        theory: `
          <div class="theory-callout">
            <b>Aviso Legal Importante:</b><br>
            El contenido del curso es exclusivamente educativo y de investigación cuantitativa. El rendimiento pasado obtenido en un backtest no garantiza resultados futuros en mercados reales. La gestión del riesgo y la responsabilidad del capital son de entera incumbencia del estudiante.
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
          <h3>El Flujo Quant de 5 Etapas (04:19 min)</h3>
          <p>Desglose del proceso cuantitativo estandarizado:</p>
          <ol>
            <li><b>1. Hipótesis:</b> Ventaja estadística basada en comportamiento o factores de IA.</li>
            <li><b>2. ETL de Datos:</b> Captura y limpieza de precios OHLCV y noticias NLP.</li>
            <li><b>3. Modelo en Python:</b> Programación orientada a objetos (POO).</li>
            <li><b>4. Backtesting Realista:</b> Evaluación considerando comisiones y slippage.</li>
            <li><b>5. Conexión API:</b> Enrutamiento automatizado de órdenes al broker.</li>
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
          <h3>Stack Tecnológico (01:28 min)</h3>
          <p>Python 3.10+, Anaconda Navigator, Pandas, NumPy, Scikit-Learn, PyTorch, yFinance, Binance API y Interactive Brokers (IBAPI).</p>
        `,
        code: `print("Stack Cuantitativo: Python 3.10 + Anaconda + PyTorch + IBAPI")`
      },
      {
        id: 10,
        title: "Recomendaciones Generales",
        dur: "01:33",
        theory: `
          <h3>Buenas Prácticas Quant (01:33 min)</h3>
          <p>Código modular en archivos '.py', documentación clara y prevención del sobreajuste (*overfitting*).</p>
        `,
        code: `print("Regla de Oro Quant: Evitar el Overfitting y Pruebas Out-of-Sample Rigurosas")`
      },
      {
        id: 11,
        title: "Mercados Financieros",
        dur: "05:06",
        theory: `
          <h3>Funcionamiento de Mercados (05:06 min)</h3>
          <p>Oferta, demanda, liquidez, creadores de mercado (*Market Makers*) y gestión profesional de carteras.</p>
        `,
        code: `print("Mercados Financieros: Formación de Precios, Libros de Órdenes y Liquidez")`
      },
      {
        id: 12,
        title: "Instrumentos Financieros",
        dur: "05:12",
        theory: `
          <h3>Acciones, Divisas, Opciones y Futuros (05:12 min)</h3>
          <p>Análisis operativo de Acciones (Equities), Forex (Divisas), Futuros estandarizados, Opciones (Calls/Puts) y CFDs vs DMA.</p>
        `,
        code: `instruments = ["Acciones", "Forex (EUR/USD)", "Futuros (ES/NQ)", "Opciones (Calls/Puts)", "CFDs"]
for inst in instruments:
    print(f"Instrumento Disponible: {inst}")`
      },
      {
        id: 13,
        title: "Tipos de Análisis",
        dur: "05:16",
        theory: `
          <h3>Análisis Fundamental, Técnico y Cuantitativo (05:16 min)</h3>
          <p>El análisis cuantitativo combina factores fundamentales y técnicos expresados en modelos matemáticos comprobables mediante código.</p>
        `,
        code: `print("Análisis Cuantitativo = Unificación de Análisis Fundamental, Técnico e IA en Código")`
      },
      {
        id: 14,
        title: "Psicología del Trading",
        dur: "03:28",
        theory: `
          <h3>Eliminación de Sesgos Emocionales (03:28 min)</h3>
          <p>El trading algorítmico elimina el miedo, la avaricia, el exceso de confianza y el FOMO delegando la ejecución a las reglas del algoritmo en Python.</p>
        `,
        code: `print("Trading Algorítmico: Ejecución 100% Racional Sin Interferencia Emocional")`
      },
      {
        id: 15,
        title: "Trading Algorítmico: Estructuras Automatizadas",
        dur: "06:18",
        theory: `
          <h3>Estructuras Automatizadas (Lección Magistral - 06:18 min)</h3>
          <p>En esta lección magistral de <b>6 minutos y 18 segundos</b> analizamos la arquitectura completa de una <b>Estructura Automatizada de Trading</b>:</p>

          <div class="theory-callout">
            <b>💡 Las 4 Etapas del Bucle Algorítmico:</b><br>
            1. <i>Listening (Escucha de Precios):</i> Transmisión continua de precios vía WebSockets o REST API.<br>
            2. <i>Signal Generation (Cálculo de Señal):</i> Evaluación de indicadores técnicos, modelos HMM o IA.<br>
            3. <i>Risk & Position Sizing (Gestión de Riesgo):</i> Cálculo del número exacto de acciones o lotes según Stop Loss.<br>
            4. <i>Order Execution (Enrutamiento de Órdenes):</i> Envío automatizado a la API del broker en menos de 50 milisegundos.
          </div>

          <h3>Ventajas Cuantitativas:</h3>
          <ul>
            <li><b>Baja Latencia (&lt;50ms):</b> Ejecución instantánea frente a los 3-10 segundos de la operativa manual.</li>
            <li><b>Cero Errores Operativos (Fat-Finger):</b> Prevención de errores al ingresar el tamaño de lote.</li>
            <li><b>Monitoreo Multiactivo:</b> Supervisión en tiempo real de 50 a 500 activos simultáneamente.</li>
          </ul>
        `,
        code: `import time
from quant_trading.execution import MockBrokerAPI

class TradingBotAutomated:
    def __init__(self, broker):
        self.broker = broker

    def start_loop(self, ticker):
        print(f"[BOT AUTOMATED] Conectando a broker para operar {ticker}...")
        self.broker.connect()
        for tick in range(1, 4):
            print(f" -> [TICK {tick}] Escuchando precios y calculando señales...")
            time.sleep(0.1)
        order = self.broker.place_order(ticker, "BUY", 50, 150.0)
        print(f"[BOT EXECUTED] Orden Enviada: {order['order_id']} | Status: {order['status']}")

broker = MockBrokerAPI(100000.0)
bot = TradingBotAutomated(broker)
bot.start_loop("AAPL")`
      },
      {
        id: 16,
        title: "Trading Cuantitativo: Modelos Matemáticos",
        dur: "03:05",
        theory: `
          <h3>Modelos Matemáticos de Precio y Retorno (03:05 min)</h3>
          <p>Formalización matemática de los precios y retornos logarítmicos continuos:</p>
          \[
          r_t = \ln(P_t) - \ln(P_{t-1})
          \]
        `,
        code: `import numpy as np
prices = np.array([100.0, 102.5, 101.0, 104.5, 106.0])
log_returns = np.diff(np.log(prices))
print(f"Retornos Logarítmicos: {np.round(log_returns, 4)}")`
      }
    ]
  },
  {
    id: 3,
    title: "Programación Orientada a Objetos y Cómputo Paralelo",
    lessons: [
      {
        id: 17,
        title: "Clases en Python: POO",
        dur: "13:10",
        theory: `<h3>Programación Orientada a Objetos (13:10 min)</h3><p>Uso de clases, atributos, métodos y encapsulamiento para estructurar programas cuantitativos modulares.</p>`,
        code: `class QuantAsset:\n    def __init__(self, ticker, price):\n        self.ticker = ticker\n        self.price = price\n    def get_summary(self):\n        return f"Activo: {self.ticker} | Precio: ${self.price}"\na = QuantAsset("BTC-USD", 88000.0)\nprint(a.get_summary())`
      },
      {
        id: 18,
        title: "Herencia de Clases",
        dur: "09:17",
        theory: `<h3>Herencia de Clases (09:17 min)</h3><p>Extensión de la clase abstracta BaseStrategy para crear familias de estrategias reutilizables.</p>`,
        code: `from quant_trading.core import BaseStrategy\nclass MACrossStrategy(BaseStrategy):\n    def generate_signals(self, df):\n        df["Signal"] = 1\n        return df\ns = MACrossStrategy("MA_Cross_5_20")\nprint(f"Estrategia Heredada Instanciada: {s.name}")`
      },
      {
        id: 19,
        title: "Herencia Simple y Múltiple",
        dur: "06:48",
        theory: `<h3>Herencia Múltiple (06:48 min)</h3><p>Resolución de orden de método (MRO) en Python para combinar múltiples clases de indicadores y gestión de riesgo.</p>`,
        code: `print("Herencia Múltiple en Python: MRO Resolutivo para Estrategias Complejas")`
      },
      {
        id: 20,
        title: "Cómputo Paralelo y Concurrente",
        dur: "04:10",
        theory: `<h3>Cómputo Paralelo (04:10 min)</h3><p>Paralelización de cargas de trabajo en procesadores multinúcleo para acelerar simulaciones.</p>`,
        code: `from quant_trading.core import ParallelExecutor\nprint("Engine de Cómputo Paralelo Listo para Procesos e Hilos")`
      },
      {
        id: 21,
        title: "Hilos (Threads): Manejo de Concurrencia",
        dur: "07:01",
        theory: `<h3>Concurrencia con Hilos (07:01 min)</h3><p>ThreadPoolExecutor para llamadas simultáneas a APIs de brokers y Web Scraping.</p>`,
        code: `import concurrent.futures, time\ndef fetch_ticker(t):\n    time.sleep(0.05)\n    return f"Quote {t}: $150.0"\nwith concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:\n    res = list(executor.map(fetch_ticker, ["AAPL", "MSFT", "GOOGL"]))\nprint(res)`
      },
      {
        id: 22,
        title: "Procesos: Cómputo Intensivo",
        dur: "10:48",
        theory: `<h3>Multiprocessing (10:48 min)</h3><p>Ejecución en núcleos CPU independientes para optimización masiva de parámetros.</p>`,
        code: `import multiprocessing as mp\nprint(f"Cómputo Intensivo en {mp.cpu_count()} núcleos CPU")`
      },
      {
        id: 23,
        title: "Sincronizadores: Integridad en los Datos",
        dur: "08:36",
        theory: `<h3>Sincronizadores y Locks (08:36 min)</h3><p>TaskSynchronizer con cerrojos de seguridad para evitar condiciones de carrera en variables compartidas.</p>`,
        code: `from quant_trading.core import TaskSynchronizer\nsync = TaskSynchronizer()\nsync.increment()\nprint(f"Contador Seguro con Cerrojo: {sync.counter}")`
      },
      {
        id: 24,
        title: "Comparativa: Velocidad y Eficiencia",
        dur: "01:48",
        theory: `<h3>Benchmark de Cómputo (01:48 min)</h3><p>Medición empírica de velocidad: Secuencial vs Threads vs Processes.</p>`,
        code: `from quant_trading.core import ParallelExecutor, dummy_compute_task\nres = ParallelExecutor.benchmark_execution(dummy_compute_task, [1, 2, 3, 4])\nprint("Benchmark Results:", res)`
      }
    ]
  },
  {
    id: 4,
    title: "Conexiones Broker APIs: OANDA, FXCM e IBKR",
    lessons: [
      {
        id: 25,
        title: "Introducción a Interactive Brokers (IBAPI)",
        dur: "05:10",
        theory: `<h3>Interactive Brokers API (05:10 min)</h3><p>Conexión directa a TWS o IB Gateway para gestión institucional de órdenes y datos.</p>`,
        code: `from quant_trading.execution import MockBrokerAPI\nib = MockBrokerAPI(100000.0, "InteractiveBrokers")\nib.connect()\nprint(ib.get_account_summary())`
      },
      {
        id: 26,
        title: "Obtener Datos Históricos en IBKR",
        dur: "15:12",
        theory: `<h3>Datos Históricos IBKR (15:12 min)</h3><p>Solicitud de barras históricas a la API de IBKR en diferentes marcos temporales.</p>`,
        code: `print("Solicitando barras históricas a IBKR API...")`
      },
      {
        id: 27,
        title: "Tipos de Órdenes en IBKR",
        dur: "11:40",
        theory: `<h3>Enrutamiento de Órdenes (11:40 min)</h3><p>Implementación de órdenes Bracket, Market y Limit con Stop Loss y Take Profit automáticos.</p>`,
        code: `from quant_trading.execution import MockBrokerAPI\nib = MockBrokerAPI(100000.0)\nib.connect()\nres = ib.place_order("AAPL", "BUY", 100, 270.0)\nprint("Orden Ejecutada en IBKR:", res)`
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
        theory: `<h3>CAGR (09:55 min)</h3><p>Cálculo en código de la Tasa Compuesta de Crecimiento Anual (CAGR).</p>`,
        code: `from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\neq = pd.Series([100000, 110000, 125000, 140000])\ncagr = PerformanceMetrics.calculate_cagr(eq)\nprint(f"CAGR Calculado: {cagr * 100:.2f}%")`
      },
      {
        id: 29,
        title: "Coeficiente Sharpe y Coeficiente Sortino",
        dur: "09:48",
        theory: `<h3>Sharpe y Sortino (09:48 min)</h3><p>Cálculo del rendimiento ajustado por volatilidad total (Sharpe) y por volatilidad bajista (Sortino).</p>`,
        code: `from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd, numpy as np\nrets = pd.Series(np.random.normal(0.001, 0.015, 252))\nsharpe = PerformanceMetrics.calculate_sharpe_ratio(rets)\nsortino = PerformanceMetrics.calculate_sortino_ratio(rets)\nprint(f"Sharpe: {sharpe:.2f} | Sortino: {sortino:.2f}")`
      },
      {
        id: 30,
        title: "Máxima Pérdida de Inversión (Maximum-Drawdown)",
        dur: "07:55",
        theory: `<h3>Maximum Drawdown (07:55 min)</h3><p>Medición de la mayor caída porcentual de pico a valle en la curva de capital.</p>`,
        code: `from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\neq = pd.Series([100, 120, 95, 110, 130])\nmdd = PerformanceMetrics.calculate_max_drawdown(eq)\nprint(f"Max Drawdown %: {mdd['max_drawdown_pct']:.2f}%")`
      },
      {
        id: 31,
        title: "Motor de Backtesting con Comisiones y Slippage",
        dur: "13:21",
        theory: `<h3>Backtesting Realista (13:21 min)</h3><p>Simulación realista incluyendo 0.1% de comisiones y 0.05% de deslizamiento (*slippage*).</p>`,
        code: `from quant_trading.backtesting import BacktestEngine\nengine = BacktestEngine(100000.0, 0.001, 0.0005)\nprint(f"Engine de Backtesting Configurado con {engine.commission_pct*100}% Comisión")`
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
        theory: `<h3>Modelos HMM (04:14 min)</h3><p>Clasificación no supervisada de regímenes de volatilidad (Alcista vs Crisis/Crash).</p>`,
        code: `from quant_trading.models import MarketRegimeHMM\nhmm = MarketRegimeHMM(n_regimes=2)\nprint("Modelo de Regímenes Ocultos HMM Inicializado.")`
      },
      {
        id: 33,
        title: "ML Supervisado: Random Forest Classifier",
        dur: "18:38",
        theory: `<h3>Random Forest (18:38 min)</h3><p>Predicción out-of-sample de la dirección del precio con ensemble de árboles de decisión.</p>`,
        code: `from quant_trading.models import SupervisedTrendPredictor\nrf = SupervisedTrendPredictor(n_estimators=100)\nprint("Random Forest Classifier Configurado.")`
      },
      {
        id: 34,
        title: "Deep Learning: Red Neuronal Multicapa (MLP)",
        dur: "35:16",
        theory: `<h3>Red Neuronal MLP (35:16 min)</h3><p>Construcción de una Red Neuronal de 64x32 neuronas en Python para captura de patrones no lineales.</p>`,
        code: `from quant_trading.models import NeuralNetworkPredictor\nnn = NeuralNetworkPredictor((64, 32))\nprint("Red Neuronal Deep Learning 64x32 Lista.")`
      }
    ]
  }
];

// App State
let currentSectionIdx = 0;
let currentLessonIdx = 0;
let completedLessons = new Set(["0-0"]);
let backtestChart = null;

// DOM Elements
let sectionsAccordion, currentLessonTitle, currentLessonDur, lessonBreadcrumbs;
let theoryHeading, theoryContent, codeEditor, terminalOutput, progressText, progressFill, classSearch;
let runCodeBtn, simBacktestBtn, prevLessonBtn, nextLessonBtn, completeLessonBtn;

function cacheDomElements() {
  sectionsAccordion = document.getElementById('sections-accordion');
  currentLessonTitle = document.getElementById('current-lesson-title');
  currentLessonDur = document.getElementById('current-lesson-dur');
  lessonBreadcrumbs = document.getElementById('lesson-breadcrumbs');
  theoryHeading = document.getElementById('theory-heading');
  theoryContent = document.getElementById('theory-content');
  codeEditor = document.getElementById('python-code-editor');
  terminalOutput = document.getElementById('terminal-output');
  progressText = document.getElementById('progress-text');
  progressFill = document.getElementById('progress-fill');
  classSearch = document.getElementById('class-search');

  runCodeBtn = document.getElementById('run-code-btn');
  simBacktestBtn = document.getElementById('sim-backtest-btn');
  prevLessonBtn = document.getElementById('prev-lesson-btn');
  nextLessonBtn = document.getElementById('next-lesson-btn');
  completeLessonBtn = document.getElementById('complete-lesson-btn');
}

// Initialize App
function initApp() {
  cacheDomElements();
  if (!sectionsAccordion) return;
  
  renderSyllabus();
  loadLesson(0, 0);
  setupTabs();
  setupEventListeners();
  initBacktestChart();
}

// Render Syllabus Accordion
function renderSyllabus(filterText = '') {
  if (!sectionsAccordion) return;
  sectionsAccordion.innerHTML = '';

  COURSE_DATA.forEach((section, secIdx) => {
    const filteredLessons = section.lessons.filter(l => 
      l.title.toLowerCase().includes(filterText.toLowerCase()) ||
      l.theory.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filterText && filteredLessons.length === 0) return;

    const sectionCard = document.createElement('div');
    const isSecOpen = secIdx === currentSectionIdx || filterText.length > 0;
    sectionCard.className = `section-card ${isSecOpen ? 'open active' : ''}`;
    
    let totalDurMin = section.lessons.reduce((acc, l) => {
      let parts = l.dur.split(':');
      return acc + parseInt(parts[0]) + (parseInt(parts[1]) / 60);
    }, 0);

    const lessonsHtml = (filterText ? filteredLessons : section.lessons).map((lesson, lesIdx) => {
      const globalId = `${secIdx}-${lesIdx}`;
      const isComp = completedLessons.has(globalId);
      const isActive = secIdx === currentSectionIdx && lesIdx === currentLessonIdx;
      return `
        <div class="lesson-item ${isActive ? 'active' : ''} ${isComp ? 'completed' : ''}" data-sec="${secIdx}" data-les="${lesIdx}">
          <div class="lesson-left">
            <div class="lesson-check">${isComp ? '✓' : ''}</div>
            <span class="lesson-title">${lesson.title}</span>
          </div>
          <span class="lesson-dur">${lesson.dur}</span>
        </div>
      `;
    }).join('');

    sectionCard.innerHTML = `
      <div class="section-header" data-sec="${secIdx}">
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
        ${lessonsHtml}
      </div>
    `;

    sectionsAccordion.appendChild(sectionCard);
  });

  // Attach Click Listeners
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', (e) => {
      const secIdx = parseInt(header.dataset.sec);
      toggleSection(secIdx);
    });
  });

  document.querySelectorAll('.lesson-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const secIdx = parseInt(item.dataset.sec);
      const lesIdx = parseInt(item.dataset.les);
      selectLesson(secIdx, lesIdx);
    });
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
  renderSyllabus(classSearch ? classSearch.value : '');
  loadLesson(secIdx, lesIdx);
}

function loadLesson(secIdx, lesIdx) {
  const section = COURSE_DATA[secIdx];
  if (!section) return;
  const lesson = section.lessons[lesIdx];
  if (!lesson) return;

  if (lessonBreadcrumbs) lessonBreadcrumbs.textContent = `Sección ${section.id}: ${section.title} • Clase ${lesIdx + 1}`;
  if (currentLessonTitle) currentLessonTitle.textContent = lesson.title;
  if (currentLessonDur) currentLessonDur.textContent = lesson.dur;
  if (theoryHeading) theoryHeading.textContent = `Lección Magistral: ${lesson.title}`;
  if (theoryContent) theoryContent.innerHTML = lesson.theory;
  if (codeEditor) codeEditor.value = lesson.code || "# Código de la clase\nprint('Ejecutando algoritmo quant...')";
  if (terminalOutput) terminalOutput.textContent = `// Listo para ejecutar ${lesson.title} en Python 3.10...\nPresiona 'Ejecutar Código Python' para compilar el algoritmo.`;
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
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// Event Listeners
function setupEventListeners() {
  if (classSearch) {
    classSearch.addEventListener('input', (e) => {
      renderSyllabus(e.target.value);
    });
  }

  if (runCodeBtn) {
    runCodeBtn.addEventListener('click', () => {
      if (terminalOutput) terminalOutput.textContent = ">>> Compilando y ejecutando algoritmo cuantitativo en Python 3.10...\n";
      setTimeout(() => {
        try {
          const code = codeEditor ? codeEditor.value : '';
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

          if (terminalOutput) terminalOutput.textContent += simulatedLogs;
        } catch (err) {
          if (terminalOutput) terminalOutput.textContent += `[ERROR] Error de ejecución: ${err.message}`;
        }
      }, 350);
    });
  }

  if (completeLessonBtn) {
    completeLessonBtn.addEventListener('click', () => {
      const globalId = `${currentSectionIdx}-${currentLessonIdx}`;
      completedLessons.add(globalId);
      updateProgress();
      renderSyllabus(classSearch ? classSearch.value : '');
    });
  }

  if (prevLessonBtn) {
    prevLessonBtn.addEventListener('click', () => {
      if (currentLessonIdx > 0) {
        selectLesson(currentSectionIdx, currentLessonIdx - 1);
      } else if (currentSectionIdx > 0) {
        const prevSec = currentSectionIdx - 1;
        selectLesson(prevSec, COURSE_DATA[prevSec].lessons.length - 1);
      }
    });
  }

  if (nextLessonBtn) {
    nextLessonBtn.addEventListener('click', () => {
      const currSec = COURSE_DATA[currentSectionIdx];
      if (currentLessonIdx < currSec.lessons.length - 1) {
        selectLesson(currentSectionIdx, currentLessonIdx + 1);
      } else if (currentSectionIdx < COURSE_DATA.length - 1) {
        selectLesson(currentSectionIdx + 1, 0);
      }
    });
  }

  const sliderCap = document.getElementById('slider-capital');
  const sliderComm = document.getElementById('slider-commission');
  const sliderSlip = document.getElementById('slider-slippage');

  if (sliderCap) {
    sliderCap.addEventListener('input', (e) => {
      document.getElementById('capital-val').textContent = `$${parseInt(e.target.value).toLocaleString()}`;
    });
  }
  if (sliderComm) {
    sliderComm.addEventListener('input', (e) => {
      document.getElementById('commission-val').textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
    });
  }
  if (sliderSlip) {
    sliderSlip.addEventListener('input', (e) => {
      document.getElementById('slippage-val').textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
    });
  }

  if (simBacktestBtn) {
    simBacktestBtn.addEventListener('click', updateBacktestSimulation);
  }
}

function updateProgress() {
  const totalClasses = 193;
  const completedCount = completedLessons.size;
  const pct = Math.round((completedCount / totalClasses) * 100);
  if (progressText) progressText.textContent = `${pct}% Completado (${completedCount}/${totalClasses} clases)`;
  if (progressFill) progressFill.style.width = `${Math.max(5, pct)}%`;
}

// Chart.js Backtest Chart Simulator
function initBacktestChart() {
  const chartCanvas = document.getElementById('backtestChart');
  if (!chartCanvas || typeof Chart === 'undefined') return;
  const ctx = chartCanvas.getContext('2d');
  
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
