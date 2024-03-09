/* CarritoItem */

import Boton from "./Boton";
import { useCart } from "../hooks/useCart";

const CarritoItem = ({cantidad, categoria, marca, modelo, precio}) => {

    const {removeItem} = useCart();

  return (
    <div id="CarritoItem">
        <h4>{cantidad}</h4>
        <h4>{categoria}, {marca}, {modelo}.</h4>
        <h4>{precio * cantidad}</h4>
        <Boton label="Eliminar" handleClick={removeItem}/>
    </div>
  )
}; export default CarritoItem;
