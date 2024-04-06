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

  const {createOrder, loading, orderCreated, newOrderId, handleInputChange, buyerInfo} = useOrder();

  if(loading){
    return <CompraRealizada label="Se esta generando su Orden..." />
  }

  if(orderCreated){
    return <CompraRealizada label={`Orden de Compra: ${newOrderId}`} />
  }

  return (
        <>
          <Navbar />
          <form id="Checkout">
            <Titulo label="Datos de Envio:"/>
            <CheckoutItem type="name" name="Nombre:" label="Ingrese su Nombre" handleInputChange={handleInputChange} require/>
            <CheckoutItem type="mail" name="Email:" label="Ingrese su Mail" handleInputChange={handleInputChange} require/>
            <CheckoutItem type="address" name="Dirección:" label="Ingrese su Dirección" handleInputChange={handleInputChange} require/>
            <CheckoutItem type="phone" name="Telefono:" label="Ingrese su Telefono" handleInputChange={handleInputChange} require/>

              <div className="CheckoutItem__botones">
                <Link to={"/tienda"}>
                  <Boton label="Volver" />
                </Link>
                { buyerInfo.name && buyerInfo.address && buyerInfo.mail && buyerInfo.phone && <Boton label="Pagar" type="submit" name="submit" handleClick={createOrder} />}
              </div>
          </form>
          <Footer />
        </>
  )
}; export default Checkout;


