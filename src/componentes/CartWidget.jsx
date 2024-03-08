/* CartWidget */

import { Link } from "react-router-dom";

const CartWidget = ({numerito}) => {

    // numerito = 99;

    return (
        <Link id="CartWidget" to={"/carrito"}>
            <button className="rounded-circle CartWidget__boton" >
                <span className="numerito">{numerito}</span>
            </button>
        </Link>
    )
}; export default CartWidget;