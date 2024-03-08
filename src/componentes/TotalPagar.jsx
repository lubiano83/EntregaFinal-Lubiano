/* Total Pagar */

import Boton from "./Boton";
import { Link } from "react-router-dom";

const TotalPagar = () => {
    return (
        <>
            <section id="TotalPagar">
                <h5 className="TotalPagar__total">Total: $0</h5>
                <Link to={"/"}>
                    <Boton label="Volver"/>
                </Link>
                <Link>
                    <Boton label="Pagar"/>
                </Link>
            </section>
        </>
    )
}; export default TotalPagar;