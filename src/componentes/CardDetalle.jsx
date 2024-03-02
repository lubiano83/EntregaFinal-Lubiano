/* CardDetalle */

const CardDetalle = ({img, id, categoria, marca, precio, stock, descripcion}) => {

  return (
    <div className="ItemDetail">
      <div className="ItemDetail__contenedor">
        <img src={img} alt={categoria} className="contenedor__foto"/> 
        <div className="contenedor__texto">
          <h4>Id: {id}</h4>
          <h4>Categoria: {categoria}</h4>
          <h4>Marca: {marca}</h4>
          <h4>Precio: {precio}</h4>
          <h4>Stock: {stock}</h4>
        </div>
      </div>
        <h4 className="contenedor__descripcion">Descripción: {descripcion}</h4>
    </div>
  )
}; export default CardDetalle;
