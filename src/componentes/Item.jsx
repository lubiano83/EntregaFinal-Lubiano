/* Item */

import Boton from "./Boton";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const Item = ({id, marca, img, categoria, descripcion, precio, stock }) => {

    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const TOGGLE_DETALLE = () => {
        setMostrarDetalle(!mostrarDetalle);
      }
    
      useEffect(() => {
        const BOTON_DETALLE = document.getElementById("detalle");
        if(mostrarDetalle){
          BOTON_DETALLE.classList.remove("mostrar-detalle");
        } 
      }, [mostrarDetalle]);
  
    return (
        <article className="producto">
            <Cards img={img} marca={marca} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock}/>
            <Boton id={id} label="Detalle" handleClick={TOGGLE_DETALLE}/>
        </article>
    )
  }; export default Item;