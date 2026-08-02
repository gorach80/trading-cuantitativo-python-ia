"""
ml_models.py: Modelos de Machine Learning No Supervisado (Regímenes de Mercado HMM) y Supervisado (Predicción de Tendencia).
"""

from typing import Dict, Any, Tuple
import pandas as pd
import numpy as np
from sklearn.mixture import GaussianMixture
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from ..indicators.technical import TechnicalIndicators


class MarketRegimeHMM:
    """
    Modelo de Márkov Oculto / Gaussian Mixture Model para la Detección de Regímenes Ocultos de Mercado.
    Clasifica los estados del mercado (e.g. Régimen 0: Alcista/Baja Volatilidad vs Régimen 1: Bajista/Alta Volatilidad).
    """

    def __init__(self, n_regimes: int = 2):
        self.n_regimes = n_regimes
        self.model = GaussianMixture(n_components=n_regimes, covariance_type="full", random_state=42)
        self.scaler = StandardScaler()

    def fit_predict(self, df: pd.DataFrame) -> pd.DataFrame:
        """
        Entrena el modelo no supervisado sobre retornos y volatilidad (ATR) para predecir regímenes ocultos.
        """
        data = df.copy()
        if "Log_Return" not in data.columns:
            data["Log_Return"] = np.log(data["Close"] / data["Close"].shift(1))
            
        data["ATR_14"] = TechnicalIndicators.atr(data)
        data_clean = data[["Log_Return", "ATR_14"]].dropna()
        
        scaled_features = self.scaler.fit_transform(data_clean)
        regimes = self.model.fit_predict(scaled_features)
        
        data.loc[data_clean.index, "Market_Regime"] = regimes
        data["Market_Regime"] = data["Market_Regime"].ffill()
        
        return data


class SupervisedTrendPredictor:
    """
    Modelo de Machine Learning Supervisado (Random Forest / Ensemble Classifier)
    para predecir la dirección del mercado en la siguiente sesión (1: Alcista, 0: Bajista).
    """

    def __init__(self, n_estimators: int = 100):
        self.n_estimators = n_estimators
        self.model = RandomForestClassifier(n_estimators=n_estimators, max_depth=5, random_state=42)
        self.scaler = StandardScaler()
        self.feature_names = []

    def prepare_features(self, df: pd.DataFrame) -> Tuple[pd.DataFrame, pd.Series]:
        """Genera features técnicas y la variable objetivo (Target: Dirección de t+1)."""
        data = TechnicalIndicators.add_all_indicators(df)
        data["Return_1d"] = data["Close"].pct_change()
        data["Return_5d"] = data["Close"].pct_change(5)
        
        # Variable Objetivo: 1 si el precio de mañana es superior al precio de hoy
        data["Target"] = (data["Close"].shift(-1) > data["Close"]).astype(int)
        
        self.feature_names = ["RSI_14", "MACD", "BB_Bandwidth", "ATR_14", "Return_1d", "Return_5d"]
        clean_df = data.dropna(subset=self.feature_names + ["Target"])
        
        X = clean_df[self.feature_names]
        y = clean_df["Target"]
        return X, y

    def train_and_evaluate(self, df: pd.DataFrame, train_split: float = 0.8) -> Dict[str, Any]:
        """
        Divide en Train/Test sin solapamiento temporal (Out-of-Sample evaluation) y evalúa métricas.
        """
        X, y = self.prepare_features(df)
        split_idx = int(len(X) * train_split)
        
        X_train, X_test = X.iloc[:split_idx], X.iloc[split_idx:]
        y_train, y_test = y.iloc[:split_idx], y.iloc[split_idx:]
        
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        self.model.fit(X_train_scaled, y_train)
        y_pred = self.model.predict(X_test_scaled)
        
        feature_importance = dict(zip(self.feature_names, [round(x, 4) for x in self.model.feature_importances_]))
        
        return {
            "accuracy": round(accuracy_score(y_test, y_pred) * 100.0, 2),
            "precision": round(precision_score(y_test, y_pred, zero_division=0) * 100.0, 2),
            "recall": round(recall_score(y_test, y_pred, zero_division=0) * 100.0, 2),
            "f1_score": round(f1_score(y_test, y_pred, zero_division=0) * 100.0, 2),
            "feature_importance": feature_importance,
            "test_samples": len(y_test)
        }
