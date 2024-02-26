/* Item */

import Boton from "./Boton";
import Cards from "./Cards";

const Item = ({ id, marca, img, categoria, descripcion, precio, stock }) => {
  
    return (
        <article className="producto">
            <Cards img={img} marca={marca} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock}/>
            <Boton label="Detalle" id={id}/>
        </article>
    )
  }; export default Item;