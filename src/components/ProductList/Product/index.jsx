import React from "react";
import "./style.css";

export default function Product({
  product,
  currentSale,
  setCurrentSale,
  listaProdutos,
}) {
  function adicionaItemCarrinho(event) {
    event.preventDefault();
    const produtoAdd = listaProdutos.find((elem) => {
      return elem.id === Number(event.target.id);
    });

    if (currentSale.indexOf(produtoAdd) === -1) {
      setCurrentSale([...currentSale, produtoAdd]);
    } else {
      const index = currentSale.indexOf(produtoAdd);
      currentSale[index].quantity += 1;
      setCurrentSale([...currentSale]);
    }
  }

  return (
    <li className="containerProduct">
      <div className="productimg">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="productMain">
        <h3> {product.name}</h3>
        <h5>{product.category}</h5>
        <h6>R$ {product.price.toFixed(2)}</h6>
        <button
          id={product.id}
          onClick={(event) => adicionaItemCarrinho(event)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
