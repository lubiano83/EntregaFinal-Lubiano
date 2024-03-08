/* useToggle.js */

import { useState } from "react";

export const useToggle = (initialValue) => {
    
    const [toggle, setToggle] = useState(initialValue);

    const toggleValue = () => {
        setToggle(!toggle);
    };

    return { toggle, toggleValue };
};