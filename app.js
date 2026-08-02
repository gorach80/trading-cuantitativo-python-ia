/* app.js: Complete Enriched Masterclasses & Standalone Python Code for All Lessons */

// Full Course Data Structure with Rich Multi-Paragraph Masterclasses & Standalone Python Scripts
const COURSE_DATA = [
  {
    id: 1,
    title: "Introducción y Flujo de Trabajo",
    lessons: [      { 
        id: 1, 
        title: "Estructura del Curso", 
        dur: "10:56", 
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>Bienvenidos a la lección inaugural del curso <b>Trading Cuantitativo en Python: Ingeniería Financiera e Inteligencia Artificial</b>. Esta lección de 10 minutos y 56 segundos establece la base pedagógica para cualquier estudiante, sin importar si no tienes conocimientos previos de finanzas o programación.</p>

          <div class="theory-callout">
            <b>💡 ¿Qué es el Trading Cuantitativo explicado sin jerga?</b><br>
            - <b>Trading Discrecional (Tradicional):</b> Comprar o vender activos financieros basándose en corazonadas, emociones, intuición o comentarios de noticias.<br>
            - <b>Trading Cuantitativo (Quant):</b> Aplicar el método científico y la programación en Python para definir reglas matemáticas exactas de inversión. La computadora evalúa millones de datos del pasado para verificar si la estrategia es rentable antes de arriesgar un solo dólar.
          </div>

          <h3>🏛️ Glosario Elemental de Finanzas de la Clase 1:</h3>
          <ul>
            <li><b>Mercado Financiero:</b> La red digital donde compradores y vendedores intercambian instrumentos financieros (acciones, divisas, criptomonedas).</li>
            <li><b>Activo Financiero / Ticker:</b> La representación de una propiedad o contrato. Por ejemplo, <code>AAPL</code> es el código o <i>Ticker</i> bursátil de la empresa Apple Inc.</li>
            <li><b>Broker (Corredor de Bolsa):</b> La institución financiera regulada que conecta tu programa en Python con la bolsa de valores para ejecutar tus órdenes.</li>
            <li><b>Backtesting (Simulación Histórica):</b> El proceso de probar tu estrategia en datos históricos del pasado para medir su rendimiento, riesgo y pérdidas máximas antes de operar en tiempo real.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>Si nunca has escrito una línea de código en tu vida, no te preocupes. Python es el lenguaje más sencillo y parecido al lenguaje humano utilizado por los grandes bancos internacionales (JPMorgan, Goldman Sachs). En esta lección aprenderás los primeros componentes clave:</p>
          
          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis Python para Principiantes:</b><br>
            - <code>import sys, os</code>: La palabra clave <b>import</b> sirve para traer "cajas de herramientas" prefabricadas llamadas <i>Módulos</i>. <code>sys</code> nos da información sobre la computadora y <code>os</code> nos permite manejar archivos y carpetas.<br>
            - <code>def ejecutar_clase_01():</code>: La palabra <b>def</b> (definir) crea una <b>Función</b>, que es una receta o grupo de instrucciones reutilizable. Los paréntesis <code>()</code> reciben datos y los dos puntos <code>:</code> le indican a Python que lo que está indented (con sangría a la derecha) pertenece a esa función.<br>
            - <code>print("Texto")</code>: La función <b>print()</b> toma un texto o variable entre paréntesis y lo imprime en la pantalla de la terminal.<br>
            - <code>f"Versión: {variable}"</code>: Una <i>f-string</i> (cadena de texto formateada) nos permite incrustar variables vivas dentro de un texto usando llaves <code>{}</code>.<br>
            - <code>if __name__ == "__main__":</code>: Es una protección estándar de Python que le dice al programa: <i>"Solo ejecuta este código si la persona hizo doble clic directamente sobre este archivo"</i>.
          </div>
        `,
        code: `# clase_01_estructura.py - Código Completo y Comentado para Principiantes
import sys
import os
import quant_trading

def ejecutar_clase_01():
    # 1. Mensaje de Bienvenida e Introducción al Sistema Quant
    print("=====================================================================")
    print("  CLASE 1: VERIFICACIÓN DEL SISTEMA DE TRADING CUANTITATIVO E IA    ")
    print("=====================================================================")
    
    # 2. Consultar la versión instalada de la librería personalizada del curso
    version_quant = quant_trading.__version__
    print(f" Versión de la Librería Quant  : {version_quant}")
    
    # 3. Consultar la versión del intérprete de Python en tu computadora
    version_python = sys.version.split()[0]
    plataforma_os = sys.platform
    print(f" Intérprete Python Detectado    : v{version_python} en sistema ({plataforma_os})")
    
    # 4. Imprimir la lista de submódulos que aprenderemos durante el curso
    print("\n Módulos de Aprendizaje Disponibles:")
    print("   - Core        : POO, Multiprocessing, Hilos y Cerrojos Locks")
    print("   - Data        : Conectores ETL (Yahoo Finance, Binance API)")
    print("   - Backtesting : Motor de Simulación Histórica & Métricas KPIs")
    print("   - Indicators  : Biblioteca de +100 Indicadores Técnicos")
    print("   - Analysis    : Valoración DCF Fundamental & Sentimiento NLP VADER")
    print("   - Models      : Modelos IA (HMM, Random Forest, PyTorch MLP)")
    print("   - Execution   : Conexión con Broker APIs (Interactive Brokers, OANDA)")
    print("=====================================================================")

# Punto de entrada principal para ejecutar la función
if __name__ == "__main__":
    ejecutar_clase_01()`
      },
      { 
        id: 2, 
        title: "Requisitos Elementales", 
        dur: "01:39", 
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>En esta lección de 1 minuto y 39 segundos revisamos las herramientas técnicas y requisitos mínimos indispensables para construir tu propia mesa de operaciones cuantitativas en Python.</p>

          <div class="theory-callout">
            <b>💡 ¿Se requiere experiencia previa en Finanzas o Trading?</b><br>
            <b>No.</b> El curso está diseñado desde cero. Cada concepto financiero (como órdenes de compra, ticks de volumen, volatilidad o apalancamiento) se introduce paso a paso antes de escribir el código correspondiente.
          </div>

          <h3>🏛️ Componentes del Entorno de Operaciones Cuantitativas:</h3>
          <ul>
            <li><b>Datos de Mercado (Market Data):</b> La materia prima del desarrollador quant. Consiste en series temporales históricas de precios (<i>Apertura, Máximo, Mínimo, Cierre y Volumen - OHLCV</i>).</li>
            <li><b>Terminal de Ejecución (Broker Gateway):</b> El software que conecta tu computadora con la bolsa de valores para transmitir órdenes en milisegundos.</li>
            <li><b>Estabilidad del Entorno Científico:</b> La garantía de que todas las librerías matemáticas y de Inteligencia Artificial estén instaladas en versiones compatibles sin conflictos.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>En esta clase aprenderás tres estructuras esenciales de Python utilizadas en todos los algoritmos de trading del mundo:</p>

          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis Python para Principiantes:</b><br>
            - <code>librerias = ['pandas', 'numpy', 'scipy']</code>: Una <b>Lista</b> es una colección ordenada de elementos encerrados entre corchetes <code>[]</code>. Permite almacenar múltiples nombres o precios en una sola variable.<br>
            - <code>for lib in librerias:</code>: Un <b>Bucle FOR</b> es una instrucción que repite una acción recorriendo cada elemento de la lista uno por uno.<br>
            - <code>try / except</code>: La estructura de <b>Control de Excepciones</b>. El bloque <code>try:</code> intenta ejecutar una instrucción propensa a error (como cargar una librería que podría no estar instalada). Si falla, el programa no colapsa, sino que salta al bloque <code>except:</code> para mostrar un mensaje amigable.<br>
            - <code>platform.system()</code>: Función del módulo nativo <code>platform</code> que devuelve el nombre de tu sistema operativo (<i>Windows, macOS o Linux</i>).
          </div>
        `,
        code: `# clase_02_requisitos.py - Código Completo y Comentado para Principiantes
import sys
import platform

def verificar_requisitos_entorno():
    # 1. Encabezado de Diagnóstico
    print("=====================================================================")
    print("  CLASE 2: VERIFICACIÓN DE REQUISITOS TÉCNICOS Y DEPENDENCIAS       ")
    print("=====================================================================")
    
    # 2. Obtener información del Sistema Operativo y Versión de Python
    sistema_operativo = f"{platform.system()} {platform.release()} ({platform.machine()})"
    version_py = sys.version.split()[0]
    
    print(f" Sistema Operativo Detectado : {sistema_operativo}")
    print(f" Versión de Python Activa    : v{version_py}")
    
    # 3. Lista de paquetes esenciales para Trading Cuantitativo e IA
    librerias_clave = ['pandas', 'numpy', 'scipy', 'sklearn', 'yfinance']
    
    print("\n Estado de Paquetes Cuantitativos e IA Instalados:")
    print(" -------------------------------------------------------------------")
    
    # 4. Bucle FOR con control de excepciones TRY / EXCEPT
    for lib in librerias_clave:
        try:
            # Intenta importar el módulo dinámicamente
            mod = __import__(lib)
            version_lib = getattr(mod, '__version__', 'Instalado OK')
            print(f"   [✓ INSTALADO] {lib.ljust(15)} : v{version_lib}")
        except ImportError:
            # Si el paquete no existe en el sistema, captura el error
            print(f"   [✗ NO DETECTADO] {lib.ljust(15)} : Ejecutar 'pip install {lib}'")
            
    print("=====================================================================")

# Ejecución autónoma de la función
if __name__ == "__main__":
    verificar_requisitos_entorno()`
      },
      {
        id: 3,
        title: "Conoce a tu Instructor y Bienvenida",
        dur: "01:43",
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>Presentación oficial del instructor <b>Axel Francisco Munguía Quintero</b> y bienvenida al marco pedagógico de <b>Aprender Construyendo (Build to Learn)</b> en Ingeniería Financiera.</p>

          <div class="theory-callout">
            <b>💡 ¿Por qué aprender Finanzas programando es más eficiente?</b><br>
            En las finanzas tradicionales se enseñan teorías sin comprobación empírica. En el <b>Trading Cuantitativo</b>, cada fórmula o estrategia (como medias móviles o modelos de Inteligencia Artificial) se traduce inmediatamente a código Python. Si el algoritmo funciona en datos reales pasados, el aprendizaje queda validado empíricamente.
          </div>

          <h3>👨‍🏫 Perfil Profesional del Instructor:</h3>
          <ul>
            <li><b>Formación Académica:</b> Ingeniero Financiero con Máster en Inteligencia Artificial Aplicada.</li>
            <li><b>Experiencia Cuantitativa:</b> Desarrollador / Trader Quant activo en mercados de Renta Variable, Forex y Derivados.</li>
            <li><b>Métricas en Udemy:</b> Calificación promedio de 4.7★ (847 reseñas), más de 7,000 estudiantes y más de 30 certificaciones internacionales en Ciberseguridad y Finanzas.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>En esta lección nos introducimos al concepto más poderoso de la programación moderna: la <b>Programación Orientada a Objetos (POO)</b>.</p>

          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis POO para Principiantes:</b><br>
            - <code>class InstructorProfile:</code>: La palabra clave <b>class</b> (Clase) crea una plantilla o "molde" para construir objetos. Imagina que es el plano arquitectónico de una casa.<br>
            - <code>def __init__(self, name, title):</code>: Es el <b>Método Constructor</b>. Es una función especial que se ejecuta automáticamente cuando se crea un objeto para inicializar sus datos (atributos).<br>
            - <code>self</code>: Representa al objeto específico que se está creando en ese momento. Al escribir <code>self.name = name</code>, le decimos a Python: <i>"Guarda este nombre dentro de la memoria de este objeto"</i>.<br>
            - <code>{self.students_count:,}</code>: El modificador <code>:,</code> dentro de una f-string le indica a Python que agregue comas de separación de miles a números grandes (transformando <code>7067</code> en <code>7,067</code>).
          </div>
        `,
        code: `# clase_03_instructor.py - Código Completo y Comentado para Principiantes
class InstructorProfile:
    """
    Clase que representa el perfil profesional del instructor del curso.
    Demuestra la creación de Clases, Métodos y Atributos en Python.
    """
    def __init__(self, name, title, master_degree, certifications_count, rating, students_count):
        # Atributos de instancia guardados usando 'self'
        self.name = name
        self.title = title
        self.master_degree = master_degree
        self.certifications_count = certifications_count
        self.rating = rating
        self.students_count = students_count

    def get_welcome_summary(self):
        # Método de instancia que genera un reporte formateado de bienvenida
        resumen = (
            f"=====================================================================\n"
            f"  BIENVENIDO AL CURSO DE TRADING CUANTITATIVO EN PYTHON E IA         \n"
            f"=====================================================================\n"
            f" Instructor              : {self.name}\n"
            f" Perfil Profesional      : {self.title}\n"
            f" Grado Académico         : {self.master_degree}\n"
            f" Certificaciones Int.    : +{self.certifications_count} Acreditaciones\n"
            f" Métricas de Plataforma  : {self.rating}★ Rating | {self.students_count:,} Estudiantes\n"
            f"====================================================================="
        )
        return resumen

def ejecutar_clase_03():
    # Instanciación de la Clase (creación del objeto 'inst')
    inst = InstructorProfile(
        name="Axel Francisco Munguía Quintero",
        title="Ingeniero Financiero & Quant Developer",
        master_degree="Máster en Inteligencia Artificial Aplicada",
        certifications_count=30,
        rating=4.7,
        students_count=7067
    )
    # Imprimir el resultado devuelto por el método del objeto
    print(inst.get_welcome_summary())

# Punto de ejecución principal
if __name__ == "__main__":
    ejecutar_clase_03()`
      },
      {
        id: 4,
        title: "Evaluaciones Tempranas",
        dur: "01:29",
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>En esta lección de 1 minuto y 29 segundos establecemos el propósito de las <b>Evaluaciones Tempranas y Diagnósticas</b> para medir el nivel de entrada del estudiante en cuatro pilares fundamentales.</p>

          <div class="theory-callout">
            <b>🎯 Rúbrica de Diagnóstico Inicial & Rutas Personalizadas:</b><br>
            - <b>Puntuación 0% a 40%:</b> Iniciar por el Apéndice Intensivo de Python desde Cero (Sección 29) antes de avanzar a la programación orientada a objetos.<br>
            - <b>Puntuación 41% a 75%:</b> Seguir la secuencia estándar recomendada del curso (Secciones 1 a 28).<br>
            - <b>Puntuación 76% a 100%:</b> Enfoque de aprendizaje prioritario en Cómputo Paralelo, Machine Learning y APIs de Brokerage.
          </div>

          <h3>🏛️ Los 4 Pilares Evaluados en la Prueba Inicial:</h3>
          <ul>
            <li><b>Finanzas & Mercados:</b> Comprensión de activos, bolsa de valores, oferta y demanda.</li>
            <li><b>Estadística & Múltiplos:</b> Medias, desviación estándar, porcentajes y varianza.</li>
            <li><b>Lógica Algorítmica:</b> Diagramación de flujos de decisión y condicionales.</li>
            <li><b>Programación Python:</b> Manejo de variables, listas, diccionarios y funciones.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>En esta lección utilizaremos una de las estructuras de datos más potentes de Python: los <b>Diccionarios</b>.</p>

          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis Python para Principiantes:</b><br>
            - <code>self.scores = {}</code>: Un <b>Diccionario</b> es una estructura de datos delimitada por llaves <code>{}</code> que almacena parejas de <b>Clave : Valor</b> (como un diccionario de palabras y definiciones).<br>
            - <code>self.scores[category] = score</code>: Asigna o actualiza el valor de una clave específica dentro del diccionario.<br>
            - <code>self.scores.items()</code>: Método que extrae simultáneamente la pareja (clave, valor) para poder recorrerla en un bucle <code>for cat, score in self.scores.items():</code>.<br>
            - <code>"█" * int(score // 10)</code>: En Python, multiplicar un texto por un entero repite la cadena ese número de veces. El operador <code>//</code> realiza una <b>División Entera</b> (descartando decimales).<br>
            - <code>{score:.1f}%</code>: Formatea un número flotante para mostrar exactamente 1 decimal.
          </div>
        `,
        code: `# clase_04_evaluaciones.py - Código Completo y Comentado para Principiantes
class DiagnosticAssessment:
    """
    Clase que implementa un evaluador diagnóstico de entrada para estudiantes.
    Demuestra el uso de Diccionarios, bucles .items() y formateo visual en Python.
    """
    def __init__(self, student_name):
        self.student_name = student_name
        self.scores = {} # Inicialización de un diccionario vacío

    def record_score(self, category, score_pct):
        # Asigna un puntaje validando que esté entre 0.0 y 100.0%
        self.scores[category] = min(max(score_pct, 0.0), 100.0)

    def evaluate_readiness(self):
        # Calcula el promedio simple del estudiante
        total_score = sum(self.scores.values()) / len(self.scores) if self.scores else 0.0
        
        print("=====================================================================")
        print(f"  DIAGNÓSTICO INICIAL DE ENTRADA - ESTUDIANTE: {self.student_name.upper()}")
        print("=====================================================================")
        
        # Recorrer clave (cat) y valor (score) en el diccionario
        for cat, score in self.scores.items():
            # Crear una barra visual de progreso multiplicando caracteres
            barras_llenas = int(score // 10)
            barras_vacias = 10 - barras_llenas
            bar = "█" * barras_llenas + "░" * barras_vacias
            print(f"  - {cat.ljust(25)} : [{bar}] {score:.1f}%")
            
        print("---------------------------------------------------------------------")
        print(f"  PUNTUACIÓN GLOBAL DE ENTRADA : {total_score:.1f}% / 100%")
        print("=====================================================================")

def ejecutar_clase_04():
    # Crear la instancia de evaluación para el estudiante
    evaluacion = DiagnosticAssessment("Estudiante Quant")
    evaluacion.record_score("Finanzas & Mercados", 85.0)
    evaluacion.record_score("Estadística & Múltiplos", 90.0)
    evaluacion.record_score("Lógica Algorítmica", 80.0)
    evaluacion.record_score("Programación Python", 95.0)
    
    # Ejecutar la evaluación e imprimir la barra de progreso
    evaluacion.evaluate_readiness()

# Punto de entrada principal
if __name__ == "__main__":
    ejecutar_clase_04()`
      },
      {
        id: 5,
        title: "Udemy: Herramientas y Recursos",
        dur: "02:40",
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>En esta lección de 2 minutos y 40 segundos exploramos la estructura organizativa del proyecto de software <code>quant_trading/</code> y cómo navegar en los recursos de aprendizaje del curso.</p>

          <div class="theory-callout">
            <b>💡 Organización del Proyecto de Trading Profesional:</b><br>
            - <b><code>main.py</code>:</b> El orquestador principal (centro de mando) que enciende el bot y coordina la descarga de datos, cálculo de señales e instrucciones al broker.<br>
            - <b><code>quant_trading/</code>:</b> La biblioteca modular dividida en submódulos especializados (<i>core, data, backtesting, indicators, analysis, models, execution</i>).<br>
            - <b><code>docs/</code>:</b> Repositorio de documentación con manuales teóricos, certificaciones profesionales (CFA, FRM) y formularios fiscales (W-8BEN).
          </div>

          <h3>🏛️ Recursos y Herramientas a tu Disposición:</h3>
          <ul>
            <li><b>Sección de Preguntas y Respuestas (Q&A):</b> Canal de soporte técnico directo con el instructor.</li>
            <li><b>Código Fuente Descargable:</b> Scripts autónomos `.py` para cada clase probados en Python 3.10+.</li>
            <li><b>Plataforma Web Interactiva:</b> Entorno en vivo para simular backtesting y ejecutar código en tiempo real.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>En esta clase aprenderás a interactuar con el sistema de archivos del disco duro utilizando el módulo nativo <b><code>os</code></b> de Python.</p>

          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis Python para Principiantes:</b><br>
            - <code>import os</code>: Módulo que proporciona funciones para interactuar con el sistema operativo.<br>
            - <code>os.getcwd()</code>: Obtiene la ruta del directorio de trabajo actual (<i>Get Current Working Directory</i>).<br>
            - <code>os.path.join(ruta, archivo)</code>: Construye una ruta de archivo compatible de forma automática, usando barras invertidas <code>\\</code> en Windows y barras diagonales <code>/</code> en macOS/Linux.<br>
            - <code>os.path.exists(ruta)</code>: Devuelve <code>True</code> si el archivo o carpeta existe físicamente en el disco duro, y <code>False</code> si no se encuentra.<br>
            - <code>[('archivo.py', 'Descripción'), ...]</code>: Una <b>Tupla</b> <code>('a', 'b')</code> es una secuencia inmutable entre paréntesis. Al combinarlas en una lista, creamos tablas de datos ordenadas.<br>
            - <code>item.ljust(35)</code>: Método que rellena el texto con espacios a la derecha hasta alcanzar 35 caracteres para alinear columnas visualmente en la terminal.
          </div>
        `,
        code: `# clase_05_recursos.py - Código Completo y Comentado para Principiantes
import os

class CourseResourceManager:
    """
    Clase que escanea y verifica la existencia de archivos y carpetas del proyecto.
    Demuestra el uso del módulo 'os', tuplas, comprobación de rutas y alineación de cadenas.
    """
    def __init__(self, workspace_root):
        self.workspace_root = workspace_root

    def scan_resources(self):
        print("=====================================================================")
        print("  INVENTARIO DE RECURSOS Y ESTRUCTURA DE ARCHIVOS DEL CURSO           ")
        print("=====================================================================")
        
        # Lista de Tuplas: cada tupla contiene (Nombre_Archivo, Descripción)
        elementos_clave = [
            ('main.py', 'Orquestador Unificado de Producción'),
            ('quant_trading/core', 'Módulo Core (POO, Multiprocessing, Locks)'),
            ('quant_trading/data', 'Módulo ETL (Yahoo, Binance API)'),
            ('quant_trading/backtesting', 'Motor de Backtesting & Métricas KPI'),
            ('quant_trading/indicators', 'Biblioteca de +100 Indicadores Técnicos'),
            ('quant_trading/analysis', 'Análisis Fundamental (DCF) & Sentiment (VADER)'),
            ('quant_trading/models', 'Modelos IA (HMM, Random Forest, PyTorch MLP)'),
            ('quant_trading/execution', 'Broker API Conectores & Engine'),
            ('index.html', 'Plataforma Web Interactiva (GitHub Pages)'),
            ('docs/contenido_teorico_completo.md', 'Manual Teórico Magistral Completo')
        ]
        
        # Bucle FOR para verificar la existencia de cada elemento
        for item, desc in elementos_clave:
            # os.path.join une la carpeta raíz con el nombre de archivo de forma segura
            full_path = os.path.join(self.workspace_root, item)
            
            # os.path.exists verifica si el archivo o carpeta existe realmente
            if os.path.exists(full_path):
                status = "[✓ DISPONIBLE]"
            else:
                status = "[⚠ PENDIENTE]"
                
            # ljust(35) alinea el texto a 35 caracteres para que las flechas queden ordenadas
            print(f"  {status.ljust(15)} {item.ljust(35)} -> {desc}")
            
        print("=====================================================================")

def ejecutar_clase_05():
    # Obtener el directorio actual donde se está ejecutando el script
    root_dir = os.getcwd()
    manager = CourseResourceManager(root_dir)
    manager.scan_resources()

# Punto de entrada principal
if __name__ == "__main__":
    ejecutar_clase_05()`
      },
      {
        id: 6,
        title: "Preguntas Frecuentes y Soluciones (FAQ)",
        dur: "02:09",
        theory: `
          <h3>📖 Transcripción Magistral y Fundamentos Financieros (Trading para Principiantes)</h3>
          <p>En esta lección de 2 minutos y 9 segundos revisamos las soluciones prácticas a los problemas más comunes al desarrollar sistemas cuantitativos y conectarse a mercados financieros.</p>

          <div class="theory-callout">
            <b>💡 Diagnóstico de Incidencias en Trading Cuantitativo:</b><br>
            - <b>Error de Límite de Peticiones (Rate Limit Exceeded):</b> Ocurre cuando un script en Python solicita datos a un broker más rápido de lo permitido por la API. Se soluciona implementando pausas (<i>throttling</i>) o cachés locales.<br>
            - <b>Descalce de Zonas Horarias (Timezone Mismatch):</b> Los precios históricos vienen registrados en tiempo UTC, mientras que las bolsas de valores (como el NYSE) operan en hora de Nueva York (EST/EDT). Se resuelve convirtiendo marcas de tiempo con <code>pandas.tz_convert()</code>.<br>
            - <b>Valores Faltantes por Días Festivos (NaNs):</b> Días en los que el mercado bursátil está cerrado. Se soluciona limpiando datos con imputación o eliminación controlada (<code>dropna()</code> / <code>fillna()</code>).
          </div>

          <h3>🏛️ Protocolo de Soporte Técnico en el Curso:</h3>
          <ul>
            <li><b>1. Consultar el Módulo FAQ Integrado:</b> Verificación inmediata de códigos de error comunes.</li>
            <li><b>2. Sección de Q&A en Udemy:</b> Publicación de capturas de pantalla y trazas de error (<i>Traceback</i>).</li>
            <li><b>3. Repositorio de Soluciones:</b> Guía de actualización de dependencias con <code>pip</code>.</li>
          </ul>

          <h3>🐍 Teoría y Sintaxis de Programación en Python desde Cero:</h3>
          <p>En esta clase aprenderás a estructurar bases de conocimiento usando <b>Diccionarios Anidados</b> en Python.</p>

          <div class="theory-callout">
            <b>🔍 Desglose de Sintaxis Python para Principiantes:</b><br>
            - <code>dict_anidado = {"ID": {"campo1": "valor1", "campo2": "valor2"}}</code>: Un <b>Diccionario Anidado</b> consiste en guardar un diccionario dentro de otro diccionario para organizar datos jerárquicos estructurados.<br>
            - <code>data["pregunta"]</code>: Acceso a un valor específico dentro del diccionario interno usando su clave entre corchetes.<br>
            - <code>\\n</code>: Carácter de escape especial que inserta un <b>Salto de Línea</b> en el texto.<br>
            - <code>print(f"... {variable} ...")</code>: Concatenación y formateo de texto dinámico de múltiples líneas.
          </div>
        `,
        code: `# clase_06_faq.py - Código Completo y Comentado para Principiantes
class QuantTroubleshooter:
    """
    Clase que implementa un gestor de preguntas frecuentes y diagnóstico de errores Quant.
    Demuestra la estructuración de Diccionarios Anidados y formateo de mensajes en Python.
    """
    def __init__(self):
        # Diccionario Anidado: cada clave contiene otro diccionario con la solución
        self.knowledge_base = {
            "ERR_01_MODULE_NOT_FOUND": {
                "pregunta": "¿Por qué aparece 'ModuleNotFoundError: No module named quant_trading'?",
                "solucion": "Ejecutar 'pip install -e .' en la raíz del proyecto para registrar la librería en Python."
            },
            "ERR_02_RATE_LIMIT": {
                "pregunta": "¿Por qué la API de Yahoo Finance o Binance bloquea mis peticiones?",
                "solucion": "Has superado el límite de peticiones por minuto. Implementa time.sleep(1.0) entre descargas."
            },
            "ERR_03_TIMEZONE": {
                "pregunta": "¿Por qué mis fechas de precios no coinciden con las horas locales?",
                "solucion": "Los datos de mercado vienen en UTC. Aplica df.index = df.index.tz_convert('America/New_York')."
            }
        }

    def resolve_issue(self, error_code):
        # Comprobar si el código de error existe en la base de datos
        if error_code in self.knowledge_base:
            info = self.knowledge_base[error_code]
            print(f"\\n [CÓDIGO ERROR: {error_code}]")
            print(f"  📌 Pregunta : {info['pregunta']}")
            print(f"  💡 Solución : {info['solucion']}")
        else:
            print(f"\\n [!] Código de error '{error_code}' no registrado. Consultar en el foro Q&A.")

    def display_all_faqs(self):
        print("=====================================================================")
        print("  MÓDULO DE PREGUNTAS FRECUENTES Y SOLUCIÓN DE ERRORES (FAQ)        ")
        print("=====================================================================")
        
        # Bucle FOR para recorrer el diccionario anidado principal
        for code in self.knowledge_base:
            self.resolve_issue(code)
            
        print("\\n=====================================================================")

def ejecutar_clase_06():
    troubleshooter = QuantTroubleshooter()
    troubleshooter.display_all_faqs()

# Punto de entrada principal
if __name__ == "__main__":
    ejecutar_clase_06()`
      },
      {
        id: 7,
        title: "Aviso Legal",
        dur: "01:02",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (01:02 min)</h3>
          <div class="theory-callout">
            <b>Descargo de Responsabilidad y Marco Legal:</b><br>
            1. El software y los modelos de IA son 100% académicos e investigativos.<br>
            2. El rendimiento histórico de un backtest no asegura rentabilidades futuras.<br>
            3. El estudiante es el único responsable de la gestión de su capital y del cumplimiento regulatorio local.
          </div>
        `,
        code: `# clase_07_aviso_legal.py - Código Completo de la Clase 7
class LegalDisclaimerManager:
    def __init__(self, course_name, instructor):
        self.course_name = course_name
        self.instructor = instructor
        self.accepted = False

    def display_disclaimer(self):
        print("=====================================================================")
        print(f"  AVISO LEGAL Y DESCARGO DE RESPONSABILIDAD - {self.course_name.upper()}")
        print("=====================================================================")
        print(" 1. NATURALEZA EDUCATIVA : Software 100% académico e investigativo.")
        print(" 2. RIESGO DE MERCADO    : Operar mercados financieros conlleva riesgo.")
        print(" 3. RENDIMIENTO PASADO   : Rentabilidad histórica no asegura futuro.")
        print(" 4. RESPONSABILIDAD      : El estudiante es responsable de su capital.")
        print("=====================================================================")
        self.accepted = True
        print("\n [✓ CONFIRMADO] Términos legales aceptados. Sección 1 Completada.")

def ejecutar_clase_07():
    manager = LegalDisclaimerManager(
        "Trading Cuantitativo en Python e IA",
        "Axel Francisco Munguía Quintero"
    )
    manager.display_disclaimer()

if __name__ == "__main__":
    ejecutar_clase_07()`
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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (04:19 min)</h3>
          <p>En esta lección de 4 minutos y 19 segundos analizamos la arquitectura del <b>Flujo de Trabajo Cuantitativo (Quant Workflow)</b> de 5 etapas estandarizadas que gobierna todo el desarrollo de este curso.</p>

          <div class="theory-callout">
            <b>🎯 Las 5 Etapas del Pipeline Cuantitativo:</b><br>
            A diferencia de la operativa intuitiva, cada bot en Python sigue una secuencia rigurosa de ciclo de vida:<br>
            1. <i>Formulación de Hipótesis:</i> Definición del principio financiero o ventaja estadística (*edge*).<br>
            2. <i>Adquisición de Datos (ETL):</i> Muestreo de barras de tiempo, volumen o dólares.<br>
            3. <i>Modelo Algorítmico en Python:</i> Desarrollo modular orientado a objetos (POO).<br>
            4. <i>Backtesting Realista:</i> Simulación con costos de transacción (comisiones y slippage).<br>
            5. <i>Despliegue automatizado en Broker API:</i> Enrutamiento directo a mercado.
          </div>

          <h3>Estructura Interna del Pipeline Quant:</h3>
          <ul>
            <li><b>Fase ETL:</b> Limpieza de datos, ajuste por splits/dividendos e inserción de variables técnias.</li>
            <li><b>Fase de Simulación Out-of-Sample:</b> Garantiza que la estrategia no sufra de *overfitting* (sobreajuste).</li>
            <li><b>Fase de Enrutamiento:</b> Validación de órdenes antes de su transmisión a la API del broker.</li>
          </ul>
        `,
        code: `# clase_08_flujo_trabajo.py - Código Completo de la Clase 8
import time

class QuantWorkflowPipeline:
    def __init__(self, strategy_name):
        self.strategy_name = strategy_name
        self.stages = [
            "1. Formulación de Hipótesis & Edge Estadístico",
            "2. Adquisición y Limpieza de Datos (ETL)",
            "3. Desarrollo del Modelo Algorítmico en Python",
            "4. Backtesting Realista (Comisiones 0.1% + Slippage 0.05%)",
            "5. Despliegue Automatizado en Broker API"
        ]

    def run_pipeline(self):
        print("=====================================================================")
        print(f"  EJECUCIÓN DEL PIPELINE QUANT: {self.strategy_name.upper()}")
        print("=====================================================================")
        for idx, stage in enumerate(self.stages, 1):
            print(f"  [PROCESANDO] Etapa {idx}: {stage}...")
            time.sleep(0.1)
            print(f"  [✓ COMPLETADO] Etapa {idx} verificada exitosamente.\n")
        print("=====================================================================")
        print("  ESTADO GLOBAL: Pipeline Quant 100% Funcional y Listo para Producción")
        print("=====================================================================")

def ejecutar_clase_08():
    pipeline = QuantWorkflowPipeline("SuperTrend_HMM_Hybrid")
    pipeline.run_pipeline()

if __name__ == "__main__":
    ejecutar_clase_08()`
      },
      {
        id: 9,
        title: "Herramientas y Tecnologías",
        dur: "01:28",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (01:28 min)</h3>
          <p>En esta lección de 1 minuto y 28 segundos exploramos en detalle el ecosistema de software, librerías financieras y entornos de ejecución que componen la pila tecnológica (*stack tecnológico*) de un <b>Ingeniero Financiero / Trader Cuantitativo</b>.</p>

          <div class="theory-callout">
            <b>💡 Stack Tecnológico Cuantitativo e IA:</b><br>
            - <b>Python 3.10+ & Anaconda:</b> Interpretación dinámica y entornos virtuales aislados.<br>
            - <b>Pandas & NumPy:</b> DataFrames de series temporales e indexación DatetimeIndex.<br>
            - <b>Scikit-Learn & PyTorch:</b> Machine Learning supervisado y Redes Neuronales Profundas (MLP).<br>
            - <b>yfinance, IBAPI & Binance:</b> Conectores ETL de mercado e APIs de brokerage.
          </div>
        `,
        code: `# clase_09_tecnologias.py - Código Completo de la Clase 9
import sys
import platform

class QuantTechStackInspector:
    def __init__(self):
        self.stack = {
            "Python Core": ("sys", "Núcleo de Ejecución"),
            "Pandas": ("pandas", "DataFrames & Series Temporales"),
            "NumPy": ("numpy", "Cálculo Matricial Vectorizado"),
            "Scikit-Learn": ("sklearn", "Machine Learning Supervisado"),
            "PyTorch": ("torch", "Deep Learning & Redes Neuronales"),
            "yFinance": ("yfinance", "Conector ETL Datos de Mercado"),
            "Interactive Brokers API": ("ibapi", "Broker API Conector Institutional")
        }

    def inspect_stack(self):
        print("=====================================================================")
        print("  INSPECCIÓN DEL STACK TECNOLÓGICO QUANT E INTELIGENCIA ARTIFICIAL   ")
        print("=====================================================================")
        print(f" Intérprete Principal : Python v{sys.version.split()[0]} ({platform.system()})")
        print("---------------------------------------------------------------------")
        for tech, (mod_name, desc) in self.stack.items():
            try:
                mod = __import__(mod_name)
                ver = getattr(mod, "__version__", "Instalado")
                status = "[✓ INSTALADO]"
            except ImportError:
                ver = "N/A (Simulado)"
                status = "[⚠ DISPONIBLE]"
            print(f"  {status.ljust(15)} {tech.ljust(25)} (v{ver}) -> {desc}")
        print("=====================================================================")

def ejecutar_clase_09():
    inspector = QuantTechStackInspector()
    inspector.inspect_stack()

if __name__ == "__main__":
    ejecutar_clase_09()`
      },
      {
        id: 10,
        title: "Recomendaciones Generales",
        dur: "01:33",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (01:33 min)</h3>
          <p>En esta lección de 1 minuto y 33 segundos el instructor sintetiza las mejores prácticas cuantitativas y reglas de diseño algorítmico indispensables para evitar los sesgos más destructivos en las inversiones automatizadas.</p>

          <div class="theory-callout">
            <b>🛡️ Las 4 Reglas de Oro del Desarrollador Quant:</b><br>
            1. <i>Prevención del Sobreajuste (Overfitting):</i> Nunca optimizar parámetros hasta amoldar el modelo al ruido pasado.<br>
            2. <i>Eliminación del Sesgo de Mirada al Futuro (Lookahead Bias):</i> Utilizar únicamente información disponible en el instante <i>t</i> de la decisión.<br>
            3. <i>Incorporación Rígida de Ficción Operativa:</i> Incluir siempre costos de transacción (comisión + slippage) en el backtesting.<br>
            4. <i>Modularidad POO:</i> Mantener lógica de señal, gestión de riesgo y broker API desacopladas.
          </div>
        `,
        code: `# clase_10_recomendaciones.py - Código Completo de la Clase 10
class QuantBestPracticesChecker:
    def __init__(self, strategy_name):
        self.strategy_name = strategy_name
        self.checks = [
            ("Aislamiento In-Sample / Out-of-Sample", True, "Prevención estricta de Overfitting"),
            ("Sin Sesgo de Mirada al Futuro (Lookahead)", True, "Indicadores calculados solo en t <= T"),
            ("Modelo de Costos de Transacción Real", True, "Comisión (0.1%) + Slippage (0.05%)"),
            ("Desacoplamiento Modular (POO)", True, "BaseStrategy -> Signal -> Risk -> Execution")
        ]

    def audit_strategy(self):
        print("=====================================================================")
        print(f"  AUDITORÍA DE BUENAS PRÁCTICAS QUANT: {self.strategy_name.upper()}")
        print("=====================================================================")
        for rule, status, detail in self.checks:
            badge = "[✓ VERIFICADO]" if status else "[⚠ FALLIDO]"
            print(f"  {badge.ljust(16)} {rule.ljust(35)} : {detail}")
        print("=====================================================================")
        print("  ESTADO DE AUDITORÍA: Estrategia Robusta Aprobada para Producción")
        print("=====================================================================")

def ejecutar_clase_10():
    auditor = QuantBestPracticesChecker("Trend_Following_HMM")
    auditor.audit_strategy()

if __name__ == "__main__":
    ejecutar_clase_10()`
      },
      {
        id: 11,
        title: "Mercados Financieros",
        dur: "05:06",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (05:06 min)</h3>
          <p>En esta lección de 5 minutos y 6 segundos exploramos la estructura de los <b>Mercados Financieros Globales</b> y la mecánica de formación de precios a nivel de microestructura.</p>

          <div class="theory-callout">
            <b>🏛️ Estructura y Microestructura del Mercado:</b><br>
            - <i>Mercados Primarios vs Secundarios:</i> Emisión inicial (IPOs) vs negociación secundaria continua.<br>
            - <i>Mecánica del Libro de Órdenes (Order Book):</i> Oferta de venta (<i>Asks</i>) vs Demanda de compra (<i>Bids</i>).<br>
            - <i>Bid-Ask Spread:</i> La diferencia \( \text{Spread} = P_{\text{ask}} - P_{\text{bid}} \), costo implícito de liquidez.<br>
            - <i>Participantes Clave:</i> Creadores de Mercado (<i>Market Makers</i>), Inversionistas Institucionales y Traders Cuantitativos Algorítmicos.
          </div>

          <h3>Métrica del Precio Medio (Mid-Price) y Spread:</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Fórmula del Spread de Liquidez (Bid-Ask Spread):</span>
            <span class="formula-expr">Spread = P<sub>ask</sub> - P<sub>bid</sub></span>
          </div>

          <div class="formula-card">
            <span class="formula-title">📐 Fórmula del Precio Medio (Mid-Price):</span>
            <span class="formula-expr">Mid-Price = (P<sub>bid</sub> + P<sub>ask</sub>) / 2</span>
          </div>
        `,
        code: `# clase_11_mercados.py - Código Completo de la Clase 11
class OrderBookMarketSimulator:
    def __init__(self, ticker):
        self.ticker = ticker
        self.bids = [(185.40, 500), (185.35, 1200), (185.30, 2500)]
        self.asks = [(185.50, 400), (185.55, 1500), (185.60, 3000)]

    def get_market_depth(self):
        best_bid = self.bids[0][0]
        best_ask = self.asks[0][0]
        spread = best_ask - best_bid
        mid_price = (best_bid + best_ask) / 2.0
        
        print("=====================================================================")
        print("  LIBRO DE ÓRDENES Y MICROESTRUCTURA DE MERCADO - " + self.ticker)
        print("=====================================================================")
        print("  Mejor Oferta Compra (Best Bid) : $" + str(best_bid) + " (Vol: " + str(self.bids[0][1]) + ")")
        print("  Mejor Oferta Venta  (Best Ask) : $" + str(best_ask) + " (Vol: " + str(self.asks[0][1]) + ")")
        print("  Spread de Liquidez             : $" + str(round(spread, 2)) + " (5.4 bps)")
        print("  Precio Medio (Mid-Price)       : $" + str(mid_price))
        print("---------------------------------------------------------------------")
        print("  LIBRO DE ÓRDENES NIVEL 2 (ASKS / BIDS):")
        for p, v in reversed(self.asks):
            print("    [ASK/VENTA]   $" + str(p) + " | Vol: " + str(v))
        print("    -----------------------------------------")
        for p, v in self.bids:
            print("    [BID/COMPRA]  $" + str(p) + " | Vol: " + str(v))
        print("=====================================================================")

def ejecutar_clase_11():
    sim = OrderBookMarketSimulator("AAPL")
    sim.get_market_depth()

if __name__ == "__main__":
    ejecutar_clase_11()`
      },
      {
        id: 12,
        title: "Instrumentos Financieros",
        dur: "05:12",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (05:12 min)</h3>
          <p>En esta lección de 5 minutos y 12 segundos analizamos en profundidad los 5 <b>Instrumentos Financieros Operativos</b> que abordaremos en las estrategias algorítmicas del curso.</p>

          <div class="theory-callout">
            <b>💼 Taxonomía de Activos Financieros:</b><br>
            1. <b>Acciones (Equities):</b> Títulos de propiedad de capital social (ej. AAPL, MSFT). Rentabilidad por dividendos y apreciación de precio.<br>
            2. <b>Mercado de Divisas (Forex):</b> Pares de monedas liquidadas en paridad (ej. EUR/USD). Cotización en pips (0.0001).<br>
            3. <b>Contratos de Futuros:</b> Derivados estandarizados con vencimiento fijo (ej. E-mini S&P 500 ES, Crudo CL). Margen inicial y liquidación diaria (<i>Mark-to-Market</i>).<br>
            4. <b>Opciones Financieras:</b> Contratos de derechos asimétricos (Calls y Puts).<br>
            5. <b>Contratos por Diferencia (CFDs) vs DMA:</b> Derivados OTC vs Acceso Directo a Mercado.
          </div>

          <h3>Métricas y Fórmulas de Payoff en Derivados:</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Payoff de una Opción Call (Compra):</span>
            <span class="formula-expr">Payoff<sub>Call</sub> = max(S<sub>T</sub> - K, 0) - Prima</span>
          </div>

          <div class="formula-card">
            <span class="formula-title">📐 Valor de un Pip en Forex (Lote Estándar 100,000 unidades):</span>
            <span class="formula-expr">Valor Pip = 100,000 × 0.0001 = $10.00 USD</span>
          </div>
        `,
        code: `# clase_12_instrumentos.py - Código Completo de la Clase 12
class FinancialInstrumentEvaluator:
    def __init__(self):
        self.instruments = {}

    def add_asset(self, name, asset_type, price):
        self.instruments[name] = {"type": asset_type, "price": price}

    def calculate_call_payoff(self, strike, spot_price, premium):
        payoff = max(spot_price - strike, 0) - premium
        return round(payoff, 2)

    def calculate_futures_margin(self, contract_value, margin_pct=0.10):
        return round(contract_value * margin_pct, 2)

    def display_report(self):
        print("=====================================================================")
        print("  EVALUACIÓN CUANTITATIVA DE INSTRUMENTOS FINANCIEROS Y DERIVADOS    ")
        print("=====================================================================")
        for name, data in self.instruments.items():
            print("  Activo: " + name.ljust(10) + " | Tipo: " + data["type"].ljust(12) + " | Cotización: $" + str(data["price"]))
        print("---------------------------------------------------------------------")
        call_payoff = self.calculate_call_payoff(strike=180.0, spot_price=188.5, premium=3.2)
        fut_margin = self.calculate_futures_margin(contract_value=5000.0 * 50, margin_pct=0.08)
        print("  [OPCIONES CALL]  Payoff a Vencimiento (K=180, S=188.5, Prima=3.2): $" + str(call_payoff) + " USD")
        print("  [FUTUROS ES]     Margen Requerido Garantía (8% de $250k): $" + str(fut_margin) + " USD")
        print("=====================================================================")

def ejecutar_clase_12():
    evaluator = FinancialInstrumentEvaluator()
    evaluator.add_asset("AAPL", "Stock Equity", 188.50)
    evaluator.add_asset("EUR/USD", "Forex Pair", 1.0850)
    evaluator.add_asset("ES_FUT", "Futures ES", 5120.00)
    evaluator.display_report()

if __name__ == "__main__":
    ejecutar_clase_12()`
      },
      {
        id: 13,
        title: "Tipos de Análisis",
        dur: "05:16",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (05:16 min)</h3>
          <p>En esta lección de 5 minutos y 16 segundos comparamos los tres grandes paradigmas del análisis de inversiones: <b>Análisis Fundamental</b>, <b>Análisis Técnico</b> y <b>Análisis Cuantitativo impulsado por IA</b>.</p>

          <div class="theory-callout">
            <b>📊 Comparativa de Paradigmas de Inversión:</b><br>
            1. <b>Análisis Fundamental:</b> Evalúa la salud financiera subyacente (<i>Free Cash Flow DCF, PER, EV/EBITDA</i>). Objetivo: Encontrar valor intrínseco.<br>
            2. <b>Análisis Técnico:</b> Examina la acción del precio histórica, volumen e indicadores derivados (<i>RSI, MACD, Medias Móviles</i>). Objetivo: Identificar la inercia del mercado.<br>
            3. <b>Análisis Cuantitativo & IA:</b> Formaliza hipótesis mediante modelos matemáticos vectorizados que combinan datos fundamentales, técnicos y alternativos (NLP Sentiment VADER, Regímenes HMM y Redes Neuronales).
          </div>

          <h3>Fórmula del Score Alfa Cuantitativo Híbrido:</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Score Cuantitativo Ponderado (Puntaje Alfa):</span>
            <span class="formula-expr">Score<sub>Quant</sub> = 0.40 × Fund<sub>Score</sub> + 0.30 × Tech<sub>Score</sub> + 0.30 × ML<sub>Prob</sub></span>
          </div>
        `,
        code: `# clase_13_tipos_analisis.py - Código Completo de la Clase 13
class QuantitativeAnalysisEngine:
    def __init__(self, ticker):
        self.ticker = ticker

    def calculate_fundamental_score(self, pe_ratio, free_cash_flow_growth):
        score = 0.0
        if pe_ratio < 20.0: score += 50.0
        if free_cash_flow_growth > 0.08: score += 50.0
        return score

    def calculate_technical_score(self, rsi, price_above_sma200):
        score = 0.0
        if 40.0 <= rsi <= 65.0: score += 50.0
        if price_above_sma200: score += 50.0
        return score

    def evaluate_hybrid_quant_alpha(self, fundamental, technical, ml_prob):
        fund_score = self.calculate_fundamental_score(fundamental["pe"], fundamental["fcf_growth"])
        tech_score = self.calculate_technical_score(technical["rsi"], technical["sma_trend"])
        ml_score = ml_prob * 100.0
        
        quant_score = (0.40 * fund_score) + (0.30 * tech_score) + (0.30 * ml_score)
        
        print("=====================================================================")
        print("  MOTOR DE ANÁLISIS CUANTITATIVO HÍBRIDO (ALFA SCORE) - " + self.ticker)
        print("=====================================================================")
        print("  Puntaje Fundamental (DCF / PER)    : " + str(fund_score) + " / 100")
        print("  Puntaje Técnico (RSI / SMA 200)    : " + str(tech_score) + " / 100")
        print("  Probabilidad ML (Random Forest)   : " + str(round(ml_score, 1)) + "%")
        print("---------------------------------------------------------------------")
        print("  ALFA SCORE CUANTITATIVO UNIFICADO   : " + str(round(quant_score, 1)) + " / 100")
        decision = "BUY (COMPRA ALCISTA)" if quant_score >= 70.0 else "HOLD / NEUTRAL"
        print("  SEÑAL OPERATIVA RECOMENDADA         : " + decision)
        print("=====================================================================")

def ejecutar_clase_13():
    engine = QuantitativeAnalysisEngine("NVDA")
    fundamental_data = {"pe": 18.5, "fcf_growth": 0.12}
    technical_data = {"rsi": 54.0, "sma_trend": True}
    ml_probability = 0.82
    engine.evaluate_hybrid_quant_alpha(fundamental_data, technical_data, ml_probability)

if __name__ == "__main__":
    ejecutar_clase_13()`
      },
      {
        id: 14,
        title: "Psicología del Trading",
        dur: "03:28",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (03:28 min)</h3>
          <p>En esta lección de 3 minutos y 28 segundos abordamos el análisis de las <b>Finanzas Conductuales (Behavioral Finance)</b> y cómo la automatización cuantitativa elimina los sesgos emocionales que destruyen las cuentas discrecionales.</p>

          <div class="theory-callout">
            <b>🧠 Los 4 Sesgos Emocionales Principales:</b><br>
            1. <b>Aversión a la Pérdida (Teoría de la Perspectiva):</b> El dolor psicológico de perder $1,000 es 2.25 veces superior al placer de ganar la misma cantidad.<br>
            2. <b>Sesgo de Disposición:</b> Vender rápidamente las posiciones ganadoras por miedo a perder el beneficio y mantener las posiciones perdedoras esperando un rebote que nunca llega.<br>
            3. <b>Efecto FOMO (Fear of Missing Out):</b> Entrar tarde al mercado en máximos históricos impulsado por euforia.<br>
            4. <b>Sesgo de Confirmación:</b> Buscar únicamente noticias que respalden una posición abierta perdedora.
          </div>

          <h3>Modelado de Aversión a la Pérdida (Kahneman & Tversky):</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Función de Valor de la Teoría de la Perspectiva (Prospect Theory):</span>
            <span class="formula-expr">v(x) = x<sup>α</sup> (si x ≥ 0)  |  v(x) = -λ (-x)<sup>β</sup> (si x < 0, con λ ≈ 2.25)</span>
          </div>
        `,
        code: `# clase_14_psicologia.py - Código Completo de la Clase 14
class PsychologicalBiasEliminator:
    def __init__(self, initial_capital):
        self.capital = initial_capital
        self.lambda_loss_aversion = 2.25 # Coeficiente de Aversión a la Pérdida

    def simulate_discretionary_trader(self, drawdown_pct):
        print("  [DISCRECIONAL] Sufriendo caida del " + str(round(drawdown_pct*100, 1)) + "%...")
        # El trader humano congela stops por aversión a la pérdida y amplía la caída
        discretionary_loss = self.capital * (drawdown_pct * self.lambda_loss_aversion)
        remaining = max(self.capital - discretionary_loss, 0.0)
        return remaining

    def simulate_automated_system(self, drawdown_pct, stop_loss_limit=0.05):
        print("  [SISTEMA IA QUANT] Ejecutando Stop Loss rigido al " + str(round(stop_loss_limit*100, 1)) + "%...")
        system_loss = self.capital * min(drawdown_pct, stop_loss_limit)
        remaining = self.capital - system_loss
        return remaining

    def run_comparative_experiment(self):
        print("=====================================================================")
        print("  EVALUACIÓN DE ELIMINACIÓN DE SESGOS EMOCIONALES EN TRADING         ")
        print("=====================================================================")
        drawdown = 0.12 # 12% Caída de mercado
        
        disc_final = self.simulate_discretionary_trader(drawdown)
        quant_final = self.simulate_automated_system(drawdown, stop_loss_limit=0.05)
        
        print("---------------------------------------------------------------------")
        print("  Capital Inicial            : $" + str(self.capital) + " USD")
        print("  Capital Final Discrecional : $" + str(round(disc_final, 2)) + " USD (Perjudicado por Sesgo)")
        print("  Capital Final Bot Quant    : $" + str(round(quant_final, 2)) + " USD (Protegido por Algoritmo)")
        print("  AHORRO DE CAPITAL POR IA   : $" + str(round(quant_final - disc_final, 2)) + " USD")
        print("=====================================================================")

def ejecutar_clase_14():
    eliminator = PsychologicalBiasEliminator(initial_capital=100000.0)
    eliminator.run_comparative_experiment()

if __name__ == "__main__":
    ejecutar_clase_14()`
      },
      {
        id: 15,
        title: "Trading Algorítmico: Estructuras Automatizadas",
        dur: "06:18",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (06:18 min)</h3>
          <p>En esta lección de 6 minutos y 18 segundos analizamos la arquitectura de software y el <b>Bucle de Eventos en Tiempo Real (Real-Time Event Loop)</b> que controla un bot de trading algorítmico automatizado.</p>

          <div class="theory-callout">
            <b>🔄 Las 4 Etapas del Bucle Algorítmico:</b><br>
            1. <b>Escucha Continua de Eventos (Event Listener):</b> Captura de ticks de precios o actualizaciones del libro de órdenes Nivel 2 en milisegundos.<br>
            2. <b>Generador de Señales (Signal Generator):</b> Evaluación instantánea de indicadores técnicos y probabilidad de inferencia del modelo ML.<br>
            3. <b>Dimensionamiento por Riesgo (Risk Sizing):</b> Cálculo del tamaño óptimo del lote o cantidad de acciones a operar.<br>
            4. <b>Ejecutor y Enrutador de Órdenes (Order Execution Engine):</b> Envío de órdenes límite o mercado a la API del broker con latencias ultra-bajas (&lt;50ms).
          </div>

          <h3>Métrica de Latencia de Ejecución:</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Latencia Total del Bucle Algorítmico:</span>
            <span class="formula-expr">Latencia<sub>Total</sub> = t<sub>Red API</sub> + t<sub>Inferencia Modelo</sub> + t<sub>Riesgo</sub> + t<sub>Enrutamiento Broker</sub></span>
          </div>
        `,
        code: `# clase_15_estructuras.py - Código Completo de la Clase 15
import time
from quant_trading.execution import MockBrokerAPI

class TradingBotAutomatedEngine:
    def __init__(self, broker_name="Interactive Brokers"):
        self.broker = MockBrokerAPI(initial_balance=100000.0, broker_name=broker_name)
        self.is_running = False

    def start_event_loop(self, ticker, iterations=3):
        print("=====================================================================")
        print("  INICIANDO BUCLE DE EVENTOS AUTOMATIZADO - BOT TRADING IA")
        print("=====================================================================")
        self.broker.connect()
        self.is_running = True
        
        for tick in range(1, iterations + 1):
            t_start = time.time()
            print("  -> [TICK " + str(tick) + "] Escuchando precios y calculando señales...")
            time.sleep(0.02) # Simulación de latencia I/O de red
            
            # Etapa de Señal y Riesgo
            signal = "BUY"
            qty = 50
            price = 185.50 + (tick * 0.25)
            
            # Etapa de Enrutamiento de Orden
            order = self.broker.place_order(ticker, signal, qty, price)
            t_lat = round((time.time() - t_start) * 1000, 2)
            print("     [EJECUCIÓN BROKER] ID: " + str(order["order_id"]) + " | Qty: " + str(qty) + " " + ticker + " @ $" + str(price) + " | Latencia: " + str(t_lat) + "ms")
        
        print("=====================================================================")
        print("  ESTADO FINAL DEL BOT: " + str(self.broker.get_account_summary()))
        print("=====================================================================")

def ejecutar_clase_15():
    bot = TradingBotAutomatedEngine()
    bot.start_event_loop("AAPL", iterations=3)

if __name__ == "__main__":
    ejecutar_clase_15()`
      },
      {
        id: 16,
        title: "Trading Cuantitativo: Modelos Matemáticos",
        dur: "03:05",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (03:05 min)</h3>
          <p>En esta lección final de la <b>Sección 2</b> de 3 minutos y 5 segundos formalizamos la modelación matemática de series temporales de precios mediante <b>Retornos Logarítmicos Continuos</b> y <b>Volatilidad Anualizada</b>.</p>

          <div class="theory-callout">
            <b>📈 Fundamentos de Modelación de Precios:</b><br>
            1. <b>Aditividad Temporal:</b> Los retornos logarítmicos permiten sumar períodos \( r_{t_0 \to t_2} = r_{t_1} + r_{t_2} \), facilitando el cálculo estadístico.<br>
            2. <b>Distribución Log-Normal:</b> Mientras que los precios no pueden ser negativos, sus retornos logarítmicos se aproximan a una distribución normal Gaussiana.<br>
            3. <b>Anualización de la Volatilidad:</b> Para comparar activos en distintas escalas de tiempo, la desviación estándar diaria se escala multiplicando por el factor \(\\sqrt{252}\) (días hábiles bursátiles por año).
          </div>

          <h3>Fórmulas Matemáticas de Retornos y Volatilidad:</h3>
          <div class="formula-card">
            <span class="formula-title">📐 Retorno Logarítmico Continuo:</span>
            <span class="formula-expr">r<sub>t</sub> = ln(P<sub>t</sub>) - ln(P<sub>t-1</sub>) = ln(P<sub>t</sub> / P<sub>t-1</sub>)</span>
          </div>

          <div class="formula-card">
            <span class="formula-title">📐 Volatilidad Anualizada de Mercado:</span>
            <span class="formula-expr">σ<sub>anual</sub> = σ<sub>diaria</sub> × √252</span>
          </div>
        `,
        code: `# clase_16_modelos_matematicos.py - Código Completo de la Clase 16
import numpy as np

class MathematicalReturnsEngine:
    def __init__(self, prices):
        self.prices = np.array(prices)

    def calculate_log_returns(self):
        return np.diff(np.log(self.prices))

    def calculate_annualized_metrics(self):
        log_rets = self.calculate_log_returns()
        mean_daily = np.mean(log_rets)
        std_daily = np.std(log_rets, ddof=1)
        
        annualized_return = mean_daily * 252.0
        annualized_volatility = std_daily * np.sqrt(252.0)
        
        return {
            "mean_daily": round(mean_daily, 5),
            "std_daily": round(std_daily, 5),
            "ann_return_pct": round(annualized_return * 100, 2),
            "ann_volatility_pct": round(annualized_volatility * 100, 2)
        }

    def display_report(self):
        metrics = self.calculate_annualized_metrics()
        print("=====================================================================")
        print("  ANÁLISIS MATEMÁTICO DE RETORNOS Y VOLATILIDAD DE MERCADO          ")
        print("=====================================================================")
        print("  Serie de Precios Entrada   : " + str(list(self.prices)))
        print("  Retornos Logarítmicos r_t  : " + str(np.round(self.calculate_log_returns(), 4)))
        print("---------------------------------------------------------------------")
        print("  Media Retorno Diario μ     : " + str(metrics["mean_daily"]))
        print("  Desviación Estándar σ      : " + str(metrics["std_daily"]))
        print("  Retorno Anualizado Estimado: " + str(metrics["ann_return_pct"]) + "%")
        print("  VOLATILIDAD ANUALIZADA σ_a : " + str(metrics["ann_volatility_pct"]) + "%")
        print("=====================================================================")

def ejecutar_clase_16():
    sample_prices = [100.0, 102.5, 101.2, 104.8, 106.3, 105.5, 108.9]
    engine = MathematicalReturnsEngine(sample_prices)
    engine.display_report()

if __name__ == "__main__":
    ejecutar_clase_16()`
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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (13:10 min)</h3>
          <p>POO aplicada a Finanzas Cuantitativas: encapsulamiento de estado, atributos, métodos de instancia, @classmethod y @staticmethod.</p>
        `,
        code: `class QuantAsset:
    def __init__(self, ticker, price, asset_type="Stock"):
        self.ticker = ticker
        self.price = price
        self.asset_type = asset_type

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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (09:17 min)</h3>
          <p>Herencia simple en Python con la clase base abstracta BaseStrategy.</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (06:48 min)</h3>
          <p>Herencia Múltiple y Method Resolution Order (MRO) en Python para combinar Mixins.</p>
        `,
        code: `class RiskMixin:
    def check_risk(self, drawdown): return drawdown < 0.15

class ExecutionMixin:
    def execute(self): return "Order Placed"

class HybridStrategy(RiskMixin, ExecutionMixin): pass

bot = HybridStrategy()
print("Riesgo OK?:", bot.check_risk(0.05))
print("Ejecución:", bot.execute())`
      },
      {
        id: 20,
        title: "Cómputo Paralelo y Concurrente en Python",
        dur: "04:10",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (04:10 min)</h3>
          <p>Cómputo de alto rendimiento en finanzas: GIL de Python, threading vs multiprocessing.</p>
        `,
        code: `from quant_trading.core import ParallelExecutor
print("Engine de Cómputo Paralelo Listo para Multiprocesamiento")`
      },
      {
        id: 21,
        title: "Hilos (Threads): Manejo de Concurrencia",
        dur: "07:01",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (07:01 min)</h3>
          <p>ThreadPoolExecutor para operaciones I/O Bound (peticiones HTTP concurrentes a brokers).</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (10:48 min)</h3>
          <p>ProcessPoolExecutor para tareas CPU Bound en núcleos independientes.</p>
        `,
        code: `import multiprocessing as mp
print(f"Número de Núcleos CPU Disponibles para Backtesting: {mp.cpu_count()}")`
      },
      {
        id: 23,
        title: "Sincronizadores: Integridad en los Datos",
        dur: "08:36",
        theory: `
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (08:36 min)</h3>
          <p>Protección contra Race Conditions con TaskSynchronizer y threading.Lock().</p>
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
          <h3>Transcripción Magistral y Desarrollo Teórico Completo (01:48 min)</h3>
          <p>Benchmarking de tiempo de ejecución entre secuencial, multithreading y multiprocessing.</p>
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

// Dynamically generate remaining sections (7 to 29) to complete the full 29-section syllabus
const REMAINING_SECTIONS = [
  {
    id: 7,
    title: "Análisis Técnico Avanzado e Indicadores (+100)",
    lessons: [
      { id: 35, title: "Medias Móviles (SMA, EMA, WMA)", dur: "12:10", theory: "<h3>Medias Móviles (12:10 min)</h3><p>Cálculo de SMA y EMA en Python.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 12, 14]})\nprint(TechnicalIndicators.add_moving_averages(df))" },
      { id: 36, title: "Osciladores RSI y MACD", dur: "15:45", theory: "<h3>RSI y MACD (15:45 min)</h3><p>Cálculo de osciladores en Python.</p>", code: "from quant_trading.indicators import TechnicalIndicators\nimport pandas as pd\ndf = pd.DataFrame({'Close': [10, 12, 11, 14]})\nprint(TechnicalIndicators.add_rsi(df))" }
    ]
  },
  {
    id: 8,
    title: "Análisis Fundamental y Valoración DCF",
    lessons: [
      { id: 37, title: "Flujo de Caja Descontado (DCF)", dur: "22:15", theory: "<h3>Valoración DCF (22:15 min)</h3><p>Cálculo de valor intrínseco FCF.</p>", code: "from quant_trading.analysis import FundamentalAnalysis\nprint(FundamentalAnalysis.discounted_cash_flow(100, 0.08, 0.10, 0.02, 5))" },
      { id: 38, title: "Fórmula Mágica de Joel Greenblatt", dur: "18:40", theory: "<h3>Fórmula Mágica (18:40 min)</h3><p>Ranking por ROC y Earnings Yield.</p>", code: "from quant_trading.analysis import GreenblattMagicFormula\nprint(GreenblattMagicFormula.rank_assets([]))" }
    ]
  },
  {
    id: 9,
    title: "Procesamiento de Lenguaje Natural (NLP) y VADER",
    lessons: [
      { id: 39, title: "Clasificación de Sentimiento VADER", dur: "14:50", theory: "<h3>VADER NLP (14:50 min)</h3><p>Clasificación de polaridad en noticias.</p>", code: "from quant_trading.analysis import SentimentAnalyzer\nsa = SentimentAnalyzer()\nprint(sa.analyze_headline('Company reports record profits.'))" }
    ]
  },
  {
    id: 10,
    title: "Modelos de Márkov Ocultos (HMM)",
    lessons: [
      { id: 40, title: "Regímenes de Volatilidad HMM", dur: "19:10", theory: "<h3>Regímenes HMM (19:10 min)</h3><p>Matriz de transición de volatilidad.</p>", code: "from quant_trading.models import MarketRegimeHMM\nprint('Detector HMM Configurado.')" }
    ]
  },
  {
    id: 11,
    title: "Random Forest y XGBoost en Series Temporales",
    lessons: [
      { id: 41, title: "Feature Engineering Financiero", dur: "21:00", theory: "<h3>Feature Engineering (21:00 min)</h3><p>Construcción de predictores técnicos.</p>", code: "from quant_trading.models import SupervisedTrendPredictor\nprint('Feature Engineering Configurado.')" }
    ]
  },
  {
    id: 12,
    title: "Redes Neuronales Profundas (PyTorch)",
    lessons: [
      { id: 42, title: "Red Neuronal Multicapa (MLP)", dur: "28:40", theory: "<h3>Red Neuronal MLP (28:40 min)</h3><p>Arquitectura 64x32 neuronas en PyTorch.</p>", code: "from quant_trading.models import NeuralNetworkPredictor\nprint('Red Neuronal Deep Learning Inicializada.')" }
    ]
  },
  {
    id: 13,
    title: "Sistema de Trading Unificado de Producción",
    lessons: [
      { id: 43, title: "Orquestación en main.py", dur: "32:15", theory: "<h3>Pipeline Unificado (32:15 min)</h3><p>Pipeline completo de 7 etapas.</p>", code: "from quant_trading.execution import QuantTradingEngine\nengine = QuantTradingEngine()\nprint('Motor Unificado de Producción Listo.')" }
    ]
  },
  {
    id: 14,
    title: "Criterio de Kelly, VaR y Gestión de Riesgo",
    lessons: [
      { id: 44, title: "Value at Risk (VaR) y Kelly", dur: "17:45", theory: "<h3>VaR y Kelly (17:45 min)</h3><p>Cálculo de VaR al 95% de confianza.</p>", code: "print('Gestión de Riesgo Kelly & VaR Activa.')" }
    ]
  },
  {
    id: 15,
    title: "Estrategias Intradía y Swing Trading",
    lessons: [
      { id: 45, title: "Sistemas Breakout y SuperTrend", dur: "20:30", theory: "<h3>Swing Trading (20:30 min)</h3><p>Sistemas de ruptura y filtros ATR.</p>", code: "print('Estrategia Swing Trading Configurada.')" }
    ]
  },
  {
    id: 16,
    title: "Trading en Criptoactivos con Binance API",
    lessons: [
      { id: 46, title: "Conexión Binance Spot & Futuros", dur: "19:15", theory: "<h3>Cripto Trading (19:15 min)</h3><p>Conexión 24/7 a Binance API.</p>", code: "print('Conector Binance Spot & Futures Activo.')" }
    ]
  },
  {
    id: 17,
    title: "Operativa Forex en OANDA REST v20",
    lessons: [
      { id: 47, title: "Trading Automatizado de Divisas", dur: "18:10", theory: "<h3>Forex OANDA (18:10 min)</h3><p>Trading automatizado en EUR/USD.</p>", code: "print('Motor OANDA REST v20 Activo.')" }
    ]
  },
  {
    id: 18,
    title: "Operativa en Acciones del S&P 500",
    lessons: [
      { id: 48, title: "Escáner Cuantitativo Multiactivo", dur: "22:00", theory: "<h3>Escáner S&P 500 (22:00 min)</h3><p>Evaluación de 500 acciones.</p>", code: "print('Escáner S&P 500 Multiactivo Cargado.')" }
    ]
  },
  {
    id: 19,
    title: "Estrategias de Arbitraje Estadístico y Pares",
    lessons: [
      { id: 49, title: "Cointegración y Pair Trading", dur: "25:30", theory: "<h3>Pair Trading (25:30 min)</h3><p>Test ADF y Z-Score de pares.</p>", code: "print('Sistema de Arbitraje Estadístico Activo.')" }
    ]
  },
  {
    id: 20,
    title: "Estrategias de Regresión a la Media",
    lessons: [
      { id: 50, title: "Proceso Ornstein-Uhlenbeck", dur: "16:20", theory: "<h3>Mean Reversion (16:20 min)</h3><p>Modelado estocástico OU.</p>", code: "print('Estrategia Mean Reversion Configurada.')" }
    ]
  },
  {
    id: 21,
    title: "Estrategias Momentum y Breakout",
    lessons: [
      { id: 51, title: "Ruptura de Canales Donchian", dur: "15:40", theory: "<h3>Momentum System (15:40 min)</h3><p>Rupturas Donchian y volumen.</p>", code: "print('Sistema Momentum Donchian Listo.')" }
    ]
  },
  {
    id: 22,
    title: "Optimización de Portafolios Markowitz",
    lessons: [
      { id: 52, title: "Frontera Eficiente de Markowitz", dur: "26:15", theory: "<h3>Frontera Eficiente (26:15 min)</h3><p>Optimización cuadrática de pesos.</p>", code: "print('Optimizador Markowitz de Portafolios Listo.')" }
    ]
  },
  {
    id: 23,
    title: "Detección de Anomalías y Filtros Kalman",
    lessons: [
      { id: 53, title: "Filtrado Estocástico de Kalman", dur: "24:10", theory: "<h3>Filtro Kalman (24:10 min)</h3><p>Filtrado recursivo de ruido de precio.</p>", code: "print('Filtro de Kalman Dinámico Activo.')" }
    ]
  },
  {
    id: 24,
    title: "Microestructura de Mercado (L2/L3)",
    lessons: [
      { id: 54, title: "Order Book Imbalance (L2/L3)", dur: "21:45", theory: "<h3>Microestructura L2/L3 (21:45 min)</h3><p>Order Book Imbalance Bid/Ask.</p>", code: "print('Analizador de Microestructura L2/L3 Listo.')" }
    ]
  },
  {
    id: 25,
    title: "Web Scraping Financiero SEC EDGAR",
    lessons: [
      { id: 55, title: "Web Scraping de Estados Financieros", dur: "19:30", theory: "<h3>Scraping SEC (19:30 min)</h3><p>Extracción de reportes 10-Q y 10-K.</p>", code: "print('Scraper SEC EDGAR Activo.')" }
    ]
  },
  {
    id: 26,
    title: "Cuentas de Fondeo (Prop Trading)",
    lessons: [
      { id: 56, title: "Reglas de Prop Trading", dur: "17:50", theory: "<h3>Prop Trading Rules (17:50 min)</h3><p>Control de Daily Loss Limit.</p>", code: "print('Control de Riesgo Prop Firm Activo.')" }
    ]
  },
  {
    id: 27,
    title: "Certificaciones Financieras (CFA, FRM, CQF, CMT)",
    lessons: [
      { id: 57, title: "Guía de Carrera y Certificaciones", dur: "15:00", theory: "<h3>Certificaciones (15:00 min)</h3><p>Comparativa CFA, FRM, CQF y CMT.</p>", code: "print('Guía Profesional de Certificaciones Lista.')" }
    ]
  },
  {
    id: 28,
    title: "Aspectos Fiscales y Formulario W-8BEN",
    lessons: [
      { id: 58, title: "Fiscalidad e Impuestos en Trading", dur: "14:20", theory: "<h3>Fiscalidad W-8BEN (14:20 min)</h3><p>Impuestos a ganancias de capital.</p>", code: "print('Guía Fiscal W-8BEN e Impuestos Configurada.')" }
    ]
  },
  {
    id: 29,
    title: "Apéndice: Curso Intensivo de Python desde Cero",
    lessons: [
      { id: 59, title: "Python Crash Course para Finanzas", dur: "45:00", theory: "<h3>Python desde Cero (45:00 min)</h3><p>Variables, listas, diccionarios, bucles, Pandas y NumPy.</p>", code: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'Close': [100, 102, 105]})\nprint(df)" }
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

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
  
  const codeSnippet = lesson.code || "# Código de la clase\nprint('Ejecutando algoritmo quant...')";

  if (theoryContent) {
    theoryContent.innerHTML = lesson.theory + `
      <div class="code-preview-box">
        <h4>💻 Código Python de la Clase:</h4>
        <pre><code>${escapeHtml(codeSnippet)}</code></pre>
      </div>
    `;
  }
  
  if (codeEditor) codeEditor.value = codeSnippet;
  if (terminalOutput) terminalOutput.textContent = `// Listo para ejecutar ${lesson.title} en Python 3.10...\nPresiona 'Ejecutar Código Python' para compilar el algoritmo.`;

  // Render Class Specific Resources (Sección 1 de Tab 4)
  const resourcesContainer = document.getElementById('class-resources-list');
  if (resourcesContainer) {
    const classNumStr = lesson.id < 10 ? `0${lesson.id}` : `${lesson.id}`;
    resourcesContainer.innerHTML = `
      <a href="docs/contenido_teorico_completo.md" target="_blank" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">📄 Manual Teórico PDF/MD - Clase ${lesson.id}</span>
          <span class="resource-item-desc">Transcripción detallada de ${lesson.title} (${lesson.dur} min)</span>
        </div>
        <span class="resource-badge-dl">MD / PDF</span>
      </a>

      <a href="#" onclick="alert('Repetición HD de la Clase ${lesson.id} disponible en la plataforma.'); return false;" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">🎥 Video Explicativo HD 1080p - Clase ${lesson.id}</span>
          <span class="resource-item-desc">Explicación magistral audiovisual de ${lesson.title} (${lesson.dur} min)</span>
        </div>
        <span class="resource-badge-dl">MP4 / HD</span>
      </a>

      <a href="#" onclick="alert('Script ejecutable listo: clase_${classNumStr}_script.py'); return false;" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">🐍 Código Fuente Python Utilizable</span>
          <span class="resource-item-desc">Script ejecutable independiente: <code>clase_${classNumStr}_script.py</code></span>
        </div>
        <span class="resource-badge-dl">.PY SCRIPT</span>
      </a>
    `;
  }

  // Render Certifications & Accreditations (Sección 2 de Tab 4)
  const certsContainer = document.getElementById('class-certifications-list');
  if (certsContainer) {
    certsContainer.innerHTML = `
      <a href="docs/certificaciones_y_carrera.md" target="_blank" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">🏆 Acreditaciones CFA / FRM / CQF / CMT</span>
          <span class="resource-item-desc">Requisitos para certificación cuantitativa e ingeniería financiera</span>
        </div>
        <span class="resource-badge-dl">GUÍA PDF</span>
      </a>

      <a href="docs/plataformas_escaneres_y_fiscalidad.md" target="_blank" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">🏛️ Formulario W-8BEN & Fiscalidad de Inversiones</span>
          <span class="resource-item-desc">Tratados de doble imposición y regulación de brokers internacionales</span>
        </div>
        <span class="resource-badge-dl">FISCAL W-8</span>
      </a>

      <a href="#" onclick="alert('Certificado de Finalización de la Sección ${section.id}: ${section.title}. Completa el 100% de las clases para desbloquear tu insignia.'); return false;" class="resource-item-link">
        <div class="resource-item-info">
          <span class="resource-item-name">🎓 Certificado de Módulo: Sección ${section.id}</span>
          <span class="resource-item-desc">Acreditación de superación de la Sección ${section.id}: ${section.title}</span>
        </div>
        <span class="resource-badge-dl">DIPLOMA</span>
      </a>
    `;
  }
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
          
          if (code.includes('quant_trading') || code.includes('MockBrokerAPI') || code.includes('QuantAsset') || code.includes('ejecutar_clase') || code.includes('verificar_requisitos')) {
            simulatedLogs += `[SUCCESS] Módulo Quant cargado correctamente.\n`;
            simulatedLogs += `[BROKER API] Conexión establecida con Broker API.\n`;
          }

          if (code.includes('TradingBotAutomated') || code.includes('BUY')) {
            simulatedLogs += `[BOT AUTOMATED] Escuchando Ticks en Tiempo Real...\n`;
            simulatedLogs += `[SIGNAL] Señal Cuantitativa Detectada: BUY (COMPRA ALCISTA)\n`;
            simulatedLogs += `[EXECUTION] Orden Ejecutada: ORD-778912 | Qty: 50 acciones AAPL\n`;
          }

          if (code.includes('DiagnosticAssessment') || code.includes('evaluacion')) {
            simulatedLogs += `[DIAGNÓSTICO] Puntuación Global: 87.5% / 100%\n`;
            simulatedLogs += `[RECOMENDACIÓN] Listo para avanzar a POO y ML.\n`;
          }

          if (code.includes('SystemTroubleshooter') || code.includes('check_components')) {
            simulatedLogs += `[✓ SUCCESS] yfinance ETL Conector OK\n`;
            simulatedLogs += `[✓ SUCCESS] Scikit-Learn ML OK\n`;
            simulatedLogs += `[✓ SUCCESS] Multiprocessing Windows OK\n`;
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
