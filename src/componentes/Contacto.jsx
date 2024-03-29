/* Contacto */

import Footer from "./Footer";
import Formulario from "./Formulario";
import Navbar from "./Navbar";
import Titulo from "./Titulo";

const Contacto = () => {
  return (
    <>
        <Navbar />
        <section id="Contacto">
            <Titulo label="Contactanos..."/>
            <Formulario Reset="Reset" Enviar="Enviar"/>
        </section>
        <Footer />
    </>
  )
}; export default Contacto;
