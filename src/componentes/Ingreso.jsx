/* Ingreso */

import Boton from "./Boton";

const Ingreso = () => {
  
  return (
    <section className="mostrar-ingreso" id="Ingreso">
      <h3 className="IngresoTexto">Administración:</h3>
      <div className="mb-3 column formulario">
        <label htmlFor="imputEmail" className="col-sm-2 col-form-label">Email</label>
        <input type="mail" className="form-control"/>
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <input type="password" className="form-control"/>
      </div>
      <Boton label="Ingresar" />
    </section>
  )
}; export default Ingreso;
