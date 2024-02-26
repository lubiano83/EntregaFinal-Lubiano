/* ItemDetail */

import ItemCount from "./ItemCount"

const ItemDetail = () => {
  return (
    <article className="ItemDetail">
        <ItemCount inicial={1} stock={10} agregar={(cantidad) => console.log(`Cantidad Agregada: `, cantidad)} />
    </article>
  )
}

export default ItemDetail
