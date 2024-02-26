/* ItemList */

import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div className="contenedor__producto">
            {
                productos.map(prod => {
                    return (
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}; export default ItemList