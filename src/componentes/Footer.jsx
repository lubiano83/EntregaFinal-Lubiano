/* Footer */

import Formulario from "./Formulario";
import Horario from "./Horario";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="footer">
        <Formulario Reset="Reset" Enviar="Enviar"/>
        <Links/>
        <Horario/>
    </footer>
  )
}; export default Footer;
