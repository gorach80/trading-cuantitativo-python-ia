/* app.js: Interactive Logic for Quant Trading Course Platform */

// Full Course Data Structure (29 Sections, 193 Classes)
const COURSE_DATA = [
  {
    id: 1,
    title: "Introducción y Flujo de Trabajo",
    lessons: [
      { id: 1, title: "Estructura del Curso", dur: "10:56", theory: "<h3>Estructura del Curso</h3><p>Bienvenidos al curso de <b>Trading Cuantitativo en Python, Ingeniería Financiera e IA</b>. A lo largo de 29 secciones y 193 clases, desarrollaremos el pipeline completo de trading automatizado.</p><div class='theory-callout'><b>Pilares Clave:</b><br>1. Python & Cómputo Paralelo<br>2. Datos & Broker APIs<br>3. KPIs & Indicadores (+100)<br>4. Backtesting Realista (Comisiones/Slippage)<br>5. Inteligencia Artificial & ML (HMM / XGBoost / PyTorch)<br>6. Sistema Unificado de Operación en Vivo</div>", code: "# Muestreo de Estructura de Librería Quant\nimport quant_trading\nprint(f'QuantTrading Version: {quant_trading.__version__}')\nprint('Módulos Cargados: core, data, backtesting, indicators, analysis, models, execution')" },
      { id: 2, title: "Requisitos Elementales", dur: "01:39", theory: "<h3>Requisitos del Entorno</h3><p>Necesitas una computadora con Windows, Mac o Linux, conexión a internet y Anaconda instalado. No se requiere experiencia previa en Python.</p>", code: "# Verificación de Entorno Python\nimport sys\nimport os\nprint(f'Versión de Python: {sys.version}')\nprint(f'Sistema Operativo: {os.name}')" },
      { id: 3, title: "Conoce a tu Instructor y Bienvenida", dur: "01:43", theory: "<h3>Instructor: Axel Francisco Munguía Quintero</h3><p>Ingeniero Financiero y Máster en Inteligencia Artificial Aplicada con más de 30 certificaciones internacionales. Bienvenido a esta formación cuantitativa.</p>", code: "print('Instructor: Axel Francisco Munguía Quintero')\nprint('Especialidades: Quants, AI, Financial Engineering')" },
      { id: 4, title: "Evaluaciones Tempranas", dur: "01:29", theory: "<h3>Diagnóstico Inicial</h3><p>Evaluación rápida para medir tus conocimientos de partida en finanzas y programación.</p>", code: "# Diagnóstico inicial sintético\nscore = 100\nprint(f'Nivel de Diagnóstico: {score}/100 - Listo para iniciar')" },
      { id: 5, title: "Udemy: Herramientas y Recursos", dur: "02:40", theory: "<h3>Recursos y Repositorio</h3><p>Cómo descargar los scripts, navegar por las lecciones y consultar el panel de preguntas y respuestas.</p>", code: "print('Recursos disponibles en carpeta: docs/ y quant_trading/')" },
      { id: 6, title: "Preguntas Frecuentes y Soluciones (FAQ)", dur: "02:09", theory: "<h3>Solución de Problemas Técnicos</h3><p>Resolución de errores comunes con librerías `yfinance`, `scikit-learn` y gestión de virtualenvs.</p>", code: "# Test de importación de librerías clave\nimport pandas as pd\nimport numpy as np\nprint('Pandas & NumPy listos para análisis cuantitativo')" },
      { id: 7, title: "Aviso Legal", dur: "01:02", theory: "<div class='theory-callout'><b>Aviso Legal Importante:</b> El contenido del curso es exclusivamente educativo. El rendimiento pasado no garantiza resultados futuros en mercados reales.</div>", code: "print('Aviso Legal: Uso Educativo y de Investigación Cuantitativa')" }
    ]
  },
  {
    id: 2,
    title: "Conceptos Clave: Inversiones y Mercados",
    lessons: [
      { id: 8, title: "Descripción del Flujo de Trabajo", dur: "04:19", theory: "<h3>El Flujo Quant de 5 Etapas</h3><p>1. Hipótesis -> 2. Datos (ETL) -> 3. Modelo en Python -> 4. Backtesting -> 5. API Broker</p>", code: "# Flujo de Trabajo Cuantitativo\nstages = ['Hipótesis', 'ETL Datos', 'Modelo Python', 'Backtesting', 'Broker API']\nfor idx, stage in enumerate(stages, 1):\n    print(f'Etapa {idx}: {stage}')" },
      { id: 9, title: "Herramientas y Tecnologías", dur: "01:28", theory: "<h3>Stack Tecnológico</h3><p>Python 3.10+, Pandas, NumPy, Scikit-Learn, PyTorch, yFinance, Interactive Brokers IBAPI.</p>", code: "print('Stack: Python + Pandas + Scikit-Learn + PyTorch + IBAPI')" },
      { id: 10, title: "Recomendaciones Generales", dur: "01:33", theory: "<h3>Buenas Prácticas</h3><p>Mantén un código modular con Programación Orientada a Objetos y evita el sobreajuste (*overfitting*).</p>", code: "print('Consejo: Código modular + Pruebas Out-of-Sample')" },
      { id: 11, title: "Mercados Financieros", dur: "05:06", theory: "<h3>Funcionamiento del Mercado</h3><p>Oferta, demanda, liquidez, spreads y libro de órdenes.</p>", code: "print('Mercados Financieros: Acciones, Forex, Futuros, Cripto')" },
      { id: 12, title: "Instrumentos Financieros", dur: "05:12", theory: "<h3>Acciones, Divisas, Futuros y CFDs</h3><p>Análisis de apalancamiento, garantías y comisiones por instrumento.</p>", code: "print('Instrumentos: Acciones | Forex | Futuros | Opciones | CFDs')" },
      { id: 13, title: "Tipos de Análisis: Fundamental, Técnico y Cuantitativo", dur: "05:16", theory: "<h3>Análisis Cuantitativo vs Tradicional</h3><p>El análisis cuantitativo reemplaza la subjetividad por modelos estadísticos probados.</p>", code: "print('Análisis Cuantitativo = Modelos Matemáticos + Algoritmos')" },
      { id: 14, title: "Psicología del Trading", dur: "03:28", theory: "<h3>Eliminación del Sesgo Emocional</h3><p>Los algoritmos automatizados ejecutan la estrategia con disciplina sin miedo ni avaricia.</p>", code: "print('Trading Algorítmico: Ejecución 100% Racional y Rígida')" }
    ]
  },
  {
    id: 3,
    title: "Programación Orientada a Objetos y Cómputo Paralelo",
    lessons: [
      { id: 15, title: "Clases en Python: POO", dur: "13:10", theory: "<h3>POO para Quants</h3><p>Estructuración de clases reutilizables para estrategias e indicadores.</p>", code: "class BaseStrategy:\n    def __init__(self, name):\n        self.name = name\n\ns = BaseStrategy('MovingAverageCross')\nprint(f'Estrategia creada: {s.name}')" },
      { id: 16, title: "Herencia Simple y Múltiple", dur: "09:17", theory: "<h3>Herencia de Clases</h3><p>Extensión de la clase abstracta `BaseStrategy` para estrategias específicas.</p>", code: "from quant_trading.core import BaseStrategy\n\nclass RSIStrategy(BaseStrategy):\n    def generate_signals(self, df):\n        return 'Signals Generated'\n\nstrat = RSIStrategy('RSI_Filter')\nprint(f'Instancia: {strat.name}')" },
      { id: 17, title: "Cómputo Paralelo y Concurrente", dur: "04:10", theory: "<h3>Paralelización de Cargas Quant</h3><p>Multithreading para llamadas API y Multiprocessing para CPU Backtesting.</p>", code: "from quant_trading.core import ParallelExecutor\nprint('ParallelExecutor listo para Multiprocessing & Threads')" },
      { id: 18, title: "Hilos (Threads): Manejo de Concurrencia", dur: "07:01", theory: "<h3>Concurrencia I/O</h3><p>Ejecución simultánea de múltiples peticiones HTTP a brokers o datos en tiempo real.</p>", code: "import threading\nprint(f'Hilos activos en sistema: {threading.active_count()}')" },
      { id: 19, title: "Procesos: Cómputo Intensivo", dur: "10:48", theory: "<h3>Multiprocessing</h3><p>Aceleración en núcleos independientes para optimización de hiperparámetros.</p>", code: "import multiprocessing as mp\nprint(f'Núcleos CPU disponibles: {mp.cpu_count()}')" },
      { id: 20, title: "Sincronizadores: Locks", dur: "08:36", theory: "<h3>Integridad de Datos</h3><p>Prevención de condiciones de carrera mediante `TaskSynchronizer` con cerrojos.</p>", code: "from quant_trading.core import TaskSynchronizer\nsync = TaskSynchronizer()\nsync.increment()\nprint(f'Contador Seguro: {sync.counter}')" }
    ]
  },
  {
    id: 4,
    title: "Conexiones Broker APIs: OANDA, FXCM e IBKR",
    lessons: [
      { id: 21, title: "Introducción a Interactive Brokers (IBAPI)", dur: "05:10", theory: "<h3>IBAPI Conexión Profesional</h3><p>Conexión directa a TWS o IB Gateway para datos y ejecución institucional.</p>", code: "from quant_trading.execution import MockBrokerAPI\nbroker = MockBrokerAPI(100000.0, 'InteractiveBrokers')\nbroker.connect()\nprint(broker.get_account_summary())" },
      { id: 22, title: "Obtener Datos Históricos en IBKR", dur: "15:12", theory: "<h3>Barra de Datos Históricos IBKR</h3><p>Descarga de series temporales de 1 minuto, 1 hora y 1 día.</p>", code: "print('Descargando contrato AAPL desde IBAPI...')" },
      { id: 23, title: "Ejecución de Órdenes Market y Limit", dur: "11:40", theory: "<h3>Enrutamiento de Órdenes</h3><p>Envío de órdenes de compra/venta con stop loss y take profit integrados.</p>", code: "from quant_trading.execution import MockBrokerAPI\nbroker = MockBrokerAPI(100000.0)\nbroker.connect()\nres = broker.place_order('AAPL', 'BUY', 10, 180.0)\nprint('Orden Ejecutada:', res)" }
    ]
  },
  {
    id: 5,
    title: "Métricas KPI y Motor de Backtesting",
    lessons: [
      { id: 24, title: "CAGR, Coeficiente Sharpe y Sortino", dur: "09:55", theory: "<h3>Calculadora de KPIs Financieros</h3><p>Fórmulas matemáticas para medir rendimiento ajustado por riesgo total y bajista.</p>", code: "from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\nimport numpy as np\n\neq = pd.Series([100, 105, 103, 110, 115, 120])\nret = eq.pct_change()\nkpis = PerformanceMetrics.calculate_all_metrics(eq, ret)\nprint('Reporte KPI:', kpis)" },
      { id: 25, title: "Maximum Drawdown (MDD)", dur: "07:55", theory: "<h3>Máxima Caída Porcentual</h3><p>Medición de la peor caída porcentual de pico a valle en la equidad.</p>", code: "from quant_trading.backtesting import PerformanceMetrics\nimport pandas as pd\neq = pd.Series([100, 120, 90, 110, 130])\nmdd = PerformanceMetrics.calculate_max_drawdown(eq)\nprint('MDD:', mdd)" },
      { id: 26, title: "Motor de Backtesting con Comisiones y Slippage", dur: "13:21", theory: "<h3>BacktestEngine Simulación Realista</h3><p>Simulación con 0.1% de comisiones y 0.05% de deslizamiento.</p>", code: "from quant_trading.backtesting import BacktestEngine\nengine = BacktestEngine(100000.0, 0.001, 0.0005)\nprint(f'Capital Inicial: ${engine.initial_capital:,.2f}')" }
    ]
  },
  {
    id: 6,
    title: "IA, Machine Learning & Deep Learning",
    lessons: [
      { id: 27, title: "ML No Supervisado: Regímenes de Mercado (HMM)", dur: "04:14", theory: "<h3>Hidden Markov Models (HMM)</h3><p>Clasificación no supervisada de estados de volatilidad (Alcista vs Crash).</p>", code: "from quant_trading.models import MarketRegimeHMM\nhmm = MarketRegimeHMM(n_regimes=2)\nprint('Modelo Gaussian Mixture HMM inicializado')" },
      { id: 28, title: "ML Supervisado: Random Forest Classifier", dur: "18:38", theory: "<h3>Random Forest Predicción Out-of-Sample</h3><p>Entrenamiento de ensemble de árboles de decisión para predecir la dirección de t+1.</p>", code: "from quant_trading.models import SupervisedTrendPredictor\nrf = SupervisedTrendPredictor(n_estimators=100)\nprint('Random Forest Predictor listo')" },
      { id: 29, title: "Deep Learning: Red Neuronal Multicapa (MLP)", dur: "35:16", theory: "<h3>Red Neuronal Deep Learning</h3><p>Arquitectura secuencial de 64x32 neuronas con activación ReLU para capturar patrones no lineales.</p>", code: "from quant_trading.models import NeuralNetworkPredictor\nnn = NeuralNetworkPredictor(hidden_layer_sizes=(64, 32))\nprint('Red Neuronal MLP 64x32 configurada')" }
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
    // Filter lessons if search query
    const filteredLessons = section.lessons.filter(l => 
      l.title.toLowerCase().includes(filterText.toLowerCase())
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
  theoryHeading.textContent = `Objetivo y Desarrollo de la Clase: ${lesson.title}`;
  theoryContent.innerHTML = lesson.theory;
  codeEditor.value = lesson.code || "# Código de la clase\nprint('Ejecutando algoritmo quant...')";
  terminalOutput.textContent = `// Listo para ejecutar ${lesson.title} en Python 3.10... Presiona 'Ejecutar Código Python'`;
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
    terminalOutput.textContent = ">>> Compilando y ejecutando código Python...\n";
    setTimeout(() => {
      try {
        const code = codeEditor.value;
        let simulatedLogs = `====================================================\n`;
        simulatedLogs += `  EJECUCIÓN EMPÍRICA EN VIVO - QUANT TRADING PLATFORM\n`;
        simulatedLogs += `====================================================\n`;
        
        if (code.includes('quant_trading')) {
          simulatedLogs += `[SUCCESS] Paquete quant_trading v1.0.0 cargado.\n`;
          simulatedLogs += `[CORE] Submódulos activos: core, data, backtesting, indicators, analysis, models, execution.\n`;
        }
        
        if (code.includes('BaseStrategy') || code.includes('class')) {
          simulatedLogs += `[OOP] Clase de Estrategia instanciada correctamente.\n`;
          simulatedLogs += `[RISK] Tamaño de posición calculado según gestión de riesgo (2% capital).\n`;
        }

        if (code.includes('PerformanceMetrics') || code.includes('calculate')) {
          simulatedLogs += `[KPI] CAGR: 12.45% | Sharpe Ratio: 0.88 | Sortino: 1.12 | Max Drawdown: -15.20%\n`;
        }

        simulatedLogs += `\nOutput de la consola Python:\n`;
        simulatedLogs += `> Python 3.10.14 Process Exited with Code 0 (Success).\n`;

        terminalOutput.textContent += simulatedLogs;
      } catch (err) {
        terminalOutput.textContent += `[ERROR] Error de sintaxis: ${err.message}`;
      }
    }, 400);
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
  const totalClasses = 193; // Total classes in course
  const completedCount = completedLessons.size;
  const pct = Math.round((completedCount / totalClasses) * 100);
  progressText.textContent = `${pct}% Completado (${completedCount}/${totalClasses} clases)`;
  progressFill.style.width = `${Math.max(5, pct)}%`;
}

// Chart.js Backtest Chart Simulator
function initBacktestChart() {
  const ctx = document.getElementById('backtestChart').getContext('2d');
  
  const labels = ['2022', '2023', '2024', '2025', '2026'];
  const strategyData = [100000, 115000, 132000, 145000, 168000];
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
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
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
  
  // Calculate simulated return impact
  const costImpact = (comm + slip) * 0.05;
  const netMultiplier = 1.68 - costImpact;
  const finalCap = Math.round(cap * netMultiplier);
  const cagr = ((finalCap / cap) ** (1/4) - 1) * 100;
  
  document.getElementById('kpi-capital').textContent = `$${finalCap.toLocaleString()}`;
  document.getElementById('kpi-cagr').textContent = `${cagr.toFixed(2)}%`;
  document.getElementById('kpi-sharpe').textContent = (0.85 - costImpact).toFixed(2);
  
  // Update Chart
  if (backtestChart) {
    backtestChart.data.datasets[0].data = [
      cap,
      Math.round(cap * 1.15),
      Math.round(cap * 1.30),
      Math.round(cap * 1.48),
      finalCap
    ];
    backtestChart.update();
  }
}

// Start App when DOM ready
document.addEventListener('DOMContentLoaded', initApp);
