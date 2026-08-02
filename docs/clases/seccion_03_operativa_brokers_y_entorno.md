# Sección 3: Operativa de Mercado, Brokers, Gestión de Órdenes y Entorno Anaconda

**Instructor:** Axel Francisco Munguía Quintero  
**Clases:** 17 a 38 (~2.5 horas de contenido)

---

## 📽️ Clase 17: Forex Trading: Compra y Venta de Divisas (4:50)
- **Concepto:** Operatoria en el mercado de divisas por pares (ej. EUR/USD, GBP/USD).
- **Mecanismos:** Pips, apalancamiento, precio Bid/Ask y cálculo de spread.

## 📽️ Clase 18: Day Trading: Operaciones Intradía (3:24)
- **Concepto:** Apertura y cierre de posiciones dentro de la misma sesión bursátil sin sobrepasar el overnight.
- **Enfoque Cuantitativo:** Control de comisiones y ejecución mediante algoritmos de alta frecuencia.

## 📽️ Clase 19: Swing Trading: Operaciones de Corto-Mediano Plazo (1:21)
- **Concepto:** Posiciones mantenidas entre varios días a varias semanas para capturar ciclos de precio.
- **Enfoque Cuantitativo:** Indicadores de Momentum y filtros de tendencia (EMA 20/50).

## 📽️ Clase 20: Long-Term Trading: Operaciones a Largo Plazo (1:56)
- **Concepto:** Inversiones sostenidas por meses o años basadas en factores fundamentales y macrotendencias.

## 📽️ Clase 21: Brokers: Intermediarios Financieros (6:37)
- **Criterios de Selección:** Regulación (SEC, FCA, FINRA), comisiones, apalancamiento y conectividad API REST/WebSockets.

## 📽️ Clase 22: CFDs vs DMA: Tipos de Operativa (4:16)
- **CFDs (Contratos por Diferencia):** Operativa sintética contra el broker.
- **DMA (Direct Market Access):** Enrutamiento directo al libro de órdenes del mercado real.

## 📽️ Clase 23: Tipos de Órdenes: Market y Limit (3:22)
- **Market Order:** Ejecución inmediata al mejor precio disponible.
- **Limit Order:** Orden condicionada a ejecutarse únicamente a un precio específico o mejor.

## 📽️ Clase 24: Take Profit y Stop Loss (2:21)
- **Take Profit:** Cierre automático para consolidar ganancias al alcanzar la meta.
- **Stop Loss:** Corte automático de pérdidas para proteger el capital.

## 📽️ Clase 25: Costos de las Operaciones: Tasas y Tarifas (2:45)
- **Costos Reales:** Spreads, comisiones fijas/porcentuales, swap nocturno y deslizamiento (slippage).

## 📽️ Clase 26-28: Psicología, Disciplina y Resiliencia del Trader (7:36)
- **Mentalidad Quant:** Basarse en datos probados en lugar de corazonadas emocionales.

## 📽️ Clase 29-33: Instalación de Anaconda, Entornos Virtuales y Librerías (25:22)
- **Instalación:** Configuración de Anaconda Navigator y Python 3.10+.
- **Entornos Virtuales:**
  ```bash
  conda create -n quant_env python=3.10
  conda activate quant_env
  pip install pandas numpy matplotlib yfinance scikit-learn
  ```
