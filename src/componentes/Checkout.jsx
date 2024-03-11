/* Checkout */

import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <form id="Checkout" action="https://formsubmit.co/lubiano83@gmail.com" method="POST">
        <Titulo label="Datos de Envio:"/>
          <div className="barra">
            <label htmlFor="">Nombre</label>
            <input type="text" name="text" required placeholder="Coloca tu Nombre"/>
          </div>
          <div className="barra">
            <label htmlFor="">Mail</label>
            <input type="email" name="email" required placeholder="example@mail.com"/>
          </div>
          <div className="barra">
            <label htmlFor="">Región</label>
            <input type="text" name="text" required placeholder="Coloca tu Región"/>
          </div>
          <div className="barra">
            <label htmlFor="">Comuna</label>
            <input type="text" name="text" required placeholder="Coloca tu Comuna"/>
          </div>
          <div className="barra">
            <label htmlFor="">Dirección</label>
            <input type="text" name="text" required placeholder="Coloca tu Dirección"/>
          </div>
          <div className="barra">
            <label htmlFor="">Telefono</label>
            <input type="text" name="text" required placeholder="Coloca tu Telefono"/>
          </div>

          <input type="hidden" name="_next" value="http://localhost:5173/"/>
          <input type="hidden" name="_captcha" value="false"/>

        <Link to={"/"}>
          <Boton label="Volver"/>
        </Link>
        <Boton label="Pagar" type="submit" name="submit" />
    </form>
  )
}; export default Checkout;
