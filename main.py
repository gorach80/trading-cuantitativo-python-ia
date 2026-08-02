"""
main.py: Orquestador Principal del Sistema de Trading Cuantitativo, Ingeniería Financiera e IA.
Desarrollado por Instructor Axel Francisco Munguía Quintero.
"""

import sys
import os
import pandas as pd

from quant_trading.execution import QuantTradingEngine
from quant_trading.analysis import GreenblattMagicFormula


def main():
    print("===================================================================================")
    print("  TRADING CUANTITATIVO EN PYTHON: INGENIERÍA FINANCIERA E INTELIGENCIA ARTIFICIAL  ")
    print("  Sistema Unificado de Producción - Instructor Axel Francisco Munguía Quintero    ")
    print("===================================================================================\n")

    # 1. Instanciar Motor de Trading Unificado ($100,000 USD Capital Inicial)
    engine = QuantTradingEngine(initial_capital=100000.0, broker_name="InteractiveBrokers_API")

    # 2. Selección de Activos mediante la Fórmula Mágica de Joel Greenblatt
    print("1. SELECCIÓN DE ACTIVOS - FÓRMULA MÁGICA DE GREENBLATT (ROC + EARNINGS YIELD):")
    universe_sample = [
        {"ticker": "AAPL", "ebit": 120e9, "ev": 3000e9, "nwc": 15e9, "nfa": 40e9, "current_price": 270.0},
        {"ticker": "MSFT", "ebit": 100e9, "ev": 2800e9, "nwc": 20e9, "nfa": 50e9, "current_price": 420.0},
        {"ticker": "GOOGL", "ebit": 90e9, "ev": 2000e9, "nwc": 25e9, "nfa": 60e9, "current_price": 180.0},
        {"ticker": "NVDA", "ebit": 60e9, "ev": 2500e9, "nwc": 30e9, "nfa": 15e9, "current_price": 120.0}
    ]
    magic_df = GreenblattMagicFormula.rank_universe(universe_sample)
    print("  - Ranking Cuantitativo de Selección de Activos:")
    print(magic_df[["ticker", "earnings_yield", "roc", "final_rank"]].to_string(index=False))

    # Top Pick seleccionado por la Fórmula Mágica
    top_ticker = magic_df.iloc[0]["ticker"]
    print(f"\n  -> Top Asset Seleccionado para Operación: {top_ticker}")

    # 3. Ejecutar Pipeline Unificado de Trading Automatizado (Datos -> NLP -> HMM -> ML -> Broker API)
    print(f"\n2. EJECUCIÓN DEL PIPELINE UNIFICADO EN VIVO SOBRE {top_ticker}:")
    headlines = [
        f"{top_ticker} announces record revenue and surge in profit margins",
        f"Institutional investors upgrade {top_ticker} rating to outperform"
    ]
    
    pipeline_res = engine.run_full_pipeline(top_ticker, start_date="2020-01-01", headlines=headlines)

    print(f"  - Activo: {pipeline_res['ticker']}")
    print(f"  - Precio Actual de Mercado: ${pipeline_res['current_price']} USD")
    print(f"  - Sentimiento de Mercado (NLP VADER): {pipeline_res['sentiment_summary']}")
    print(f"  - Régimen de Mercado HMM (ML No Supervisado): {pipeline_res['current_market_regime']}")
    print(f"  - Precisión de Modelo ML Supervisado (Random Forest): {pipeline_res['ml_accuracy_out_of_sample']}%")
    print(f"  - Señal Cuantitativa Unificada Generada: {pipeline_res['unified_signal']}")

    # 4. Estado de Ejecución de la Orden en Broker API
    print("\n3. ESTADO DE ORDEN Y EJECUCIÓN EN BROKER API:")
    executed_order = pipeline_res["executed_order"]
    if executed_order and executed_order.get("status") == "FILLED":
        print(f"  - ID de Orden: {executed_order['order_id']}")
        print(f"  - Acción: {executed_order['side']} {executed_order['qty']} acciones de {executed_order['ticker']} a ${executed_order['price']} USD")
        print(f"  - Comisión Cobrada por Broker: ${executed_order['commission']} USD")
        print(f"  - Timestamp de Transacción: {executed_order['timestamp']}")
    else:
        print("  - Sin orden ejecutada en esta sesión (Condiciones de riesgo activadas o posición mantenida).")

    # 5. Resumen Consolidado de Cuenta y Portafolio
    print("\n4. RESUMEN CONSOLIDADO DE CUENTA DE INVERSIÓN:")
    account = pipeline_res["account_summary"]
    print(f"  - Broker Conectado: {account['broker']}")
    print(f"  - Saldo en Efectivo (Cash Balance): ${account['cash_balance']:,.2f} USD")
    print(f"  - Valor de Posiciones Activas (Holdings): ${account['holdings_value']:,.2f} USD")
    print(f"  - Valor Total del Portafolio (Total Equity): ${account['total_equity']:,.2f} USD")
    print("===================================================================================\n")


if __name__ == "__main__":
    main()
