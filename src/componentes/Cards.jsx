/* Cards */

const Cards = ({img, categoria, marca, descripcion, precio, stock}) => {
  return (
    <div className="cards">
        <img src={img} alt={descripcion} className="cards__foto" />
        <ul className="cards__texto">
            <li>Producto: {categoria}, {marca}</li>
            <li>Precio: {precio}</li>
            <li>Stock: {stock}</li>
        </ul>
    </div>
  )
}; export default Cards
