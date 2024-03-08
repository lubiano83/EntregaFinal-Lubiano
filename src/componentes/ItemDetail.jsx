/* ItemDetail */

import CardDetail from "./CardDetail";
import Titulo from "./Titulo";
import {Link} from "react-router-dom";
import Boton from "./Boton";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, img, categoria, marca, modelo,  precio, stock, descripcion}) => {

  return (
    <article className="ItemDetail">
      <Titulo label="Detalle Producto:"/>
      <CardDetail id={id} img={img} categoria={categoria} modelo={modelo} marca={marca} precio={precio} stock={stock} descripcion={descripcion}/>
      <div className="ItemDetail__contenedor">
        <Link to={"/"}>
            <Boton label="Volver"/>
        </Link>
        <ItemCount inicial={1} stock={stock} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
      </div>
    </article>
  )
}; export default ItemDetail;
