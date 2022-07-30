import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Results from "./components/Results";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        response.map((elem) => (elem.quantity = 1));
        return response;
      })
      .then((response) => setProducts(response))
      .catch((erro) => console.error(erro));
  }, []);

  return (
    <div className="App">
      <Header setFiltro={setFiltro} />
      <div className="container_main">
        <div className="sectionProducts">
          {filtro !== "" && <Results filtro={filtro} />}
          <ProductList
            products={products}
            filtro={filtro}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
