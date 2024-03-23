import Boton from "./Boton";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const CompraRealizada = ({label}) => {

  return (
    <div id="CompraRealizada">
      <Titulo label="¡Compra Realizada con Éxito!"/>
      <h4>{label}</h4>
      <Link to={"/"}>
        <Boton label="Volver"/>
      </Link>
    </div>
  )
}; export default CompraRealizada;
