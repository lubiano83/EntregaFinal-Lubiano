/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";

const Carrito = () => {
    
    return (
        <section id="Carrito">
            <Titulo label="Carrito de Compras:"/>
            <section id="carritoContenedor">
                {/* Esto se rellena automaticamente */}
            </section>
            <TotalPagar />
        </section>
    );
}; export default Carrito;