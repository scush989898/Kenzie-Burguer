import React from "react";
import "./style.css";

export default function CartEmpty() {
  return (
    <div className="cartEmpty">
      <h3>Sua sacola está vazia</h3>
      <h4>Adicione Itens</h4>
    </div>
  );
}
