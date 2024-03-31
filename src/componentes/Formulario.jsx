/* Formulario */

import { Link } from "react-router-dom";
import Boton from "./Boton"

const Formulario = () => {
  return (
    <form id="Formulario" action="https://formsubmit.co/lubiano83@gmail.com" method="POST">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                <h4>Email</h4>
            </label>
            <input type="email" name="email" className="form-control input" id="exampleFormControlInput1" placeholder="Coloca tu Email" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                <h4>Mensaje</h4>
            </label>
            <textarea className="form-control textarea" name="textarea" type="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu Mensaje" required></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_next" value="http://localhost:5173/"/>

        <Link to={"/tienda"}>
            <Boton label="Volver"/>
        </Link>
        <Boton name="reset" type="reset" label="Reset" className="reset boton"/>
        <Boton name="submit" type="submit" label="Enviar" className="submit boton"/>
    </form>
  )
}; export default Formulario;
