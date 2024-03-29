/* App.js */

import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./componentes/Checkout";
import CompraRealizada from "./componentes/CompraRealizada";
import Inicio from "./componentes/Inicio";
import { useTitulo } from "./hooks/useTitulo";
import Contacto from "./componentes/Contacto";

function App() {

  const {categoriaTitulo, HANDLE_CATEGORIA} = useTitulo();

  return (
    <BrowserRouter>
      <div id="App">
        <CartProvider>
          <Routes>
            <Route path="/" element={ <Inicio /> }/>
            <Route path="/tienda" element={ <ItemListContainer greeting={`Categoria: Todos`} /> } />
            <Route path="/categoria/:categoryId" element={ <ItemListContainer greeting = {`Categoria: ${categoriaTitulo}`} HANDLE_CATEGORIA={HANDLE_CATEGORIA}/> } />
            <Route path="/detalle/:productId" element={ <ItemDetailContainer /> } />
            <Route path="/carrito" element={ <Carrito /> } />
            <Route path="/datos" element={ <Checkout /> } /> 
            <Route path="/compra" element={ <CompraRealizada /> } />
            <Route path="/contacto" element={ <Contacto /> } />
            <Route path="*" element={ <main><h1>¡404 Error, Not Found!</h1></main> } />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
} export default App;