/* useToggle */

import { useState } from "react";

export const useToggle = () => {
    
    const [mostrarToggle, setMostrarToggle] = useState();

    const TOGGLE = () => {
        setMostrarToggle(!mostrarToggle);
    };

    return {mostrarToggle, TOGGLE}
};


