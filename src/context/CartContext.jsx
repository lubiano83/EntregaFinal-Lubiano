/* CartContext */

import {useState, createContext, useContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => [...prev, productToAdd]);
        } else {
          console.error("El producto ya fue agregado");
        }
    };
    
    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id === id);
        setCart(cartUpdated);
    }
    
    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
