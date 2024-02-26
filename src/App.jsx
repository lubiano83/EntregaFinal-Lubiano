/* App */

import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer greeting={`Nuestros Productos`}/>
      <ItemDetailContainer/>
    </div>
  )
} export default App
