import React from "react";
import "./style.css";

export default function Results({ filtro }) {
  return (
    <div className="containerResults">
      <p>
        Resultados para:
        <span>{filtro.charAt(0).toUpperCase() + filtro.slice(1)}</span>
      </p>
    </div>
  );
}
