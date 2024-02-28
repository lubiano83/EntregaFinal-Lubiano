/* ItemDetail */

import ItemCount from "./ItemCount";
import Cruz from "./Cruz";
import { useState, useEffect } from "react";
import CardDetalle from "./CardDetalle";

const ItemDetail = ({id, img, categoria, marca, precio, stock, descripcion}) => {

  const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const TOGGLE_CRUZ = () => {
        setMostrarDetalle(!mostrarDetalle);
      }
    
      useEffect(() => {
        const BOTON_DETALLE = document.getElementById("detalle");
        if(mostrarDetalle){
          BOTON_DETALLE.classList.add("mostrar-detalle");
        } 
      }, [mostrarDetalle]);

  return (
    <article className="ItemDetail">
      <div className="contenedor__cruz">
        <Cruz handleClick={TOGGLE_CRUZ}/>
      </div>
      <CardDetalle id={id} img={img} categoria={categoria} marca={marca} precio={precio} stock={stock} descripcion={descripcion}/>
      <ItemCount inicial={1} stock={stock} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
    </article>
  )
}; export default ItemDetail;
