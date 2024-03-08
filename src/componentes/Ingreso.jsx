/* Ingreso */

import Boton from "./Boton";
import { useState, useEffect } from "react";

const Ingreso = () => {

  const [mostrarIngreso, setMostrarIngreso] = useState(true);

    const TOGGLE_INGRESO = () => {
        setMostrarIngreso(!mostrarIngreso);
    };

    useEffect(() => {
        const BOTON_TOGGLE = document.getElementById("Ingreso");
        if (mostrarIngreso) {
          BOTON_TOGGLE.classList.add("mostrar-ingreso");
        } else {
          BOTON_TOGGLE.classList.remove("mostrar-ingreso");
        }
    }, [mostrarIngreso]);
  
  return (
    <section className="mostrar-ingreso" id="Ingreso">
      <h3 className="IngresoTexto">Ingresa tus Datos:</h3>
      <div className="mb-3 column formulario">
        <label htmlFor="imputEmail" className="col-sm-2 col-form-label">Email</label>
        <input type="mail" className="form-control" id="inputMail"/>
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword"/>
      </div>
      <Boton label="Salir" handleClick={TOGGLE_INGRESO}/>
      <Boton label="Ingresa" />
    </section>
  )
}; export default Ingreso;
