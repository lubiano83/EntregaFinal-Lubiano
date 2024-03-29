/* ItemDetailContainer */

import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Titulo from "./Titulo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState();
  const {productId} = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getDoc(doc(db, "PRODUCTOS", productId))
      .then((respuesta) => {
        console.log(respuesta)
        const PRODUCTO = {id: respuesta.id, ...respuesta.data()}
        setProducto(PRODUCTO)
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId]);

  return (
    <>
      <Navbar />
      <section id="ItemDetailContainer">
        {loading ? <Titulo label="Cargando Producto..."/> : <ItemDetail {...producto}/>}
      </section>
      <Footer />
    </>
  )
}; export default ItemDetailContainer;