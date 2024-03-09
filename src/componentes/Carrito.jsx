/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";
import Boton from "./Boton";

const Carrito = () => {
    
    return (
        <section id="Carrito">
            <Titulo label="Carrito de Compras:"/>
            <section id="carritoContenedor">
                <article className="contenedor__card">
                    <h4>Cantidad</h4>
                    <h4>Categoria, Marca, Modelo.</h4>
                    <h4>Precio</h4>
                    <Boton label="Eliminar"/>
                </article>
            </section>
            <TotalPagar />
        </section>
    );
}; export default Carrito;