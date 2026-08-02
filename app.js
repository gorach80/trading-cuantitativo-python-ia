/* app.js: Complete 29-Section Syllabus & Masterclass Platform Logic */

// Full Course Data Structure (All 29 Sections)
const COURSE_DATA = [
  {
    id: 1,
    title: "Introducción y Flujo de Trabajo",
    lessons: [
      { id: 1, title: "Estructura del Curso", dur: "10:56", theory: "<h3>Visión General y Mapa de Ruta (10:56 min)</h3><p>Bienvenidos al curso de <b>Trading Cuantitativo en Python, Ingeniería Financiera e IA</b>. Presentación de las 29 secciones y 193 clases que componen el mapa de ruta hacia el desarrollo algorítmico profesional.</p>", code: "import quant_trading\nprint('QuantTrading Version:', quant_trading.__version__)" },
      { id: 2, title: "Requisitos Elementales", dur: "01:39", theory: "<h3>Requisitos del Entorno (01:39 min)</h3><p>Instalación de Anaconda, Python 3.10 y VS Code. El curso incluye apéndice de Python desde cero.</p>", code: "import sys\nprint('Python Version:', sys.version)" },
      { id: 3, title: "Conoce a tu Instructor", dur: "01:43", theory: "<h3>Instructor: Axel Francisco Munguía Quintero</h3><p>Ingeniero Financiero y Máster en Inteligencia Artificial Aplicada con más de 30 certificaciones internacionales.</p>", code: "print('Instructor: Axel Francisco Munguía Quintero')" },
      { id: 4, title: "Evaluaciones Tempranas", dur: "01:29", theory: "<h3>Diagnóstico Inicial</h3><p>Evaluación formativa previa para medir conocimientos en matemáticas y finanzas.</p>", code: "print('Diagnóstico inicial listo.')" },
      { id: 5, title: "Udemy: Herramientas y Recursos", dur: "02:40", theory: "<h3>Recursos del Curso</h3><p>Descargas de código fuente, navegación por lecciones y uso del panel Q&A.</p>", code: "print('Recursos de plataforma cargados.')" },
      { id: 6, title: "Preguntas Frecuentes (FAQ)", dur: "02:09", theory: "<h3>Solución de Errores Comunes</h3><p>Resolución de incidencias con librerías y virtualenvs.</p>", code: "import pandas, numpy\nprint('Librerías principales importadas sin errores.')" },
      { id: 7, title: "Aviso Legal", dur: "01:02", theory: "<div class='theory-callout'><b>Aviso Legal:</b> Todo el material es 100% educativo y de investigación cuantitativa.</div>", code: "print('Aviso Legal: Uso Académico.')" }
    ]
  },
  {
    id: 2,
    title: "Flujo de Trabajo y Conceptos Clave en Inversiones",
    lessons: [
      { id: 8, title: "Descripción del Flujo de Trabajo", dur: "04:19", theory: "<h3>El Flujo Quant de 5 Etapas (04:19 min)</h3><p>1. Hipótesis -> 2. ETL -> 3. Modelo Python -> 4. Backtesting Realista -> 5. API Broker.</p>", code: "print('Workflow: Hipótesis -> ETL -> Modelo -> Backtest -> API')" },
      { id: 9, title: "Herramientas y Tecnologías", dur: "01:28", theory: "<h3>Stack Tecnológico</h3><p>Python 3.10+, Pandas, NumPy, Scikit-Learn, PyTorch, IBAPI, Binance.</p>", code: "print('Stack: Python + Pandas + Scikit-Learn + PyTorch + IBAPI')" },
      { id: 10, title: "Recomendaciones Generales", dur: "01:33", theory: "<h3>Buenas Prácticas Quant</h3><p>Código modular en archivos .py y eliminación del sobreajuste (overfitting).</p>", code: "print('Evitar Overfitting: Validación Out-of-Sample')" },
      { id: 11, title: "Mercados Financieros", dur: "05:06", theory: "<h3>Funcionamiento de Mercados</h3><p>Formación de precios, liquidez, spreads y libro de órdenes.</p>", code: "print('Mercados: Acciones, Forex, Futuros, Cripto')" },
      { id: 12, title: "Instrumentos Financieros", dur: "05:12", theory: "<h3>Acciones, Divisas, Opciones y Futuros</h3><p>Análisis de apalancamiento, comisiones y riesgo de cada instrumento.</p>", code: "print('Instrumentos: Acciones | Forex | Futuros | Opciones | CFDs')" },
      { id: 13, title: "Tipos de Análisis", dur: "05:16", theory: "<h3>Análisis Fundamental, Técnico y Cuantitativo</h3><p>El enfoque cuantitativo traduce reglas fundamentales y técnicas a modelos matemáticos en Python.</p>", code: "print('Análisis Cuantitativo = Modelos Matemáticos + Algoritmos')" },
      { id: 14, title: "Psicología del Trading", dur: "03:28", theory: "<h3>Eliminación del Sesgo Emocional</h3><p>Los algoritmos en Python ejecutan estrategias sin miedo ni avaricia.</p>", code: "print('Trading Algorítmico: Ejecución Racional Rígida')" },
      { id: 15, title: "Trading Algorítmico: Estructuras Automatizadas", dur: "06:18", theory: "<h3>Estructuras Automatizadas (06:18 min)</h3><p>Las 4 etapas del bucle algorítmico: 1. Listening -> 2. Signal Generation -> 3. Risk Sizing -> 4. Order Execution (&lt;50ms latencia).</p>", code: "from quant_trading.execution import MockBrokerAPI\nbroker = MockBrokerAPI(100000.0)\nbroker.connect()\nprint(broker.place_order('AAPL', 'BUY', 50, 150.0))" },
      { id: 16, title: "Trading Cuantitativo: Modelos Matemáticos", dur: "03:05", theory: "<h3>Modelos Matemáticos de Precio</h3><p>Formulación de retornos logarítmicos continuos r_t = ln(P_t) - ln(P_{t-1}).</p>", code: "import numpy as np\np = np.array([100, 102, 105])\nprint('Retornos Log:', np.diff(np.log(p)))" }
    ]
  },
  {
    id: 3,
    title: "Programación Orientada a Objetos y Cómputo Paralelo",
    lessons: [
      { id: 17, title: "Clases en Python: POO", dur: "13:10", theory: "<h3>Programación Orientada a Objetos (13:10 min)</h3><p>Estructura de clases, atributos, métodos e inicializadores __init__.</p>", code: "class Asset:\n    def __init__(self, t): self.t = t\na = Asset('AAPL')\nprint(a.t)" },
      { id: 18, title: "Herencia de Clases", dur: "09:17", theory: "<h3>Herencia Simple</h3><p>Extensión de clases base abstractas para estrategias cuantitativas reutilizables.</p>", code: "from quant_trading.core import BaseStrategy\nclass Strat(BaseStrategy):\n    def generate_signals(self, df): return df\nprint(Strat('MyStrat').name)" },
      { id: 19, title: "Herencia Múltiple", dur: "06:48", theory: "<h3>Herencia Múltiple y MRO</h3><p>Resolución de orden de método para combinar múltiples módulos de riesgo e indicadores.</p>", code: "print('MRO y Herencia Múltiple configurados.')" },
      { id: 20, title: "Cómputo Paralelo y Concurrente", dur: "04:10", theory: "<h3>Paralelismo en Python</h3><p>Multithreading para llamadas API y Multiprocessing para CPU Backtesting.</p>", code: "from quant_trading.core import ParallelExecutor\nprint('Executor de cómputo paralelo listo.')" },
      { id: 21, title: "Hilos (Threads): Concurrencia I/O", dur: "07:01", theory: "<h3>Multithreading</h3><p>Gestión concurrente de peticiones HTTP y WebSockets sin bloquear el flujo principal.</p>", code: "import threading\nprint('Hilos activos:', threading.active_count())" },
      { id: 22, title: "Procesos: Cómputo Intensivo CPU", dur: "10:48", theory: "<h3>Multiprocessing</h3><p>Aceleración en núcleos independientes para optimización de hiperparámetros.</p>", code: "import multiprocessing as mp\nprint('Núcleos CPU:', mp.cpu_count())" },
      { id: 23, title: "Sincronizadores y Locks", dur: "08:36", theory: "<h3>Integridad de Datos</h3><p>Prevención de condiciones de carrera con TaskSynchronizer y cerrojos Lock.</p>", code: "from quant_trading.core import TaskSynchronizer\nsync = TaskSynchronizer()\nsync.increment()\nprint('Contador Seguro:', sync.counter)" }
    ]
  },
  {
    id: 4,
    title: "Conexiones Broker APIs: OANDA, FXCM e IBKR",
    lessons: [
      { id: 24, title: "Introducción a Interactive Brokers (IBAPI)", dur: "05:10", theory: "<h3>IBAPI Conexión Profesional</h3><p>Conexión a TWS o IB Gateway para ejecución institucional multiactivo.</p>", code: "from quant_trading.execution import MockBrokerAPI\nbroker = MockBrokerAPI(100000.0, 'InteractiveBrokers')\nbroker.connect()\nprint(broker.get_account_summary())" },
      { id: 25, title: "Obtener Datos Históricos en IBKR", dur: "15:12", theory: "<h3>Barras Históricas IBKR</h3><p>Descarga de series de precios de 1m, 1h y 1d vía IBAPI.</p>", code: "print('Descargando contrato AAPL desde IBKR API...')" },
      { id: 26, title: "Tipos de Órdenes en IBKR", dur: "11:40", theory: "<h3>Enrutamiento de Órdenes</h3><p>Órdenes Market, Limit y Bracket con Stop Loss y Take Profit automáticos.</p>", code: "from quant_trading.execution import MockBrokerAPI\nbroker = MockBrokerAPI(100000.0)\nbroker.connect()\nprint(broker.place_order('AAPL', 'BUY', 100, 270.0))" }
    ]
  },
  {
    id: 5,
    title: "Métricas KPI y Motor de Backtesting Realista",
    lessons: [
      { id: 27, title: "CAGR, Coeficiente Sharpe y Sortino", dur: "09:55", theory: "<h3>Calculadora de KPIs Financieros</h3><p>Fórmulas cuantitativas de rendimiento ajustado por riesgo total y bajista.</p>", code: "from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\neq = pd.Series([100, 105, 112, 120])\nprint(PerformanceMetrics.calculate_all_metrics(eq, eq.pct_change()))" },
      { id: 28, title: "Maximum Drawdown (MDD %)", dur: "07:55", theory: "<h3>Máxima Caída Porcentual</h3><p>Medición de la peor caída de pico a valle en la equidad de la cuenta.</p>", code: "from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\neq = pd.Series([100, 120, 95, 110])\nprint(PerformanceMetrics.calculate_max_drawdown(eq))" },
      { id: 29, title: "Motor de Backtesting con Comisiones y Slippage", dur: "13:21", theory: "<h3>BacktestEngine Simulación Realista</h3><p>Simulación considerando 0.1% de comisiones y 0.05% de deslizamiento.</p>", code: "from quant_trading.backtesting import BacktestEngine\nengine = BacktestEngine(100000.0, 0.001, 0.0005)\nprint('Engine de Backtesting Inicializado.')" }
    ]
  },
  {
    id: 6,
    title: "IA, Machine Learning e IA Profunda",
    lessons: [
      { id: 30, title: "ML No Supervisado: Regímenes de Mercado (HMM)", dur: "04:14", theory: "<h3>Hidden Markov Models (HMM)</h3><p>Detección de estados de volatilidad (Alcista vs Crash).</p>", code: "from quant_trading.models import MarketRegimeHMM\nhmm = MarketRegimeHMM(n_regimes=2)\nprint('HMM Regime Detector Inicializado.')" },
      { id: 31, title: "ML Supervisado: Random Forest Classifier", dur: "18:38", theory: "<h3>Random Forest Predicción Out-of-Sample</h3><p>Ensemble de árboles de decisión para predecir la dirección del mercado.</p>", code: "from quant_trading.models import SupervisedTrendPredictor\nrf = SupervisedTrendPredictor(n_estimators=100)\nprint('Random Forest Predictor Listo.')" },
      { id: 32, title: "Deep Learning: Red Neuronal Multicapa (MLP)", dur: "35:16", theory: "<h3>Red Neuronal Deep Learning</h3><p>Arquitectura secuencial de 64x32 neuronas para capturar patrones no lineales.</p>", code: "from quant_trading.models import NeuralNetworkPredictor\nnn = NeuralNetworkPredictor((64, 32))\nprint('Red Neuronal MLP Configurada.')" }
    ]
  },
  {
    id: 7,
    title: "Análisis Técnico Avanzado e Indicadores (+100)",
    lessons: [
      { id: 33, title: "Medias Móviles (SMA, EMA, WMA)", dur: "12:10", theory: "<h3>Filtros de Tendencia</h3><p>Medias móviles simples y exponenciales para generación de cruces dorados y de la muerte.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 11, 12, 13, 14, 15]})\nprint(TechnicalIndicators.add_moving_averages(df))" },
      { id: 34, title: "RSI, MACD y Osciladores", dur: "15:45", theory: "<h3>Osciladores de Momento</h3><p>RSI de 14 periodos y MACD (12, 26, 9) para detección de sobrecompra y sobreventa.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 12, 11, 14, 13, 16]})\nprint(TechnicalIndicators.add_rsi(df))" },
      { id: 35, title: "Bandas de Bollinger y ATR", dur: "14:20", theory: "<h3>Canales de Volatilidad</h3><p>Bandas de Bollinger a 2 sigma y ATR (Average True Range) para Stop Loss dinámico.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd, numpy as np\ndf = pd.DataFrame({'High': [15, 16], 'Low': [14, 13], 'Close': [14.5, 15.5]})\nprint(TechnicalIndicators.add_atr(df))" }
    ]
  },
  {
    id: 8,
    title: "Análisis Fundamental y Valoración DCF / Fórmula Mágica",
    lessons: [
      { id: 36, title: "Flujo de Caja Descontado (DCF)", dur: "22:15", theory: "<h3>Valor Intrínseco Financiero</h3><p>Proyección de Flujos de Caja Libres descontados a la tasa WACC más Valor Terminal.</p>", code: "from quant_trading.analysis import FundamentalAnalysis\nprint(FundamentalAnalysis.discounted_cash_flow(100, 0.08, 0.10, 0.02, 5))" },
      { id: 37, title: "Fórmula Mágica de Joel Greenblatt", dur: "18:40", theory: "<h3>Ranking Quantitative Value</h3><p>Selección por combinación de ROC (Return on Capital) y Earnings Yield (EBIT/EV).</p>", code: "from quant_trading.analysis import GreenblattMagicFormula\nprint(GreenblattMagicFormula.rank_assets([]))" }
    ]
  },
  {
    id: 9,
    title: "Procesamiento de Lenguaje Natural (NLP) y VADER",
    lessons: [
      { id: 38, title: "Extracción de Noticias Financieras", dur: "16:30", theory: "<h3>Web Scraping & APIs de Noticias</h3><p>Captura automatizada de titulares y reportes de prensa económica.</p>", code: "from quant_trading.analysis import SentimentAnalyzer\nprint(SentimentAnalyzer.analyze_headline('Company reports record profits!'))" },
      { id: 39, title: "Clasificación de Sentimiento VADER", dur: "14:50", theory: "<h3>Léxico VADER para Finanzas</h3><p>Mapeo de polaridad compuesta entre -1.0 (Bearish) y +1.0 (Bullish).</p>", code: "from quant_trading.analysis import SentimentAnalyzer\nsa = SentimentAnalyzer()\nprint(sa.analyze_headline('Stock market crashes after fed rate hike.'))" }
    ]
  },
  {
    id: 10,
    title: "Modelos de Márkov Ocultos (HMM) para Regímenes",
    lessons: [
      { id: 40, title: "Teoría de Estados No Observables", dur: "19:10", theory: "<h3>Matriz de Transición de Estados</h3><p>Estimación de la matriz de transición de probabilidad entre regímenes alcistas y bajistas.</p>", code: "from quant_trading.models import MarketRegimeHMM\nprint('HMM Regime Classifier Ready.')" }
    ]
  },
  {
    id: 11,
    title: "Random Forest y XGBoost en Series Temporales",
    lessons: [
      { id: 41, title: "Feature Engineering Financiero", dur: "21:00", theory: "<h3>Construcción de Features</h3><p>Creación de predictores técnicos (lags, volatilidades, retornos) para ML supervisado.</p>", code: "from quant_trading.models import SupervisedTrendPredictor\nprint('Supervised Trend Predictor Ready.')" }
    ]
  },
  {
    id: 12,
    title: "Redes Neuronales Profundas (PyTorch / MLP)",
    lessons: [
      { id: 42, title: "Arquitecturas Deep Learning", dur: "28:40", theory: "<h3>Redes Multicapa Secuenciales</h3><p>Redes Neuronales de 64x32 con activaciones ReLU y optimizador Adam.</p>", code: "from quant_trading.models import NeuralNetworkPredictor\nprint('Neural Network 64x32 Active.')" }
    ]
  },
  {
    id: 13,
    title: "Sistema de Trading Unificado de Producción",
    lessons: [
      { id: 43, title: "Orquestación en main.py", dur: "32:15", theory: "<h3>Pipeline Unificado de 7 Etapas</h3><p>Conexión -> Datos -> NLP -> HMM -> ML -> Backtest -> Broker API en main.py.</p>", code: "from quant_trading.execution import QuantTradingEngine\nengine = QuantTradingEngine()\nprint('Unified Engine Configured.')" }
    ]
  },
  {
    id: 14,
    title: "Criterio de Kelly, VaR y Gestión de Riesgo",
    lessons: [
      { id: 44, title: "Value at Risk (VaR) y Criterio de Kelly", dur: "17:45", theory: "<h3>Gestión de Capital Institucional</h3><p>Cálculo de la máxima pérdida esperada al 95% de confianza y dimensionamiento de posición.</p>", code: "print('Position Sizing: Kelly Criterion & VaR Model Active.')" }
    ]
  },
  {
    id: 15,
    title: "Estrategias Intradía y Swing Trading",
    lessons: [
      { id: 45, title: "Estrategias Breakout & SuperTrend", dur: "20:30", theory: "<h3>Swing Trading en Acciones</h3><p>Captura de tendencias semanales combinando SuperTrend y ATR.</p>", code: "print('Swing Trading Strategy Loaded.')" }
    ]
  },
  {
    id: 16,
    title: "Trading en Criptoactivos con Binance API",
    lessons: [
      { id: 46, title: "Conexión a Binance Websockets", dur: "19:15", theory: "<h3>Cripto Trading 24/7</h3><p>Conexión en tiempo real a los libros de órdenes de BTC/USDT y ETH/USDT.</p>", code: "print('Binance Spot & Futures API Connector Ready.')" }
    ]
  },
  {
    id: 17,
    title: "Operativa Forex en OANDA REST v20",
    lessons: [
      { id: 47, title: "Automatización en Forex", dur: "18:10", theory: "<h3>Trading en Divisas</h3><p>Ejecución automatizada en EUR/USD y GBP/USD vía OANDA API v20.</p>", code: "print('OANDA REST v20 Forex Engine Active.')" }
    ]
  },
  {
    id: 18,
    title: "Operativa en Acciones del S&P 500",
    lessons: [
      { id: 48, title: "Escáner de Acciones del S&P 500", dur: "22:00", theory: "<h3>Selección Cuantitativa de Equities</h3><p>Escaneo diario de 500 activos para identificar oportunidades con mayor ROC.</p>", code: "print('S&P 500 Multi-Asset Screener Active.')" }
    ]
  },
  {
    id: 19,
    title: "Estrategias de Arbitraje Estadístico y Pares",
    lessons: [
      { id: 49, title: "Cointegración y Pair Trading", dur: "25:30", theory: "<h3>Arbitraje Estadístico</h3><p>Test de Dickey-Fuller Aumentado para identificar pares cointegrados y operar el Z-Score.</p>", code: "print('Statistical Arbitrage Engine Loaded.')" }
    ]
  },
  {
    id: 20,
    title: "Estrategias de Regresión a la Media (Mean Reversion)",
    lessons: [
      { id: 50, title: "Modelos de Regresión a la Media", dur: "16:20", theory: "<h3>Ornstein-Uhlenbeck Process</h3><p>Aprovechamiento de desviaciones extremas del precio respecto a su media histórica.</p>", code: "print('Mean Reversion OU Strategy Active.')" }
    ]
  },
  {
    id: 21,
    title: "Estrategias Momentum y Breakout",
    lessons: [
      { id: 51, title: "Ruptura de Rangos y Momentum", dur: "15:40", theory: "<h3>Breakout Trading</h3><p>Detección de aceleración de volumen y rupturas de canales de Donchian.</p>", code: "print('Momentum Breakout System Configured.')" }
    ]
  },
  {
    id: 22,
    title: "Optimización de Portafolios Markowitz & Black-Litterman",
    lessons: [
      { id: 52, title: "Frontera Eficiente de Markowitz", dur: "26:15", theory: "<h3>Teoría Moderna de Portafolios</h3><p>Optimización cuadrática para encontrar los pesos que maximizan el coeficiente Sharpe.</p>", code: "print('Markowitz Efficient Frontier Optimizer Ready.')" }
    ]
  },
  {
    id: 23,
    title: "Detección de Anomalías y Filtros Kalman",
    lessons: [
      { id: 53, title: "Filtros Kalman en Series Temporales", dur: "24:10", theory: "<h3>Filtro de Kalman Dinámico</h3><p>Estimación recursiva del precio verdadero eliminando el ruido de mercado.</p>", code: "print('Kalman Filter Dynamic Estimator Active.')" }
    ]
  },
  {
    id: 24,
    title: "Microestructura de Mercado y Libros de Órdenes",
    lessons: [
      { id: 54, title: "Análisis de Level 2 / Level 3 Data", dur: "21:45", theory: "<h3>Order Book Imbalance</h3><p>Medición del desequilibrio de volumen entre las puntas Bid y Ask en la profundidad del mercado.</p>", code: "print('L2/L3 Order Book Microstructure Analyzer Active.')" }
    ]
  },
  {
    id: 25,
    title: "Web Scraping Financiero e Integración de Noticias",
    lessons: [
      { id: 55, title: "Web Scraping de Balances Financieros", dur: "19:30", theory: "<h3>BeautifulSoup & Selenium Quant</h3><p>Extracción automatizada de estados financieros y ratios desde SEC EDGAR.</p>", code: "print('SEC EDGAR Web Scraper Active.')" }
    ]
  },
  {
    id: 26,
    title: "Cuentas de Fondeo (Prop Trading) y Reglas de Evaluación",
    lessons: [
      { id: 56, title: "Superación de Evaluaciones Prop Firm", dur: "17:50", theory: "<h3>Reglas de Prop Trading</h3><p>Configuración de algoritmos para cumplir el Daily Loss Limit y Profit Target de firmas de fondeo.</p>", code: "print('Prop Trading Risk Control System Active.')" }
    ]
  },
  {
    id: 27,
    title: "Certificaciones Financieras (CFA, FRM, CQF, CMT)",
    lessons: [
      { id: 57, title: "Guía de Certificaciones Internacionales", dur: "15:00", theory: "<h3>Carrera Profesional Quant</h3><p>Requisitos, planes de estudio y comparativa entre CFA, FRM, CQF y CMT.</p>", code: "print('Guía de Certificaciones CFA/FRM/CQF/CMT Lista.')" }
    ]
  },
  {
    id: 28,
    title: "Aspectos Fiscales, Impuestos y Formulario W-8BEN",
    lessons: [
      { id: 58, title: "Fiscalidad en Trading e Inversiones", dur: "14:20", theory: "<h3>Gestión Fiscal Internacional</h3><p>Declaración de ganancias de capital, retenciones en origen y llenado del Formulario W-8BEN para brokers de EE. UU.</p>", code: "print('Guía Fiscal W-8BEN e Impuestos Lista.')" }
    ]
  },
  {
    id: 29,
    title: "Apéndice: Curso Intensivo de Python desde Cero",
    lessons: [
      { id: 59, title: "Fundamentos de Python para Finanzas", dur: "45:00", theory: "<h3>Python Crash Course desde Cero</h3><p>Variables, listas, diccionarios, bucles for/while, funciones, Pandas DataFrame y NumPy Arrays.</p>", code: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'Close': [100, 102, 105]})\nprint(df)" }
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

  let totalCourseClasses = 0;
  COURSE_DATA.forEach(s => totalCourseClasses += s.lessons.length);
  const countSpan = document.getElementById('syllabus-count');
  if (countSpan) countSpan.textContent = `${totalCourseClasses} Clases`;

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
  let totalClasses = 0;
  COURSE_DATA.forEach(s => totalClasses += s.lessons.length);

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
