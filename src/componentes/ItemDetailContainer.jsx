/* ItemDetailContainer */

import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {getProductsById} from "../asyncMock";
import { useParams } from "react-router-dom";
import Titulo from "./Titulo";
 
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState();
  const {productId} = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getProductsById(productId)
      .then(respuesta => {
        setProducto(respuesta);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId]);

  return (
    <section id="ItemDetailContainer">
      {loading ? <Titulo label="Cargando Producto..."/> : <ItemDetail {...producto}/>}
    </section>
  )
}; export default ItemDetailContainer;


