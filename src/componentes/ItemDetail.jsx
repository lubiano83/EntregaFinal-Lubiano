/* ItemDetail */

import CardDetail from "./CardDetail";
import Titulo from "./Titulo";
import {Link} from "react-router-dom";
import Boton from "./Boton";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({id, img, categoria, marca, modelo,  precio, stock, descripcion}) => {

  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad)
  }

  return (
    <article className="ItemDetail">
      <Titulo label="Detalle Producto:"/>
      <CardDetail id={id} img={img} categoria={categoria} modelo={modelo} marca={marca} precio={precio} stock={stock} descripcion={descripcion}/>
      <div className="ItemDetail__contenedor">
        <Link to={"/"}>
            <Boton label="Volver"/>
        </Link>
        { cantidadAgregada > 0 ? ( <Link to={"/carrito"}><Boton label="Carrito"/></Link> ) : ( <ItemCount inicial={1} stock={stock} agregar={handleAgregar} /> ) }
      </div>
    </article>
  )
}; export default ItemDetail;
