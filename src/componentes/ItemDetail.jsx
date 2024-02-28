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
      <img src="./src/img/pala-nox.webp" alt="" className="ItemDetail__foto"/>
      <div className="contenedor">
        <Cruz handleClick={TOGGLE_CRUZ}/>
        <div className="ItemDetail__texto">
          <h2>Categoria:</h2>
          <h3>Marca:</h3>
          <h4>Precio:</h4>
          <h4>Stock:</h4>
          <h5>Descripción:</h5>
        </div>
        <ItemCount inicial={1} stock={10} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
      </div>
    </article>
  )
}; export default ItemDetail;
