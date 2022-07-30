import React from "react";
import "./style.css";

export default function CartTotal({ setCurrentSale, cartTotal }) {
  return (
    <div className="total">
      <div className="preco">
        <span className="preco_total_titulo">Total</span>
        <span className="preco_total_valor">
          R$ {cartTotal.toFixed(2).replace(".", ",")}
        </span>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </div>
  );
}
