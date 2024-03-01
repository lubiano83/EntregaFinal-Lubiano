/* App.js */

import {useState} from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [categoriaTitulo, setCategoriaTitulo] = useState("Todos");

  const HANDLE_CATEGORIA = (categoria) => { // Función para manejar la categoría seleccionada
    setCategoriaTitulo(categoria);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar categoriaDropdown={HANDLE_CATEGORIA}/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} />}/>
          <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} />} />
          <Route path="/detalle/:productId" element={ <ItemDetailContainer/> } />
          <Route path="*" element={<h1> 404 NOT FOUND </h1>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
} export default App;
