/* Checkout */

import Boton from "./Boton";
import { Link } from "react-router-dom";
import Titulo from "./Titulo";
import CheckoutItem from "./CheckoutItem";
import {useBuyer} from "../hooks/useBuyer";
import CompraRealizada from "./CompraRealizada";
import { useOrder } from "../hooks/useOrder";

const Checkout = () => {

  const {createOrder, loading, orderCreated, newOrderId} = useOrder();
  const { handleInputChange} = useBuyer();

  if(loading){
    return <CompraRealizada label="Se esta generando su Orden..." />
  }

  if(orderCreated){
    return <CompraRealizada label={`Orden de Compra: ${newOrderId}`} />
  }

  return (
        
        <section id="Checkout">
          <Titulo label="Datos de Envio:"/>
          <CheckoutItem type="Nombre" name="Nombre" label="Ingrese su Nombre" handleInputChange={handleInputChange}/>
          <CheckoutItem type="Email" name="Email" label="Ingrese su Mail" handleInputChange={handleInputChange}/>
          <CheckoutItem type="Dirección" name="Dirección" label="Ingrese su Dirección" handleInputChange={handleInputChange}/>
          <CheckoutItem type="Telefono" name="Telefono" label="Ingrese su Telefono" handleInputChange={handleInputChange}/>

            <div className="CheckoutItem__botones">
              <Link to={"/"}>
                <Boton label="Volver" />
              </Link>
              <Boton label="Pagar" type="submit" name="submit" handleClick={createOrder} />
            </div>
        </section>
  )
}; export default Checkout;


