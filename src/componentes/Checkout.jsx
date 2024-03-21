/* Checkout */

import Boton from "./Boton";
import CheckoutItem from "./CheckoutItem";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Checkout = () => {

  const {cart, generarNumeroDeOrden, order} = useCart();

  return (
    <form id="Checkout" action="https://formsubmit.co/lubiano83@gmail.com" method="POST">
      <Titulo label="Datos de Envio:"/>
      <div className="barra">
        <label htmlFor="">Nombre</label>
        <input type="name" name="name" required placeholder="Coloca tu Nombre" />
      </div>
      <div className="barra">
        <label htmlFor="">Mail</label>
        <input type="email" name="email" required placeholder="example@mail.com" />
      </div>
      <div className="barra">
        <label htmlFor="">Dirección</label>
        <input type="address" name="address" required placeholder="Region, Comuna, Calle y Numero." />
      </div>
      <div className="barra">
        <label htmlFor="">Telefono</label>
        <input type="phone" name="phone" required placeholder="Coloca tu Telefono" />
      </div>
      
      <input type="hidden" name="Numero de Orden" value={order} />
      { cart.map(prod => <CheckoutItem order={order} key={prod.id} {...prod} /> ) }
      <input type="hidden" name="_captcha" value="false" />
     
      <Link to={"/"}>
        <Boton label="Volver" />
      </Link>
      <Link to={"/compra"}>
        <Boton label="Pagar" type="submit" name="submit" handleClick={generarNumeroDeOrden} />
      </Link>
    </form>
  )
}; export default Checkout;


