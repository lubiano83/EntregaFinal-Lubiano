/* Navbar */

import { useState, useEffect } from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget';
import Carrito from './Carrito';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [categoria, setCategoria] = useState(`Todos`);

    const CERRAR_NAVBAR = () => {
        setIsNavbarOpen(false);
    }; 

    const ABRIR_NAVBAR = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }; 

    const MANEJADOR_CATEGORIA = (categoria) => {
        setCategoria(categoria);
        CERRAR_NAVBAR(); // Cierra el navbar después de seleccionar una categoría
    };

    useEffect(() => {
        document.title = `Padel Store, ${categoria}`;
    }, [categoria]);

    return (
        <header className="header">
          <div className="contenedor_navbar-logo">
              <nav className="navbar">
                  <div className="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation" onClick={ABRIR_NAVBAR}>
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                          <ul className="navbar-nav">
                              <li className={`nav-item ${categoria === 'Todos' ? 'active' : ''}`}>
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA(`Todos`)}>todos</button>
                              </li>
                              <li className={`nav-item ${categoria === 'Pelotas' ? 'active' : ''}`}>
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA("Pelotas")}>pelotas</button>
                              </li>
                              <li className={`nav-item ${categoria === 'Grips' ? 'active' : ''}`} >
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA("Grips")}>grips</button>
                              </li>
                              <li className={`nav-item ${categoria === 'Calcetines' ? 'active' : ''}`}>
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA("Calcetines")}>Calcetines</button>
                              </li>
                              <li className={`nav-item ${categoria === 'Protectores' ? 'active' : ''}`}>
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA("Protectores")}>protectores</button>
                              </li>
                              <li className={`nav-item ${categoria === 'Palas' ? 'active' : ''}`}>
                                  <button className="nav-link" onClick={() => MANEJADOR_CATEGORIA("Palas")}>palas</button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <Logo />
            </div>
          <CartWidget/>
          <Carrito/>
        </header>
    )
}; export default Navbar