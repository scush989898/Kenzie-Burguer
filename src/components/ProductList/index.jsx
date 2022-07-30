import React from "react";
import "./style.css";
import Product from "./Product";

export default function ProductList({
  products,
  filtro,
  currentSale,
  setCurrentSale,
}) {
  function populaTela(listaProdutos, filter = "Todos") {
    const resultado = listaProdutos.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          listaProdutos={listaProdutos}
        />
      );
    });

    if (filter === "Todos") return resultado;
    const listaFiltrada = resultado.filter((elem) => {
      return (
        elem.props.product.name.toLowerCase().includes(filter) ||
        elem.props.product.category.toLowerCase().includes(filter)
      );
    });
    return listaFiltrada;
  }
  return (
    <ul className="containerProductList">
      {filtro === "" ? populaTela(products) : populaTela(products, filtro)}
    </ul>
  );
}
