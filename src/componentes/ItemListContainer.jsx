/* ItemListContainer */

import ItemList from "./ItemList";
import Titulo from "./Titulo";
import { useAsync } from "../hooks/useAsync";
import { getProducts } from "../services/firebase";
import { useParams } from "react-router-dom";
import CargandoPagina from "./CargandoPagina";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();

    // Mueve la declaración de getProductFromFirestore antes de su uso en useAsync
    const getProductFromFirestore = () => getProducts(categoryId);
    const { data, error, isLoading } = useAsync(getProductFromFirestore, [categoryId]);

    if (error) {
        return <Titulo label="Hubo un Error..." />;
    }

    if (!data) {
        return <CargandoPagina />;
    }

    if (data.length === 0) {
        return categoryId ? <Titulo label={`No hay productos en nuestra categoria ${categoryId}`} /> : <Titulo label="No hay productos disponibles..." />;
    }

    return (
        <main id="ItemListContainer">
            {isLoading ? <Titulo label="Cargando Productos..." /> : <Titulo label={greeting} />}
            <ItemList productos={data} />
        </main>
    );
};
export default ItemListContainer;
