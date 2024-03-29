/* InicioContacto */

import { Link } from "react-router-dom";

const InicioContacto = () => {
  return (
    <Link id="InicioContacto" to={"/contacto"}>
        <button className="InicioContacto__boton">Contactanos</button>
    </Link>
  )
}; export default InicioContacto;
