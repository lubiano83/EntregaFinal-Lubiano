/* Checkout */

import Boton from "./Boton";
import { Link } from "react-router-dom";
import Titulo from "./Titulo";
import CheckoutItem from "./CheckoutItem";
import CompraRealizada from "./CompraRealizada";
import { useOrder } from "../hooks/useOrder";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {

  const {createOrder, loading, orderCreated, newOrderId, handleInputChange} = useOrder();

  if(loading){
    return <CompraRealizada label="Se esta generando su Orden..." />
  }

  if(orderCreated){
    return <CompraRealizada label={`Orden de Compra: ${newOrderId}`} />
  }

  return (
        <>
          <Navbar />
          <section id="Checkout">
            <Titulo label="Datos de Envio:"/>
            <CheckoutItem type="name" name="name" label="Ingrese su Nombre" handleInputChange={handleInputChange} />
            <CheckoutItem type="mail" name="mail" label="Ingrese su Mail" handleInputChange={handleInputChange} />
            <CheckoutItem type="address" name="address" label="Ingrese su Dirección" handleInputChange={handleInputChange} />
            <CheckoutItem type="phone" name="phone" label="Ingrese su Telefono" handleInputChange={handleInputChange} />

              <div className="CheckoutItem__botones">
                <Link to={"/tienda"}>
                  <Boton label="Volver" />
                </Link>
                <Boton label="Pagar" type="submit" name="submit" handleClick={createOrder} />
              </div>
          </section>
          <Footer />
        </>
  )
}; export default Checkout;


