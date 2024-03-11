/* Checkout */

import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section id="Checkout">
        <Titulo label="Ingrese sus Datos:"/>
          <div className="barra">
            <label htmlFor="">Nombre</label>
            <input type="text" required placeholder="Coloca tu Nombre"/>
          </div>
          <div className="barra">
            <label htmlFor="">Mail</label>
            <input type="mail" required placeholder="example@mail.com"/>
          </div>
          <div className="barra">
            <label htmlFor="">Región</label>
            <input type="text" required placeholder="Coloca tu Región"/>
          </div>
          <div className="barra">
            <label htmlFor="">Comuna</label>
            <input type="text" required placeholder="Coloca tu Comuna"/>
          </div>
          <div className="barra">
            <label htmlFor="">Dirección</label>
            <input type="text" required placeholder="Coloca tu Dirección"/>
          </div>
          <div className="barra">
            <label htmlFor="">Telefono</label>
            <input type="text" required placeholder="Coloca tu Telefono"/>
          </div>
        <Link to={"/"}>
          <Boton label="Volver"/>
        </Link>
        <Boton label="Pagar"/>
    </section>
  )
}; export default Checkout;
