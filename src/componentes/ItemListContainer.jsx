/* ItemListContainer */

import ItemList from "./ItemList";
import Titulo from "./Titulo";
import { useAsync } from "../hooks/useAsync";
import { getProducts } from "../services/firebase";
import { useParams } from "react-router-dom";
import CargandoPagina from "./CargandoPagina";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const ItemListContainer = () => {

    const { categoryId } = useParams();
    const getProductFromFirestore = () => getProducts(categoryId);
    const { data, error, isLoading } = useAsync(getProductFromFirestore, [categoryId]);
    const [titulo, setTitulo] = useState("Todos los Productos:");

    useEffect(() => {
        if (categoryId) {
            setTitulo(`Productos: ${categoryId}`);
            document.title = `Padel Store, ${categoryId}`;
        } else {
            setTitulo("Todos los Productos:");
            document.title = "Padel Store";
        }
    }, [categoryId]);

    if (error) {
        return <Titulo label="Hubo un Error..." />;
    }

    if (!data) {
        return <CargandoPagina />;
    }

    if (data.length === 0) {
        return (
            categoryId ? <Titulo label={`No hay productos en nuestra categoria ${categoryId}`} /> : <Titulo label="No hay productos disponibles..." />
        )     
    }

    return (
        <>
            <Navbar />
            <main id="ItemListContainer">
                { isLoading ? <Titulo label="Cargando Productos..." /> : <Titulo label={titulo} /> }
                <ItemList productos={data} />
            </main>
            <Footer />
        </>
    );
};
export default ItemListContainer;
