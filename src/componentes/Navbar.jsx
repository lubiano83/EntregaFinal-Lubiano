/* Navbar.js */

import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Dropdown from "./Dropdown";

const Navbar = () => {

  return (
    <header id="Navbar">
      <div className="header__contenedor">
        <Dropdown />
        <Logo />
      </div>
      <CartWidget />
    </header>
  );
}; export default Navbar;
