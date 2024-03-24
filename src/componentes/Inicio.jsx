/* Inicio */

import InicioTexto from "./InicioTexto";
import InicioBoton from "./InicioBoton";
import InicioTools from "./InicioTools";
import InicioContacto from "./InicioContacto";
import Ingreso from "./Ingreso";
import Logo from "./Logo";
import Titulo from "./Titulo";
import { useMostrar } from "../hooks/useMostrar";

const Inicio = ({login}) => {

  login = "José Pablo Lubiano"

  const {handleMostrar, mostrar} = useMostrar();

  return (
    <div id="Inicio">
        <InicioTools handleClick={handleMostrar}/>
        {<Titulo label={login}/>}
        <div className="inicio__botones">
          <Logo />
          <InicioBoton />
          <InicioContacto />
        </div>
        <InicioTexto />
        {mostrar && <Ingreso /> }
    </div>
  )
}; export default Inicio;
