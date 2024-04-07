/* Ingreso */

import Boton from "./Boton";


const Ingreso = ({ email, setEmail, password, setPassword, handleLogin }) => {

  return (
    <section className="mostrar-ingreso" id="Ingreso">
      <h3 className="IngresoTexto">Administración:</h3>
      <div className="mb-3 column formulario">
        <input id="email" type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input id="password" type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Boton label="Ingresar" handleClick={handleLogin} />
    </section>
  );
}; export default Ingreso;
