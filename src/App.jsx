/* App.js */

import {useState, createContext} from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito";
import Inicio from "./componentes/Inicio";

export const CartContext = createContext(false)

function App() {
  const [categoriaTitulo, setCategoriaTitulo] = useState("Todos");
  const [cart, setCart] = useState([]);

  const HANDLE_CATEGORIA = (categoria) => { // Función para manejar la categoría seleccionada
    setCategoriaTitulo(categoria);
  };

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
    <BrowserRouter>
      <div id="App">
        <Inicio />
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart}}>
        <Navbar categoriaDropdown={HANDLE_CATEGORIA}/>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} /> } />
          <Route path="/categoria/:categoryId" element={ <ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} /> } />
          <Route path="/detalle/:productId" element={ <ItemDetailContainer /> } />
          <Route path="/carrito" element={ <Carrito /> } />
          <Route path="*" element={ <main><h1>¡404 Error, Not Found!</h1></main> } />
        </Routes>
        </CartContext.Provider>
        <Footer/>
      </div>
    </BrowserRouter>
  );
} export default App;