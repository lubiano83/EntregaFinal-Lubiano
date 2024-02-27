/* Navbar.js */

import { useState, useEffect } from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Carrito from "./Carrito";
import Dropdown from "./Dropdown";

const Navbar = ({ categoriaTitulo }) => {
  const [categoria, setCategoria] = useState("Todos");

  const MANEJADOR_CATEGORIA = (categoria) => {
    setCategoria(categoria);
    categoriaTitulo(categoria);
  };

  useEffect(() => {
    document.title = `Padel Store, ${categoria}`;
  }, [categoria]);

  return (
    <header className="header">
      <div className="contenedor_navbar-logo">
        <Dropdown handleClick={MANEJADOR_CATEGORIA} />
        <Logo />
      </div>
      <CartWidget />
      <Carrito />
    </header>
  );
}; export default Navbar;
