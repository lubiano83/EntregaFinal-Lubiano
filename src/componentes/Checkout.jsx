/* Checkout */

import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";
import {useCart} from "../hooks/useCart";

const Checkout = ({id, categoria, marca, modelo, cantidad}) => {

  const {cart} = useCart();
  console.log(cart)

  return (
    <form id="Checkout" action="https://formsubmit.co/lubiano83@gmail.com" method="POST">
      <Titulo label="Datos de Envio:"/>
      <div className="barra">
        <label htmlFor="">Nombre</label>
        <input type="name" name="name" required placeholder="Coloca tu Nombre"/>
      </div>
      <div className="barra">
        <label htmlFor="">Mail</label>
        <input type="email" name="email" required placeholder="example@mail.com"/>
      </div>
      <div className="barra">
        <label htmlFor="">Dirección</label>
        <input type="address" name="address" required placeholder="Region, Comuna, Calle y Numero."/>
      </div>
      <div className="barra">
        <label htmlFor="">Telefono</label>
        <input type="fone" name="fone" required placeholder="Coloca tu Telefono"/>
      </div>

      <input type="hidden" name="hidden" value={cart.id} />
      <input type="hidden" name="hidden" value={cart.categoria} />
      <input type="hidden" name="hidden" value={cart.marca} />
      <input type="hidden" name="hidden" value={cart.modelo} />
      <input type="hidden" name="hidden" value={cart.cantidad} />
      <input type="hidden" name="_next" value="http://localhost:5173/compra"/>
      <input type="hidden" name="_captcha" value="false"/>

      <Link to={"/"}>
        <Boton label="Volver"/>
      </Link>
      <Boton label="Pagar" type="submit" name="submit" />
    </form>
  )
}; export default Checkout;
