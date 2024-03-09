/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";
import { useCart } from "../hooks/useCart";
import CarritoItem from "./CarritoItem";

const Carrito = () => {

    const {cart} = useCart();
    
    return (
        <section id="Carrito">
            <Titulo label="Carrito de Compras:"/>
            <section id="carritoContenedor">
                <article className="contenedor__card">
                    { cart.map(p => <CarritoItem key={p.id} {...p} /> ) }
                </article>
            </section>
            <TotalPagar />
        </section>
    );
}; export default Carrito;