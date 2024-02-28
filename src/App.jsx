/* App.js */

import {useState} from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Footer from "./componentes/Footer";

function App() {
  const [categoriaTitulo, setCategoriaTitulo] = useState("Todos");

  const HANDLE_CATEGORIA = (categoria) => { // Función para manejar la categoría seleccionada
    setCategoriaTitulo(categoria);
  };

  return (
    <div className="app">
      <Navbar categoriaDropdown={HANDLE_CATEGORIA}/>
      <ItemListContainer greeting={`Categoria: ${categoriaTitulo}`} />
      <ItemDetailContainer />
      <Footer/>
    </div>
  );
} export default App;
