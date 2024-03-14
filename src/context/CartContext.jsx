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
        const cartUpdated = cart.filter(prod => prod.id !== id);
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

    const sacarPrecioTotal = () => {
        let precioTotal = 0;
        cart.forEach(prod => {
            precioTotal += prod.cantidad * prod.precio;
        })
        return formatearPrecio(precioTotal);
    }

    const formatearPrecio = (price) => {
        const PRECIO_STRING = price.toString(); // Convertir el precio a string
        const LONGITUD = PRECIO_STRING.length;
        let resultado = '';
        
        for (let i = LONGITUD - 1, contador = 0; i >= 0; i--) {
            resultado = PRECIO_STRING[i] + resultado;
            contador++;
            if (contador % 3 === 0 && i !== 0) {
                resultado = '.' + resultado;
            }
        }
        return resultado;
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clearCart, totalQuantity, sacarPrecioTotal, formatearPrecio}}>
            {children}
        </CartContext.Provider>
    );
};

