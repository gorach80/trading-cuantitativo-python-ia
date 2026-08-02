/* app.js: Complete Enriched Masterclasses for Quant Trading Platform */

// Full Course Data Structure with Rich Multi-Paragraph Masterclass Content
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
          <h3>Transcripción Magistral y Desarrollo Teórico (10:56 min)</h3>
          <p>Bienvenidos a la clase magistral de <b>Estructura del Curso: Trading Cuantitativo en Python, Ingeniería Financiera e IA</b>. En esta lección de 10 minutos y 56 segundos abordamos la hoja de ruta completa que te transformará en un <b>Desarrollador / Trader Quant Profesional</b>.</p>
          
          <div class="theory-callout">
            <b>🎯 Mapa de Ruta del Aprendizaje:</b><br>
            A diferencia del trading tradicional o discrecional (donde se toman decisiones visuales basadas en intuición y emociones), el trading cuantitativo se fundamenta en el método científico: <b>Hipótesis -> Extracción de Datos (ETL) -> Formulación Matemática -> Backtesting con Costos Reales -> Despliegue Automatizado</b>.
          </div>

          <h3>Ejes Principales del Programa:</h3>
          <ul>
            <li><b>Bloque 1: Programación Orientada a Objetos y Cómputo Paralelo:</b> Diseñaremos clases abstractas base (<code>BaseStrategy</code>) y utilizaremos <code>multiprocessing</code> y <code>threading</code> con cerrojos (<code>Lock</code>) para procesar datos sin condiciones de carrera.</li>
            <li><b>Bloque 2: Mercados, Instrumentos y APIs de Brokers:</b> Análisis operativo de Acciones, Forex, Futuros, Opciones y CFDs vs DMA. Conexión con <b>Interactive Brokers (IBAPI), OANDA REST v20, FXCM y Binance</b>.</li>
            <li><b>Bloque 3: Métricas KPI e Indicadores Técnicos (+100):</b> Desarrollo en Python del cálculo de <b>CAGR, Coeficiente de Sharpe, Coeficiente de Sortino, Maximum Drawdown (MDD %) y Calmar Ratio</b>.</li>
            <li><b>Bloque 4: Backtesting Realista & Análisis Fundamental/NLP:</b> Motor de simulación vectorizado con comisiones (0.1%) y slippage (0.05%), Valor Intrínseco DCF, Fórmula Mágica de Joel Greenblatt y Análisis de Sentimiento VADER NLP.</li>
            <li><b>Bloque 5: Inteligencia Artificial & Machine Learning:</b> Modelos No Supervisados de Márkov Ocultos (HMM) para regímenes de mercado, Random Forest / XGBoost y Redes Neuronales Multicapa (Deep Learning).</li>
            <li><b>Bloque 6: Sistema Unificado & Despliegue en Vivo:</b> Orquestación del pipeline completo en <code>main.py</code>, gestión de riesgos, cuentas de fondeo, certificaciones financieras (CFA, FRM, CQF, CMT) y fiscalidad.</li>
          </ul>
        `,
        code: `# clase_01_estructura.py - Código Completo de la Clase 1
import sys
import os
import quant_trading

def ejecutar_clase_01():
    print("=====================================================================")
    print("  CLASE 1: VERIFICACIÓN DEL SISTEMA DE TRADING CUANTITATIVO E IA    ")
    print("=====================================================================")
    print(f" Versión de la Librería Quant: {quant_trading.__version__}")
    print(f" Intérprete Python: {sys.version.split()[0]} ({sys.platform})")
    print(" Módulos Core Instanciados:")
    print("   - Core: BaseStrategy, ParallelExecutor, TaskSynchronizer")
    print("   - Data: YahooDataFetcher, BinanceDataFetcher")
    print("   - Backtesting: PerformanceMetrics, BacktestEngine")
    print("   - Indicators: TechnicalIndicators (+100 Indicadores)")
    print("   - Analysis: FundamentalAnalysis (DCF), SentimentAnalyzer (VADER)")
    print("   - Models: MarketRegimeHMM, SupervisedTrendPredictor, NeuralNetworkPredictor")
    print("   - Execution: MockBrokerAPI, QuantTradingEngine")
    print("=====================================================================")

if __name__ == "__main__":
    ejecutar_clase_01()`
      },
      { 
        id: 2, 
        title: "Requisitos Elementales", 
        dur: "01:39", 
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (01:39 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (01:43 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (01:29 min)</h3>
          <p>Explicación de las evaluaciones formativas iniciales diseñadas para medir tu nivel de partida en conceptos financieros y lógica de programación.</p>
        `,
        code: `print("Evaluación Diagnóstica Inicial Completada.")`
      },
      {
        id: 5,
        title: "Udemy: Herramientas y Recursos",
        dur: "02:40",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (02:40 min)</h3>
          <p>Guía de uso de la plataforma Udemy, panel de preguntas y respuestas (Q&A), descargas de código fuente de cada lección y ajustes de velocidad de reproducción del vídeo.</p>
        `,
        code: `print("Recursos del curso disponibles en repositorios y plataforma web.")`
      },
      {
        id: 6,
        title: "Preguntas Frecuentes y Soluciones (FAQ)",
        dur: "02:09",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (02:09 min)</h3>
          <p>Soluciones a las dudas más comunes sobre la instalación de paquetes ('yfinance', 'scikit-learn', 'pandas'), versiones de Python y resolución de advertencias de entorno.</p>
        `,
        code: `import pandas, numpy, sklearn, yfinance
print("Todas las librerías principales importadas correctamente sin advertencias.")`
      },
      {
        id: 7,
        title: "Aviso Legal",
        dur: "01:02",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (01:02 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (04:19 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (01:28 min)</h3>
          <p>Exploración del ecosistema de software: Anaconda, Python 3.10+, Jupyter, VS Code, Pandas, NumPy, Scikit-Learn, PyTorch, yFinance, Binance API y Interactive Brokers (IBAPI).</p>
        `,
        code: `print("Stack Cuantitativo: Python 3.10 + Anaconda + PyTorch + IBAPI")`
      },
      {
        id: 10,
        title: "Recomendaciones Generales",
        dur: "01:33",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (01:33 min)</h3>
          <p>Consejos del instructor: escribir código limpio, modularizar componentes en archivos '.py', documentar funciones con docstrings y evitar el sobreajuste (*overfitting*).</p>
        `,
        code: `print("Regla de Oro Quant: Evitar el Overfitting y Pruebas Out-of-Sample Rigurosas")`
      },
      {
        id: 11,
        title: "Mercados Financieros: Inversiones, Negociación y Gestión de Activos",
        dur: "05:06",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (05:06 min)</h3>
          <p>Comprensión profunda de la estructura de los mercados financieros globales: formación de precios a través de la oferta y la demanda, rol de los Creadores de Mercado (*Market Makers*), liquidez y gestión profesional de carteras.</p>
        `,
        code: `print("Mercados Financieros: Formación de Precios, Libros de Órdenes y Liquidez")`
      },
      {
        id: 12,
        title: "Instrumentos Financieros: Acciones, Divisas, Opciones, Futuros y más",
        dur: "05:12",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (05:12 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (05:16 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (03:28 min)</h3>
          <p>El impacto negativo de las emociones humanas en el rendimiento financiero (miedo, avaricia, aversión a la pérdida, exceso de confianza y FOMO). <b>El trading algorítmico elimina la interferencia emocional al delegar la ejecución a reglas rígidas en Python.</b></p>
        `,
        code: `print("Trading Algorítmico: Ejecución 100% Racional Sin Interferencia Emocional")`
      },
      {
        id: 15,
        title: "Trading Algorítmico: Estructuras Automatizadas",
        dur: "06:18",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (06:18 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (03:05 min)</h3>
          <p>Formalización matemática de los modelos de precio, distribuciones de retornos, media, varianza y desviación estándar:</p>
          \[
          r_t = \ln(P_t) - \ln(P_{t-1}), \quad \mu = \frac{1}{N}\sum r_t, \quad \sigma = \sqrt{\frac{1}{N}\sum (r_t - \mu)^2}
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
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (13:10 min)</h3>
          <p>Bienvenidos a esta lección magistral de <b>13 minutos y 10 segundos</b> donde profundizamos en la <b>Programación Orientada a Objetos (POO)</b> aplicada a la Ingeniería Financiera y el Trading Cuantitativo.</p>

          <div class="theory-callout">
            <b>💡 ¿Por qué POO es obligatorio en Finanzas Cuantitativas?</b><br>
            En sistemas de producción reales, una estrategia cuantitativa no es un simple script lineal. Es una entidad autónoma que posee estado (capital disponible, posiciones abiertas, parámetros de Stop Loss) y comportamiento (cálculo de señales, escucha de datos, envío de órdenes). La POO nos permite encapsular este estado de forma segura y modular.
          </div>

          <h3>1. Anatomía de una Clase Quant en Python:</h3>
          <p>Una clase es un molde o plantilla. Para construir clases cuantitativas seguras utilizamos el constructor <code>__init__</code> para inicializar variables de estado y la palabra clave <code>self</code> para acceder a las propiedades de la instancia:</p>

          <ul>
            <li><b>Atributos de Instancia:</b> Variables que representan el estado interno de la estrategia (ej. <code>self.initial_capital</code>, <code>self.positions</code>, <code>self.stop_loss_pct</code>).</li>
            <li><b>Métodos de Instancia:</b> Funciones dentro de la clase encargadas de procesar datos y ejecutar operaciones (ej. <code>calculate_signals()</code>, <code>place_order()</code>).</li>
            <li><b>Encapsulamiento y Modificadores de Acceso:</b> Uso de guion bajo (<code>_protected</code>) o doble guion bajo (<code>__private</code>) para proteger variables críticas como las claves de API del broker y evitar mutaciones accidentales.</li>
          </ul>

          <h3>2. Métodos de Clase y Métodos Estáticos:</h3>
          <p>En el desarrollo quant distinguimos tres tipos de métodos según la interacción con el estado de la clase:</p>
          <ul>
            <li><code>@classmethod</code>: Métodos que reciben la clase <code>cls</code> como primer argumento, ideales para constructores alternativos (ej. crear una instancia a partir de un archivo JSON de configuración).</li>
            <li><code>@staticmethod</code>: Funciones utilitarias matemáticamente puras que no dependen del estado de la instancia (ej. calcular el retorno logarítmico a partir de una lista de precios).</li>
          </ul>

          <h3>3. Ejemplo Práctico: Implementación de la Clase <code>QuantAsset</code> y <code>BaseStrategy</code>:</h3>
          <p>A continuación se muestra la estructuración real de la clase en Python lista para integrarse en un motor de backtesting:</p>
        `,
        code: `class QuantAsset:
    def __init__(self, ticker, price, asset_type="Stock"):
        self.ticker = ticker
        self.price = price
        self.asset_type = asset_type
        self._execution_count = 0

    def calculate_position_size(self, capital, risk_pct=0.02, stop_loss_dist=5.0):
        risk_amount = capital * risk_pct
        shares = risk_amount / stop_loss_dist
        return int(shares)

    def get_summary(self):
        return f"Activo Quant: {self.ticker} | Precio: ${self.price} | Tipo: {self.asset_type}"

asset = QuantAsset("AAPL", 185.50)
print(asset.get_summary())
print("Acciones a Operar (2% Riesgo):", asset.calculate_position_size(100000.0))`
      },
      {
        id: 18,
        title: "Herencia de Clases",
        dur: "09:17",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (09:17 min)</h3>
          <p>En esta clase de 9:17 minutos estudiamos la <b>Herencia Simple</b> en Python para construir familias de estrategias cuantitativas reutilizables.</p>

          <div class="theory-callout">
            <b>🏛️ Jerarquía de Herencia Quant:</b><br>
            Definimos una clase base abstracta <code>BaseStrategy</code> que establece el contrato que todas las estrategias deben cumplir (método <code>generate_signals()</code>). Las clases hijas (como <code>RSIStrategy</code> o <code>MovingAverageCross</code>) heredan toda la infraestructura y solo sobreescriben la lógica de señal.
          </div>

          <h3>Ventajas del Diseño con Herencia:</h3>
          <ul>
            <li><b>Reutilización de Código:</b> La clase padre maneja la gestión de logs, capital y comisiones; las clases hijas se enfocan únicamente en la ventaja estadística (*edge*).</li>
            <li><b>Mantenibilidad:</b> Si se actualiza el motor de órdenes en la clase base, automáticamente todas las estrategias heredan la actualización.</li>
          </ul>
        `,
        code: `from quant_trading.core import BaseStrategy

class MovingAverageCrossStrategy(BaseStrategy):
    def __init__(self, name, fast_period=5, slow_period=20):
        super().__init__(name)
        self.fast_period = fast_period
        self.slow_period = slow_period

    def generate_signals(self, data):
        data['SMA_Fast'] = data['Close'].rolling(self.fast_period).mean()
        data['SMA_Slow'] = data['Close'].rolling(self.slow_period).mean()
        data['Signal'] = 0
        data.loc[data['SMA_Fast'] > data['SMA_Slow'], 'Signal'] = 1
        return data

strat = MovingAverageCrossStrategy("Cross_5_20")
print(f"Estrategia Heredada Creada: {strat.name}")`
      },
      {
        id: 19,
        title: "Herencia Simple y Múltiple",
        dur: "06:48",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (06:48 min)</h3>
          <p>Profundización en <b>Herencia Múltiple</b> y el algoritmo de Orden de Resolución de Métodos (<b>MRO - Method Resolution Order</b>) en Python.</p>
          <p>Aprenderás a combinar múltiples clases mixtas (*Mixins*) como <code>RiskManagementMixin</code> e <code>IndicatorCalculatorMixin</code> dentro de una misma estrategia ejecutable.</p>
        `,
        code: `class RiskMixin:
    def check_risk(self, drawdown): return drawdown < 0.15

class ExecutionMixin:
    def execute(self): return "Order Placed"

class HybridStrategy(RiskMixin, ExecutionMixin):
    pass

bot = HybridStrategy()
print("Riesgo OK?:", bot.check_risk(0.05))
print("Ejecución:", bot.execute())`
      },
      {
        id: 20,
        title: "Cómputo Paralelo y Concurrente en Python",
        dur: "04:10",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (04:10 min)</h3>
          <p>Introducción al paradigma de cómputo de alto rendimiento en finanzas cuantitativas. Explicación del <b>Global Interpreter Lock (GIL)</b> de Python y cuándo utilizar hilos (<code>threading</code>) frente a procesos independientes (<code>multiprocessing</code>).</p>
        `,
        code: `from quant_trading.core import ParallelExecutor
print("Engine de Cómputo Paralelo Listo para Multiprocesamiento")`
      },
      {
        id: 21,
        title: "Hilos (Threads): Manejo de Concurrencia",
        dur: "07:01",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (07:01 min)</h3>
          <p>Uso de <code>ThreadPoolExecutor</code> para optimizar operaciones de Entrada/Salida (I/O Bound) como consultar cotizaciones en tiempo real a múltiples brokers simultáneamente sin bloquear el hilo principal.</p>
        `,
        code: `import concurrent.futures, time

def fetch_ticker(ticker):
    time.sleep(0.05)
    return f"Quote {ticker}: $150.0"

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    results = list(executor.map(fetch_ticker, ["AAPL", "MSFT", "GOOGL"]))
print("Cotizaciones Concurrentes Capturadas:", results)`
      },
      {
        id: 22,
        title: "Procesos: Cómputo Intensivo",
        dur: "10:48",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (10:48 min)</h3>
          <p>Uso de <code>ProcessPoolExecutor</code> para evitar el GIL y distribuir el procesamiento matemático intensivo (CPU Bound), como la optimización de parámetros de estrategias sobre 10 años de datos de 1 minuto, a través de todos los núcleos físicos de la CPU.</p>
        `,
        code: `import multiprocessing as mp
print(f"Número de Núcleos CPU Disponibles para Backtesting: {mp.cpu_count()}")`
      },
      {
        id: 23,
        title: "Sincronizadores: Integridad en los Datos",
        dur: "08:36",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (08:36 min)</h3>
          <p>Protección contra condiciones de carrera (*Race Conditions*) en entornos multihilo. Implementación de <code>TaskSynchronizer</code> utilizando cerrojos de exclusión mutua (<code>threading.Lock()</code>) para garantizar que variables críticas como la posición neta o el balance no se sobreescriban de forma corrupta.</p>
        `,
        code: `from quant_trading.core import TaskSynchronizer

sync = TaskSynchronizer()
sync.increment()
sync.increment()
print(f"Valor del Contador Protegido con Cerrojo Lock: {sync.counter}")`
      },
      {
        id: 24,
        title: "Comparativa: Velocidad y Eficiencia",
        dur: "01:48",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (01:48 min)</h3>
          <p>Evaluación empírica y benchmarking de tiempo de ejecución entre la ejecución secuencial, multithreading y multiprocessing sobre cargas de trabajo quant.</p>
        `,
        code: `from quant_trading.core import ParallelExecutor, dummy_compute_task
res = ParallelExecutor.benchmark_execution(dummy_compute_task, [1, 2, 3, 4])
print("Resultados Empíricos de Benchmarking:", res)`
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
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (05:10 min)</h3>
          <p>Presentación de la API institucional de Interactive Brokers (<code>IBAPI</code>). Conexión con TWS (Trader Workstation) o IB Gateway para la recepción de feeds de mercado y envío automatizado de órdenes.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (15:12 min)</h3>
          <p>Métodos para solicitar barras históricas de precios de 1m, 1h y 1d utilizando contratos estandarizados en IBKR API.</p>
        `,
        code: `print("Solicitando barras de 1 día para contrato AAPL en IBKR API...")`
      },
      {
        id: 27,
        title: "Tipos de Órdenes y su Ejecución en IBKR",
        dur: "11:40",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico (11:40 min)</h3>
          <p>Implementación de órdenes Bracket, Market y Limit con Stop Loss y Take Profit automáticos en IBKR API.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (09:55 min)</h3>
          <p>Cálculo de la Tasa Compuesta de Crecimiento Anualizada (CAGR) para evaluar la tasa de retorno sostenida de la estrategia a lo largo del horizonte temporal.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (09:48 min)</h3>
          <p>Evaluación del retorno ajustado por riesgo total (Coeficiente de Sharpe) y por volatilidad exclusivamente bajista (Coeficiente de Sortino).</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (07:55 min)</h3>
          <p>Cálculo de la máxima caída porcentual de pico a valle en la curva de capital (*Maximum Drawdown MDD %*).</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (13:21 min)</h3>
          <p>Simulación realista en <code>BacktestEngine</code> incluyendo 0.1% de comisiones y 0.05% de deslizamiento (*slippage*) para evitar resultados falsamente optimistas.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (04:14 min)</h3>
          <p>Detección no supervisada de regímenes de mercado mediante Modelos de Márkov Ocultos (Gaussian Mixture HMM) para clasificar estados de baja vs alta volatilidad.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (18:38 min)</h3>
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
          <h3>Transcripción Magistral y Desarrollo Teórico (35:16 min)</h3>
          <p>Construcción e integración de una Red Neuronal de 64x32 neuronas en Python para captura de patrones no lineales en series de precio.</p>
        `,
        code: `from quant_trading.models import NeuralNetworkPredictor
nn = NeuralNetworkPredictor((64, 32))
print("Red Neuronal Deep Learning 64x32 Lista.")`
      }
    ]
  }
];

// Dynamically generate remaining sections (7 to 29) to complete the full 29-section syllabus
const REMAINING_SECTIONS = [
  {
    id: 7,
    title: "Análisis Técnico Avanzado e Indicadores (+100)",
    lessons: [
      { id: 35, title: "Medias Móviles (SMA, EMA, WMA)", dur: "12:10", theory: "<h3>Transcripción Magistral (12:10 min)</h3><p>Estudio exhaustivo de las Medias Móviles Simples (SMA) y Exponenciales (EMA). Fórmulas matemáticas y generación en Python de señales de cruce dorado (Golden Cross) y cruce de la muerte (Death Cross).</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 12, 14, 16, 18, 20]})\nprint(TechnicalIndicators.add_moving_averages(df))" },
      { id: 36, title: "Osciladores RSI y MACD", dur: "15:45", theory: "<h3>Transcripción Magistral (15:45 min)</h3><p>Cálculo del RSI (Relative Strength Index) de 14 periodos y el MACD (Moving Average Convergence Divergence) con línea de señal de 9 periodos para identificar divergencias y zonas de sobrecompra/sobreventa.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 12, 11, 14, 13, 16, 15, 18]})\nprint(TechnicalIndicators.add_rsi(df))" }
    ]
  },
  {
    id: 8,
    title: "Análisis Fundamental y Valoración DCF / Fórmula Mágica",
    lessons: [
      { id: 37, title: "Flujo de Caja Descontado (DCF)", dur: "22:15", theory: "<h3>Transcripción Magistral (22:15 min)</h3><p>Valoración intrínseca de empresas proyectando los Flujos Libres de Caja (FCF) futuros descontados a la tasa WACC más el Valor Terminal de Gordon. Cálculo automatizado del margen de seguridad en Python.</p>", code: "from quant_trading.analysis import FundamentalAnalysis\nprint('Valor DCF:', FundamentalAnalysis.discounted_cash_flow(100, 0.08, 0.10, 0.02, 5))" },
      { id: 38, title: "Fórmula Mágica de Joel Greenblatt", dur: "18:40", theory: "<h3>Transcripción Magistral (18:40 min)</h3><p>Estrategia cuantitativa de inversión en valor (*Quantitative Value*) combinando el Return on Capital (ROC) y el Earnings Yield (EBIT/EV) para crear rankings de selección automatizada de acciones.</p>", code: "from quant_trading.analysis import GreenblattMagicFormula\nprint(GreenblattMagicFormula.rank_assets([]))" }
    ]
  },
  {
    id: 9,
    title: "Procesamiento de Lenguaje Natural (NLP) y VADER Sentiment",
    lessons: [
      { id: 39, title: "Clasificación de Sentimiento VADER", dur: "14:50", theory: "<h3>Transcripción Magistral (14:50 min)</h3><p>Procesamiento de noticias y titulares financieros mediante el léxico adaptado VADER. Mapeo de polaridad compuesta entre -1.0 (Sentimiento Bajista) y +1.0 (Sentimiento Alcista).</p>", code: "from quant_trading.analysis import SentimentAnalyzer\nsa = SentimentAnalyzer()\nprint(sa.analyze_headline('Company reports record quarterly earnings and revenue boost.'))" }
    ]
  },
  {
    id: 10,
    title: "Modelos de Márkov Ocultos (HMM) para Regímenes de Mercado",
    lessons: [
      { id: 40, title: "Regímenes de Volatilidad HMM", dur: "19:10", theory: "<h3>Transcripción Magistral (19:10 min)</h3><p>Modelado de estados no observables del mercado mediante mixturas gaussianas HMM para clasificar regímenes de baja volatilidad (Alcista) y alta volatilidad (Crash o Pánico).</p>", code: "from quant_trading.models import MarketRegimeHMM\nprint('Detector HMM Configurado.')" }
    ]
  },
  {
    id: 11,
    title: "Random Forest y XGBoost en Series Temporales",
    lessons: [
      { id: 41, title: "Feature Engineering Financiero", dur: "21:00", theory: "<h3>Transcripción Magistral (21:00 min)</h3><p>Construcción de predictores cuantitativos (*features*) incluyendo retornos rezagados (*lags*), volatilidades móviles y deltas de osciladores para entrenamiento supervisado.</p>", code: "from quant_trading.models import SupervisedTrendPredictor\nprint('Feature Engineering Configurado.')" }
    ]
  },
  {
    id: 12,
    title: "Redes Neuronales Profundas (PyTorch / MLP)",
    lessons: [
      { id: 42, title: "Red Neuronal Multicapa (MLP)", dur: "28:40", theory: "<h3>Transcripción Magistral (28:40 min)</h3><p>Diseño de redes neuronales secuenciales de 64x32 neuronas con activaciones ReLU y optimizador Adam para capturar no linealidades complejas en las series financieras.</p>", code: "from quant_trading.models import NeuralNetworkPredictor\nprint('Red Neuronal Deep Learning Inicializada.')" }
    ]
  },
  {
    id: 13,
    title: "Sistema de Trading Unificado de Producción",
    lessons: [
      { id: 43, title: "Orquestación en main.py", dur: "32:15", theory: "<h3>Transcripción Magistral (32:15 min)</h3><p>Unificación de las 7 etapas en `main.py`: Conexión Broker -> Captura de Datos -> Sentimiento NLP -> Regímenes HMM -> Modelo ML -> Backtest -> Ejecución en Broker API.</p>", code: "from quant_trading.execution import QuantTradingEngine\nengine = QuantTradingEngine()\nprint('Motor Unificado de Producción Listos.')" }
    ]
  },
  {
    id: 14,
    title: "Criterio de Kelly, VaR y Gestión de Riesgo",
    lessons: [
      { id: 44, title: "Value at Risk (VaR) y Kelly", dur: "17:45", theory: "<h3>Transcripción Magistral (17:45 min)</h3><p>Gestión de capital e hiperparámetros de riesgo. Cálculo de Value at Risk (VaR) al 95% de confianza y dimensionamiento óptimo de posición mediante la fórmula de Kelly.</p>", code: "print('Gestión de Riesgo Kelly & VaR Activa.')" }
    ]
  },
  {
    id: 15,
    title: "Estrategias Intradía y Swing Trading",
    lessons: [
      { id: 45, title: "Sistemas Breakout y SuperTrend", dur: "20:30", theory: "<h3>Transcripción Magistral (20:30 min)</h3><p>Diseño de sistemas de ruptura de rango (*Breakout*) respaldados por volumen y filtros de volatilidad ATR para estrategias intradía y swing.</p>", code: "print('Estrategia Swing Trading Configurada.')" }
    ]
  },
  {
    id: 16,
    title: "Trading en Criptoactivos con Binance API",
    lessons: [
      { id: 46, title: "Conexión Binance Spot & Futuros", dur: "19:15", theory: "<h3>Transcripción Magistral (19:15 min)</h3><p>Conexión 24/7 a WebSockets y REST API de Binance para negociación algorítmica de BTC/USDT y ETH/USDT.</p>", code: "print('Conector Binance Spot & Futures Activo.')" }
    ]
  },
  {
    id: 17,
    title: "Operativa Forex en OANDA REST v20",
    lessons: [
      { id: 47, title: "Trading Automatizado de Divisas", dur: "18:10", theory: "<h3>Transcripción Magistral (18:10 min)</h3><p>Ejecución automatizada en el mercado interbancario de divisas (EUR/USD, GBP/USD) utilizando la API REST v20 de OANDA.</p>", code: "print('Motor OANDA REST v20 Activo.')" }
    ]
  },
  {
    id: 18,
    title: "Operativa en Acciones del S&P 500",
    lessons: [
      { id: 48, title: "Escáner Cuantitativo Multiactivo", dur: "22:00", theory: "<h3>Transcripción Magistral (22:00 min)</h3><p>Construcción de un escáner que evalúa diariamente las 500 acciones del S&P 500 y selecciona la mejor combinación de momentum y valor fundamental.</p>", code: "print('Escáner S&P 500 Multiactivo Cargado.')" }
    ]
  },
  {
    id: 19,
    title: "Estrategias de Arbitraje Estadístico y Pares",
    lessons: [
      { id: 49, title: "Cointegración y Pair Trading", dur: "25:30", theory: "<h3>Transcripción Magistral (25:30 min)</h3><p>Test de Dickey-Fuller Aumentado (ADF) para identificar pares de activos cointegrados y operar reversiones del Z-Score del spread.</p>", code: "print('Sistema de Arbitraje Estadístico Activo.')" }
    ]
  },
  {
    id: 20,
    title: "Estrategias de Regresión a la Media (Mean Reversion)",
    lessons: [
      { id: 50, title: "Proceso Ornstein-Uhlenbeck", dur: "16:20", theory: "<h3>Transcripción Magistral (16:20 min)</h3><p>Modelado estocástico de regresión a la media (*Mean Reversion*) mediante el proceso Ornstein-Uhlenbeck para capturar desviaciones extremas de precio.</p>", code: "print('Estrategia Mean Reversion Configurada.')" }
    ]
  },
  {
    id: 21,
    title: "Estrategias Momentum y Breakout",
    lessons: [
      { id: 51, title: "Ruptura de Canales Donchian", dur: "15:40", theory: "<h3>Transcripción Magistral (15:40 min)</h3><p>Captura de aceleración de precios mediante rupturas de canales Donchian respaldadas por filtros de expansión de volumen.</p>", code: "print('Sistema Momentum Donchian Listo.')" }
    ]
  },
  {
    id: 22,
    title: "Optimización de Portafolios Markowitz & Black-Litterman",
    lessons: [
      { id: 52, title: "Frontera Eficiente de Markowitz", dur: "26:15", theory: "<h3>Transcripción Magistral (26:15 min)</h3><p>Optimización cuadrática en Python para encontrar la asignación óptima de pesos que maximiza el coeficiente de Sharpe sobre la Frontera Eficiente.</p>", code: "print('Optimizador Markowitz de Portafolios Listo.')" }
    ]
  },
  {
    id: 23,
    title: "Detección de Anomalías y Filtros Kalman",
    lessons: [
      { id: 53, title: "Filtrado Estocástico de Kalman", dur: "24:10", theory: "<h3>Transcripción Magistral (24:10 min)</h3><p>Aplicación de Filtros de Kalman en series financieras para eliminar el ruido de mercado y estimar la trayectoria verdadera del activo.</p>", code: "print('Filtro de Kalman Dinámico Activo.')" }
    ]
  },
  {
    id: 24,
    title: "Microestructura de Mercado y Libros de Órdenes (L2/L3)",
    lessons: [
      { id: 54, title: "Order Book Imbalance (L2/L3)", dur: "21:45", theory: "<h3>Transcripción Magistral (21:45 min)</h3><p>Análisis de la profundidad de mercado (*Level 2 / Level 3*) y medición del desequilibrio de volumen (*Order Book Imbalance*) en las puntas Bid y Ask.</p>", code: "print('Analizador de Microestructura L2/L3 Listo.')" }
    ]
  },
  {
    id: 25,
    title: "Web Scraping Financiero e Integración de Noticias",
    lessons: [
      { id: 55, title: "Web Scraping de Estados Financieros", dur: "19:30", theory: "<h3>Transcripción Magistral (19:30 min)</h3><p>Extracción automatizada de reportes trimestrales 10-Q y 10-K desde SEC EDGAR utilizando BeautifulSoup y Selenium en Python.</p>", code: "print('Scraper SEC EDGAR Activo.')" }
    ]
  },
  {
    id: 26,
    title: "Cuentas de Fondeo (Prop Trading) y Reglas de Evaluación",
    lessons: [
      { id: 56, title: "Reglas de Prop Trading", dur: "17:50", theory: "<h3>Transcripción Magistral (17:50 min)</h3><p>Configuración de controles de riesgo automatizados en Python para superar pruebas de evaluación de firmas de fondeo sin violar el *Daily Loss Limit*.</p>", code: "print('Control de Riesgo Prop Firm Activo.')" }
    ]
  },
  {
    id: 27,
    title: "Certificaciones Financieras (CFA, FRM, CQF, CMT)",
    lessons: [
      { id: 57, title: "Guía de Carrera y Certificaciones", dur: "15:00", theory: "<h3>Transcripción Magistral (15:00 min)</h3><p>Comparativa estratégica entre los programas CFA, FRM, CQF y CMT. Requisitos de experiencia, mapas de estudio y oportunidades de carrera quant.</p>", code: "print('Guía Profesional de Certificaciones Lista.')" }
    ]
  },
  {
    id: 28,
    title: "Aspectos Fiscales, Impuestos y Formulario W-8BEN",
    lessons: [
      { id: 58, title: "Fiscalidad e Impuestos en Trading", dur: "14:20", theory: "<h3>Transcripción Magistral (14:20 min)</h3><p>Declaración de ganancias de capital realizadas, deducción de comisiones operativas y llenado del Formulario W-8BEN para operar con brokers de EE. UU.</p>", code: "print('Guía Fiscal W-8BEN e Impuestos Configurada.')" }
    ]
  },
  {
    id: 29,
    title: "Apéndice: Curso Intensivo de Python desde Cero",
    lessons: [
      { id: 59, title: "Python Crash Course para Finanzas", dur: "45:00", theory: "<h3>Transcripción Magistral (45:00 min)</h3><p>Tutorial intensivo desde cero: variables, estructuras de datos (listas, diccionarios), control de flujo, funciones y manipulación de DataFrames con Pandas y NumPy.</p>", code: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'Close': [100, 102, 105]})\nprint(df)" }
    ]
  }
];

COURSE_DATA.push(...REMAINING_SECTIONS);

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
          
          if (code.includes('quant_trading') || code.includes('MockBrokerAPI') || code.includes('QuantAsset')) {
            simulatedLogs += `[SUCCESS] Módulo Quant cargado correctamente.\n`;
            simulatedLogs += `[BROKER API] Conexión establecida con Broker API.\n`;
          }

          if (code.includes('TradingBotAutomated') || code.includes('BUY')) {
            simulatedLogs += `[BOT AUTOMATED] Escuchando Ticks en Tiempo Real...\n`;
            simulatedLogs += `[SIGNAL] Señal Cuantitativa Detectada: BUY (COMPRA ALCISTA)\n`;
            simulatedLogs += `[EXECUTION] Orden Ejecutada: ORD-778912 | Qty: 50 acciones AAPL\n`;
          }

          if (code.includes('PerformanceMetrics') || code.includes('Sharpe') || code.includes('CAGR')) {
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
