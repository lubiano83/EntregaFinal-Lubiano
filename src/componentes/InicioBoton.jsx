/* Entrar */

import { Link } from "react-router-dom";

const InicioBoton = () => {
  return (
    <Link to={"/tienda"} id="InicioBoton">
        <button className="InicioBoton__boton">Ir a la Tienda</button>
    </Link>
  )
}; export default InicioBoton;
