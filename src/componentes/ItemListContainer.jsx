/* ItemListContainer */

import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import Titulo from "./Titulo";
import { useParams } from "react-router-dom";
import { db } from "../services";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId ? query(collection(db, "PRODUCTOS"), where("categoria", "==", categoryId)) : collection(db, "PRODUCTOS");
        getDocs(collectionRef) // nos sirve para obtener los documentos
            .then((respuesta) => {
                const PRODUCTOS = respuesta.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductos(PRODUCTOS)
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    console.log(productos); // Verifica si los productos se cargan correctamente.

    return (
        <main id="ItemListContainer">
           {loading ? <Titulo label="Cargando Productos..."/> : <Titulo label={greeting}/>}
            <ItemList productos={productos} />
        </main>
    )
}; export default ItemListContainer;