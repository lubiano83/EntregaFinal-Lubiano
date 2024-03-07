/* CartWidget */

import {useState, useEffect} from "react"
import Carrito from "./Carrito";

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
        <div id="CartWidget">
            <button onClick={TOGGLE_CARRITO} className="rounded-circle CartWidget__boton" >
                <span className="numerito">{numerito}</span>
            </button>
            <Carrito />
        </div>
    )
}; export default CartWidget;