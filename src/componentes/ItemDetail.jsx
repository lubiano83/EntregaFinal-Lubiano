/* ItemDetail */

import ItemCount from "./ItemCount";
import Cruz from "./Cruz";
import { useState, useEffect } from "react";

const ItemDetail = () => {

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
      <div className="contenedor__detalle">
        <img src="./src/img/pala-nox.webp" alt="" className="ItemDetail__foto"/>
        <div className="ItemDetail__texto">
          <h4>Categoria:</h4>
          <h4>Marca:</h4>
          <h4>Precio:</h4>
          <h4>Stock:</h4>
          <h4 className="descripcion">Descripción:</h4>
        </div>
      </div>
      <ItemCount inicial={1} stock={10} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
    </article>
  )
}; export default ItemDetail;
