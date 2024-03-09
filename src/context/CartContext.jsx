/* CartContext */

import {useState, createContext} from "react";

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

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.cantidad
        })
        return accu
    }

    const totalQuantity = getTotalQuantity();

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    );
};