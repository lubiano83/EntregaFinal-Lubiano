/* CargandoPagina */

import Footer from "./Footer";
import Navbar from "./Navbar";
import Titulo from "./Titulo";

const CargandoPagina = () => {
  return (
    <>
      <Navbar />
      <div id="CargandoPagina">
          <Titulo label="Cargando la Pagina..."/>
      </div>
      <Footer />
    </>
  )
}; export default CargandoPagina;
