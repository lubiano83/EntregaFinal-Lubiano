/* App.js */

import {useState} from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito";
import Inicio from "./componentes/Inicio";

function App() {
  const [categoriaTitulo, setCategoriaTitulo] = useState("Todos");

  const HANDLE_CATEGORIA = (categoria) => { // Función para manejar la categoría seleccionada
    setCategoriaTitulo(categoria);
  };

  return (
    <BrowserRouter>
      <div id="App">
        <Inicio />
        <Navbar categoriaDropdown={HANDLE_CATEGORIA}/>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} /> } />
          <Route path="/categoria/:categoryId" element={ <ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} /> } />
          <Route path="/detalle/:productId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <main><h1>¡404 Error, Not Found!</h1></main> } />
        </Routes>
        <Carrito/> 
        <Footer/>
      </div>
    </BrowserRouter>
  );
} export default App;