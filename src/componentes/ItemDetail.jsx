/* ItemDetail */

import ItemCount from "./ItemCount";
import CardDetail from "./CardDetail";
import Titulo from "./Titulo";

const ItemDetail = ({id, img, categoria, marca, precio, stock, descripcion}) => {

  return (
    <article className="ItemDetail">
      <Titulo label="Detalle Producto:"/>
      <CardDetail id={id} img={img} categoria={categoria} marca={marca} precio={precio} stock={stock} descripcion={descripcion}/>
      <ItemCount inicial={1} stock={stock} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
    </article>
  )
}; export default ItemDetail;
