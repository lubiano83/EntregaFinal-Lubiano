/* Total Pagar */

import Boton from "./Boton";

const TotalPagar = () => {
    return (
        <>
            <section className="carrito__total">
                <h5 className="total" id="carritoTotal">Total: $0</h5>
                <Boton id="pagarCarrito" label="Pagar"/>
            </section>
        </>
    )
}; export default TotalPagar;