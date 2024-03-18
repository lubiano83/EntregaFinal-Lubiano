/* ItemList */

import Item from "./Item";
import { memo } from "react";

const ItemList = ({ productos }) => {
    console.log("render")

    return (
        <div id="ItemList">
            {
                productos.map(productos => {
                    return (
                        <Item key={productos.id} {...productos} />
                    )
                })
            }
        </div>
    )
}; export default memo(ItemList);