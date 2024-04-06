/* CompraRealizada */

import Boton from "./Boton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const CompraRealizada = ({label}) => {

  return (
    <>
      <Navbar />
      <div id="CompraRealizada">
        <Titulo label="¡Compra Realizada con Éxito!"/>
        <h4>{label}</h4>
        <Link to={"/tienda"}>
          <Boton label="Volver"/>
        </Link>
      </div>
      <Footer />
    </>
  )
}; export default CompraRealizada;
