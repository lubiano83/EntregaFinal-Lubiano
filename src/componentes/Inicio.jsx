/* Inicio */

import InicioTexto from "./InicioTexto";
import InicioBoton from "./InicioBoton";
import InicioTools from "./InicioTools";
import InicioContacto from "./InicioContacto";
import Ingreso from "./Ingreso";
import Logo from "./Logo";
import { useMostrar } from "../hooks/useMostrar";
import { useLogin } from "../hooks/useLogin";
import ModalAdm from "./ModalAdm";

const Inicio = () => {

  const { handleMostrar, mostrar } = useMostrar();
  const { email, setEmail, password, setPassword, handleLogin, isLoggedIn } = useLogin();

  return (
    <div id="Inicio">
        <InicioTools handleClick={handleMostrar}/>
        <div className="inicio__botones">
          <Logo />
          <InicioBoton />
          <InicioContacto />
        </div>
        <InicioTexto />
        { mostrar && <Ingreso email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}/> }
        { isLoggedIn && <ModalAdm handleMostrar={handleMostrar}/> }
    </div>
  )
}; export default Inicio;
