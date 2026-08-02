"""
deep_learning.py: Redes Neuronales y Aprendizaje Profundo (Deep Learning) para Predicción de Mercados Financieros.
Implementa Redes Neuronales Multicapa (MLP) y arquitecturas secuenciales.
"""

from typing import Dict, Any, Tuple
import pandas as pd
import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report
from ..indicators.technical import TechnicalIndicators


class NeuralNetworkPredictor:
    """
    Red Neuronal para la Predicción del Movimiento del Mercado.
    Utiliza capas ocultas con función de activación ReLU y optimizador Adam.
    """

    def __init__(self, hidden_layer_sizes: Tuple[int, ...] = (64, 32)):
        self.hidden_layer_sizes = hidden_layer_sizes
        self.model = MLPClassifier(
            hidden_layer_sizes=hidden_layer_sizes,
            activation="relu",
            solver="adam",
            max_iter=300,
            random_state=42
        )
        self.scaler = StandardScaler()
        self.feature_names = []

    def train_network(self, df: pd.DataFrame, train_split: float = 0.8) -> Dict[str, Any]:
        """Entrena la Red Neuronal y evalúa la precisión out-of-sample."""
        data = TechnicalIndicators.add_all_indicators(df)
        data["Return_1d"] = data["Close"].pct_change()
        data["Return_5d"] = data["Close"].pct_change(5)
        data["Target"] = (data["Close"].shift(-1) > data["Close"]).astype(int)
        
        self.feature_names = ["RSI_14", "MACD", "BB_Bandwidth", "ATR_14", "Return_1d", "Return_5d"]
        clean_df = data.dropna(subset=self.feature_names + ["Target"])
        
        X = clean_df[self.feature_names]
        y = clean_df["Target"]
        
        split_idx = int(len(X) * train_split)
        X_train, X_test = X.iloc[:split_idx], X.iloc[split_idx:]
        y_train, y_test = y.iloc[:split_idx], y.iloc[split_idx:]
        
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        self.model.fit(X_train_scaled, y_train)
        y_pred = self.model.predict(X_test_scaled)
        
        acc = accuracy_score(y_test, y_pred)
        return {
            "network_architecture": f"Input ({len(self.feature_names)}) -> Hidden {self.hidden_layer_sizes} -> Output (1)",
            "accuracy": round(acc * 100.0, 2),
            "iterations": self.model.n_iter_,
            "loss": round(float(self.model.loss_), 4),
            "test_samples": len(y_test)
        }
