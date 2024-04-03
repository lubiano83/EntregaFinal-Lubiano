/* Ingreso */

import Boton from "./Boton";


const Ingreso = ({ email, setEmail, password, setPassword, handleLogin }) => {

  return (
    <section className="mostrar-ingreso" id="Ingreso">
      <h3 className="IngresoTexto">Administración:</h3>
      <div className="mb-3 column formulario">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Boton label="Ingresar" handleClick={handleLogin} />
    </section>
  );
}; export default Ingreso;
