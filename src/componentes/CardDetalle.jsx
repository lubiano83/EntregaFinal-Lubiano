/* CardDetalle */

const CardDetalle = ({img, id, categoria, marca, precio, stock, descripcion}) => {
  return (
    <div className="contenedor__detalle">
        <img src={img} alt={categoria} className="ItemDetail__foto"/>
        <div className="ItemDetail__texto">
          <h4>Id: {id}</h4>
          <h4>Categoria: {categoria}</h4>
          <h4>Marca: {marca}</h4>
          <h4>Precio: {precio}</h4>
          <h4>Stock: {stock}</h4>
          <h4 className="descripcion">Descripción: {descripcion}</h4>
        </div>
    </div>
  )
}; export default CardDetalle;
