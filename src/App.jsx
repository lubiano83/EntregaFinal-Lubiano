/* App.js */

import { useState } from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  const [categoriaTitulo, setCategoriaTitulo] = useState("Todos");

  // Función para manejar la categoría seleccionada
  const handleCategoriaTitulo = (categoria) => {
    setCategoriaTitulo(categoria);
  };

  return (
    <div className="app">
      <Navbar categoriaTitulo={handleCategoriaTitulo} />
      <ItemListContainer greeting={`${categoriaTitulo}:`} categoria={categoriaTitulo} />
      <ItemDetailContainer />
    </div>
  );
} export default App
