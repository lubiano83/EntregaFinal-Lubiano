/* ItemListContainer */

import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "./ItemList";
import Titulo from "./Titulo";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts()
            .then(respuesta => {
                setProductos(respuesta);
            })
    }, []);

    console.log(productos); // Verifica si los productos se cargan correctamente.

    return (
        <main className="main">
            <Titulo label={greeting}/>
            <ItemList productos={productos} />
        </main>
    )
}; export default ItemListContainer