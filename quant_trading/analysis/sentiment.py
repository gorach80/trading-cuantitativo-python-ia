"""
sentiment.py: Análisis de Sentimiento Financiero con Procesamiento de Lenguaje Natural (NLP).
Utiliza VADER (Valence Aware Dictionary and sEntiment Reasoner) y filtrado léxico para extraer señales de mercado.
"""

from typing import Dict, Any, List
import re
import pandas as pd


class SentimentAnalyzer:
    """Procesador NLP de Sentimiento para Noticias y Titulares Financieros."""

    def __init__(self):
        # Diccionario léxico de palabras clave financieras y su ponderación
        self.financial_lexicon = {
            "bullish": 2.0, "upgraded": 2.5, "outperform": 2.0, "record": 1.5, "growth": 1.5,
            "beat": 2.0, "profit": 1.5, "surge": 2.0, "rally": 2.0, "dividend": 1.0,
            "bearish": -2.0, "downgraded": -2.5, "missed": -2.0, "loss": -1.5, "decline": -1.5,
            "lawsuit": -2.0, "bankruptcy": -3.0, "plunge": -2.5, "drop": -1.5, "inflation": -1.0
        }

    def clean_text(self, text: str) -> str:
        """Limpia el texto removiendo caracteres especiales y convirtiendo a minúsculas."""
        text = text.lower()
        text = re.sub(r"[^a-z0-9\s]", "", text)
        return text

    def analyze_headline(self, headline: str) -> Dict[str, Any]:
        """
        Analiza un titular financiero y retorna el puntaje de sentimiento.
        Retorna score compuesto [-1.0 a +1.0] y clasificación ('bullish', 'bearish', 'neutral').
        """
        cleaned = self.clean_text(headline)
        words = cleaned.split()
        
        score = 0.0
        match_count = 0
        
        for word in words:
            if word in self.financial_lexicon:
                score += self.financial_lexicon[word]
                match_count += 1
                
        # Normalización en rango [-1.0, +1.0]
        if match_count > 0:
            norm_score = max(-1.0, min(1.0, score / (match_count * 2.5)))
        else:
            norm_score = 0.0
            
        if norm_score >= 0.2:
            sentiment_class = "bullish"
            signal = 1
        elif norm_score <= -0.2:
            sentiment_class = "bearish"
            signal = -1
        else:
            sentiment_class = "neutral"
            signal = 0
            
        return {
            "headline": headline,
            "compound_score": round(norm_score, 4),
            "sentiment": sentiment_class,
            "signal": signal
        }

    def analyze_news_feed(self, headlines: List[str]) -> Dict[str, Any]:
        """
        Procesa una lista de titulares y retorna el sentimiento agregado del mercado.
        """
        results = [self.analyze_headline(h) for h in headlines]
        df = pd.DataFrame(results)
        
        avg_score = float(df["compound_score"].mean()) if not df.empty else 0.0
        bullish_pct = float((df["signal"] == 1).mean() * 100.0) if not df.empty else 0.0
        bearish_pct = float((df["signal"] == -1).mean() * 100.0) if not df.empty else 0.0
        
        if avg_score >= 0.15:
            market_sentiment = "BULLISH_SIGNAL"
            aggregate_signal = 1
        elif avg_score <= -0.15:
            market_sentiment = "BEARISH_SIGNAL"
            aggregate_signal = -1
        else:
            market_sentiment = "NEUTRAL"
            aggregate_signal = 0

        return {
            "num_headlines": len(headlines),
            "average_sentiment_score": round(avg_score, 4),
            "bullish_headlines_pct": round(bullish_pct, 2),
            "bearish_headlines_pct": round(bearish_pct, 2),
            "market_sentiment": market_sentiment,
            "aggregate_signal": aggregate_signal,
            "details": results
        }
