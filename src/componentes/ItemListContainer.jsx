/* ItemListContainer */

import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "./ItemList";

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
            <div className="titulo__productos">
                <h2 className="categorias">{greeting}</h2>
            </div>
            <ItemList productos={productos} />
        </main>
    )
}; export default ItemListContainer