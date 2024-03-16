/* Inicio */

import InicioTexto from "./InicioTexto";
import InicioBoton from "./InicioBoton";
import InicioTools from "./InicioTools";
import InicioContacto from "./InicioContacto";
import Ingreso from "./Ingreso";
import Logo from "./Logo";
import { useMostrar } from "../hooks/useMostrar";

const Inicio = () => {

  const {handleMostrar, mostrar} = useMostrar();

  return (
    <div id="Inicio">
        <InicioTools handleClick={handleMostrar}/>
        
        <div className="inicio__botones">
          <Logo />
          <InicioBoton />
          <InicioContacto />
        </div>
        <InicioTexto />
        {mostrar === true && <Ingreso /> }
    </div>
  )
}; export default Inicio;
