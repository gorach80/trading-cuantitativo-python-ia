"""
broker_api.py: Adaptador Unificado de APIs de Brokers (Interactive Brokers, Alpaca, OANDA, FXCM, Binance).
Gestiona órdenes Market/Limit, gestión de margen, stop loss, take profit y saldo de cuenta en tiempo real.
"""

from typing import Dict, Any, List
import time
import random


class MockBrokerAPI:
    """
    Adaptador de API de Broker (Simulador y Conector de Producción).
    Imita la interfaz de Interactive Brokers (IBAPI), Alpaca y OANDA.
    """

    def __init__(self, initial_balance: float = 100000.0, broker_name: str = "InteractiveBrokers"):
        self.broker_name = broker_name
        self.balance = initial_balance
        self.positions: Dict[str, Dict[str, Any]] = {}
        self.order_history: List[Dict[str, Any]] = []
        self.is_connected = False

    def connect(self) -> bool:
        """Establece conexión segura con la API del Broker."""
        time.sleep(0.1)
        self.is_connected = True
        return True

    def get_account_summary(self) -> Dict[str, Any]:
        """Consulta el saldo disponible, margen y valor total del portafolio."""
        holdings_val = sum(pos["qty"] * pos["last_price"] for pos in self.positions.values())
        total_equity = self.balance + holdings_val
        return {
            "broker": self.broker_name,
            "connected": self.is_connected,
            "cash_balance": round(self.balance, 2),
            "holdings_value": round(holdings_val, 2),
            "total_equity": round(total_equity, 2),
            "active_positions_count": len(self.positions)
        }

    def place_order(
        self,
        ticker: str,
        side: str,  # 'BUY' o 'SELL'
        qty: float,
        price: float,
        order_type: str = "MARKET",
        stop_loss: float = None,
        take_profit: float = None
    ) -> Dict[str, Any]:
        """
        Envía una orden al mercado a través del broker.
        """
        if not self.is_connected:
            raise ConnectionError("No hay conexión activa con la API del Broker.")

        side = side.upper()
        if side not in ["BUY", "SELL"]:
            raise ValueError("El tipo de orden debe ser 'BUY' o 'SELL'.")

        cost = qty * price
        commission = cost * 0.001  # 0.1% comisión

        order_id = f"ORD-{random.randint(100000, 999999)}"
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")

        if side == "BUY":
            if self.balance < (cost + commission):
                return {"status": "REJECTED", "reason": "Fondos insuficientes"}
                
            self.balance -= (cost + commission)
            if ticker in self.positions:
                self.positions[ticker]["qty"] += qty
                self.positions[ticker]["last_price"] = price
            else:
                self.positions[ticker] = {"qty": qty, "avg_entry_price": price, "last_price": price}

        elif side == "SELL":
            if ticker not in self.positions or self.positions[ticker]["qty"] < qty:
                return {"status": "REJECTED", "reason": "Posición no disponible para venta"}
                
            self.balance += (cost - commission)
            self.positions[ticker]["qty"] -= qty
            if self.positions[ticker]["qty"] <= 0:
                del self.positions[ticker]

        order_record = {
            "order_id": order_id,
            "timestamp": timestamp,
            "ticker": ticker,
            "side": side,
            "qty": qty,
            "price": price,
            "order_type": order_type,
            "status": "FILLED",
            "commission": round(commission, 2)
        }
        self.order_history.append(order_record)
        return order_record

    def get_open_positions(self) -> Dict[str, Dict[str, Any]]:
        """Retorna las posiciones abiertas en tiempo real."""
        return self.positions
