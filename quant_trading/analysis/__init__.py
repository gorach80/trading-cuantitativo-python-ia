"""
Módulo Analysis: Análisis Fundamental (Value Investing, DCF, Fórmula Mágica) y Análisis de Sentimiento NLP (VADER).
"""

from .fundamental import FundamentalAnalysis, GreenblattMagicFormula
from .sentiment import SentimentAnalyzer

__all__ = ["FundamentalAnalysis", "GreenblattMagicFormula", "SentimentAnalyzer"]
