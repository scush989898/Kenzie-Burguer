import React from "react";
import "./style.css";

export default function CartProduct({ product, currentSale, setCurrentSale }) {
  function removeCarrinho(event) {
    const id = Number(event.target.id);

    setCurrentSale(
      currentSale.filter((elem) => {
        if (elem.id === id) elem.quantity = 1;
        return elem.id !== id;
      })
    );
  }
  return (
    <li className="cart_product">
      <div className="div_img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="info_cart_product">
        <h4>{product.name}</h4>
        <h5>{product.category}</h5>
        <h6>Quantidade: {product.quantity}</h6>
      </div>
      <div className="remove_product">
        <button id={product.id} onClick={(event) => removeCarrinho(event)}>
          Remover
        </button>
      </div>
    </li>
  );
}
