/* CartWidget */

import {useState, useEffect} from "react"

const CartWidget = ({numerito}) => {

    const [mostrarCarrito, setMostrarCarrito] = useState(true);

    const TOGGLE_CARRITO = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    useEffect(() => {
        const BOTON_TOGGLE = document.getElementById("Carrito");
        if (mostrarCarrito) {
          BOTON_TOGGLE.classList.add("mostrar-carrito");
        } else {
          BOTON_TOGGLE.classList.remove("mostrar-carrito");
        }
    }, [mostrarCarrito]);

    // numerito = 99;

    return (
        <button onClick={TOGGLE_CARRITO} className="rounded-circle"  id="CartWidget">
            <span className="numerito">{numerito}</span>
        </button>
    )
}; export default CartWidget;