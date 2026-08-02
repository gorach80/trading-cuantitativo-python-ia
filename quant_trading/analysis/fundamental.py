"""
fundamental.py: Análisis Fundamental, Value Investing y Modelos de Valoración.
Implementa Valor Intrínseco (DCF), Fórmula Mágica de Joel Greenblatt (ROC + Earnings Yield) y Piotroski F-Score.
"""

from typing import Dict, Any, List
import pandas as pd
import numpy as np


class FundamentalAnalysis:
    """Calculadora de Valoración Fundamental y Salud Financiera."""

    @staticmethod
    def dcf_intrinsic_value(
        free_cash_flow: float,
        growth_rate_5y: float = 0.08,     # 8% crecimiento anual esperado FCF
        terminal_growth_rate: float = 0.025, # 2.5% crecimiento perpetuo
        wacc: float = 0.09,                # 9% Costo Promedio Ponderado de Capital
        shares_outstanding: float = 1.0e9,
        net_debt: float = 0.0
    ) -> Dict[str, float]:
        """
        Calcula el Valor Intrínseco por acción mediante Flujo de Caja Descontado (DCF).
        """
        fcf_projections = []
        curr_fcf = free_cash_flow
        
        # 1. Proyección de FCF a 5 años
        for year in range(1, 6):
            curr_fcf *= (1 + growth_rate_5y)
            discounted_fcf = curr_fcf / ((1 + wacc) ** year)
            fcf_projections.append(discounted_fcf)
            
        pv_fcf = sum(fcf_projections)
        
        # 2. Valor Terminal (Gordon Growth Model)
        terminal_value = (curr_fcf * (1 + terminal_growth_rate)) / (wacc - terminal_growth_rate)
        pv_terminal_value = terminal_value / ((1 + wacc) ** 5)
        
        # 3. Enterprise Value & Equity Value
        enterprise_value = pv_fcf + pv_terminal_value
        equity_value = enterprise_value - net_debt
        intrinsic_value_per_share = equity_value / shares_outstanding
        
        return {
            "pv_5y_fcf": round(pv_fcf, 2),
            "pv_terminal_value": round(pv_terminal_value, 2),
            "enterprise_value": round(enterprise_value, 2),
            "equity_value": round(equity_value, 2),
            "intrinsic_value_per_share": round(intrinsic_value_per_share, 2)
        }

    @staticmethod
    def piotroski_f_score(fundamental_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Calcula el Piotroski F-Score (Puntaje de 0 a 9 sobre salud financiera).
        """
        score = 0
        checks = {}

        # 1. Rentabilidad (ROA positivo, CFO positivo, Delta ROA > 0, Accruals)
        roa = fundamental_data.get("roa", 0)
        cfo = fundamental_data.get("cfo", 0)
        delta_roa = fundamental_data.get("delta_roa", 0)
        accrual = cfo > roa

        checks["roa_positive"] = 1 if roa > 0 else 0
        checks["cfo_positive"] = 1 if cfo > 0 else 0
        checks["delta_roa_positive"] = 1 if delta_roa > 0 else 0
        checks["cfo_gt_roa"] = 1 if accrual else 0

        # 2. Apalancamiento y Liquidez (Delta Leverage < 0, Delta Liquidity > 0, No new shares)
        delta_leverage = fundamental_data.get("delta_leverage", 0)
        delta_liquidity = fundamental_data.get("delta_liquidity", 0)
        no_new_shares = fundamental_data.get("no_new_shares", True)

        checks["leverage_decreased"] = 1 if delta_leverage < 0 else 0
        checks["liquidity_increased"] = 1 if delta_liquidity > 0 else 0
        checks["no_dilution"] = 1 if no_new_shares else 0

        # 3. Eficiencia Operativa (Delta Margin > 0, Delta Asset Turnover > 0)
        delta_margin = fundamental_data.get("delta_margin", 0)
        delta_asset_turnover = fundamental_data.get("delta_asset_turnover", 0)

        checks["margin_improved"] = 1 if delta_margin > 0 else 0
        checks["asset_turnover_improved"] = 1 if delta_asset_turnover > 0 else 0

        f_score = sum(checks.values())
        return {
            "f_score": f_score,
            "max_score": 9,
            "financial_health": "Fuerte (Value Target)" if f_score >= 7 else ("Neutral" if f_score >= 4 else "Débil"),
            "details": checks
        }


class GreenblattMagicFormula:
    """
    Implementación de la Fórmula Mágica de Joel Greenblatt.
    Combina Earnings Yield (Rendimiento de Beneficios) y Return on Capital (ROC).
    """

    @staticmethod
    def rank_universe(stocks_data: List[Dict[str, Any]]) -> pd.DataFrame:
        """
        Ranking cuantitativo del universo de acciones.
        stocks_data: Lista de dicts con keys: 'ticker', 'ebit', 'ev', 'nwc', 'nfa', 'current_price'.
        """
        records = []
        for stock in stocks_data:
            ebit = stock["ebit"]
            ev = stock["ev"]
            nwc = stock["nwc"]  # Net Working Capital
            nfa = stock["nfa"]  # Net Fixed Assets
            capital_employed = nwc + nfa
            
            earnings_yield = ebit / ev if ev > 0 else np.nan
            roc = ebit / capital_employed if capital_employed > 0 else np.nan
            
            records.append({
                "ticker": stock["ticker"],
                "current_price": stock.get("current_price", 0.0),
                "earnings_yield": earnings_yield,
                "roc": roc
            })
            
        df = pd.DataFrame(records).dropna()
        
        # Ranking (1 = Mayor EY / ROC)
        df["ey_rank"] = df["earnings_yield"].rank(ascending=False)
        df["roc_rank"] = df["roc"].rank(ascending=False)
        df["magic_score"] = df["ey_rank"] + df["roc_rank"]
        
        # Ranking Final
        df["final_rank"] = df["magic_score"].rank(ascending=True)
        return df.sort_values(by="final_rank").reset_index(drop=True)
