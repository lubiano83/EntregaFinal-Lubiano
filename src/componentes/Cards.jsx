/* Cards */

const Cards = ({img, modelo,  categoria, marca, precio, stock}) => {
  return (
    <div id="Cards">
        <img src={img} alt={categoria} className="cards__foto" />
        <ul className="cards__texto">
            <li>Producto: {categoria}, {marca}, {modelo}.</li>
            <li>Precio: {precio}</li>
            <li>Stock: {stock}</li>
        </ul>
    </div>
  )
}; export default Cards
