/* ItemDetailContainer */

import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {getProductsById} from "../asyncMock";
 
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState();

  useEffect(() => {
    getProductsById("3")
      .then(respuesta => {
        setProducto(respuesta);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <section className="ItemDetailContainer mostrar-detalle" id="detalle">
       <ItemDetail {...producto} />
    </section>
  )
}; export default ItemDetailContainer;


