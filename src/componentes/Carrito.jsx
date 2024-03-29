/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";
import { useCart } from "../hooks/useCart";
import CarritoItem from "./CarritoItem";
import Boton from "./Boton";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Carrito = () => {

    const {cart, totalQuantity} = useCart();

    if(totalQuantity === 0) {
        return (
            <>
             <Navbar />
            <section id="nuevoCarrito">
                <Titulo label="Carrito sin Productos..."/>
                <Link to={"/tienda"} className="Carrito__Volver">
                    <Boton id="Volver" label="Volver"/>
                </Link>
            </section>
            <Footer />
            </>
        )
    }
    
    return (
        <>
            <Navbar />
            <section id="Carrito">
                <Titulo label="Carrito de Compras:"/>
                <section id="carritoContenedor">
                    <article className="contenedor__card">
                        { cart.map(prod => <CarritoItem key={prod.id} {...prod} /> ) }
                    </article>
                </section>
                <TotalPagar />
            </section>
            <Footer />
        </>
    );
}; export default Carrito;