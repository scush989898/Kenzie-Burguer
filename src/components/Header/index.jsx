import React from "react";
import "./style.css";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

export default function Header({ setFiltro }) {
  return (
    <div className="containerHeader">
      <div className="mainHeader">
        <Logo />
        <InputSearch setFiltro={setFiltro} />
      </div>
    </div>
  );
}
