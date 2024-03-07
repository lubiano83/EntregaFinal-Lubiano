/* Item */

import Cards from "./Cards";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({id, marca, img, categoria, descripcion, precio, stock }) => {
  
    return (
      <div id="Item">
        <Link to={`/detalle/${id}`} >
            <Cards img={img} marca={marca} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock} />
        </Link>
        <ItemCount inicial={1} stock={stock} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
      </div>
    )
  }; export default Item;