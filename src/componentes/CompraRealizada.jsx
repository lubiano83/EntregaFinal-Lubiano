/* CompraRealizada */

import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const CompraRealizada = () => {

  const {order} = useCart();

  return (
    <div id="CompraRealizada">
      <Titulo label="¡Compra Realizada con Exito!"/>
      <h5 className="numeroOrden">{`Tu Orden es la Numero: ${order}`}</h5>
      <Link to={"/"}>
        <Boton label="Volver"/>
      </Link>
    </div>
  )
}; export default CompraRealizada;
