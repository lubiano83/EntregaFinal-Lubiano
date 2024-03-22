/* CompraRealizada */

import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const CompraRealizada = () => {

  return (
    <div id="CompraRealizada">
      <Titulo label="¡Compra Realizada con Exito!"/>
      <Link to={"/"}>
        <Boton label="Volver"/>
      </Link>
    </div>
  )
}; export default CompraRealizada;
