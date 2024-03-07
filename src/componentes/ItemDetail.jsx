/* ItemDetail */

import CardDetail from "./CardDetail";
import Titulo from "./Titulo";
import {Link} from "react-router-dom";
import Boton from "./Boton";

const ItemDetail = ({id, img, categoria, marca, precio, stock, descripcion}) => {

  return (
    <article className="ItemDetail">
      <Titulo label="Detalle Producto:"/>
      <CardDetail id={id} img={img} categoria={categoria} marca={marca} precio={precio} stock={stock} descripcion={descripcion}/>
      <Link to={"/"}>
          <Boton label="Volver"/>
      </Link>
    </article>
  )
}; export default ItemDetail;
