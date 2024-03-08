/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";

const Carrito = () => {
    
    return (
        <section id="Carrito">
            <Titulo label="Carrito de Compras:"/>
            <section id="carritoContenedor">
                {/* <!-- Contenido del carrito --> */}
                <h3>contenido del carrito</h3>
            </section>
            <TotalPagar />
        </section>
    );
}; export default Carrito;