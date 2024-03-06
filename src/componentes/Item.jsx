/* Item */

import Boton from "./Boton";
import Cards from "./Cards";
import {Link} from "react-router-dom";

const Item = ({id, marca, img, categoria, descripcion, precio, stock }) => {
  
    return (
        <article id="Item">
            <Cards img={img} marca={marca} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock}/>
            <Link to={`/detalle/${id}`}>
              <Boton id={id} label="Detalle"/>
            </Link>
        </article>
    )
  }; export default Item;