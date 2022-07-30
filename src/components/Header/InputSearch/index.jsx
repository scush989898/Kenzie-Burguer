import { useRef } from "react";
import "./style.css";

export default function InputSearch({ setFiltro }) {
  const inputRef = useRef(null);

  function retornaValorPesquisa(event) {
    event.preventDefault();
    setFiltro(inputRef.current.value.toLowerCase());
  }
  return (
    <form className="container_Input">
      <input
        className="input_input"
        type="text"
        placeholder="Digitar Pesquisa"
        required
        ref={inputRef}
      />
      <button
        type="submit"
        className="input_button"
        onClick={(event) => retornaValorPesquisa(event)}
      >
        Pesquisar
      </button>
    </form>
  );
}
