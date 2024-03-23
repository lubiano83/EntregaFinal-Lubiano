/* useBuyer */

import { useState } from "react";
import { useCart } from "./useCart";

export const useBuyer = () => {

  const {cart, totalQuantity, sacarPrecioTotal} = useCart();
  const total = sacarPrecioTotal();

    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        mail: "",
        address: "",
        phone: ""
      })
    
      const handleInputChange = (type, value) => {
        setBuyerInfo({
          ...buyerInfo,
          [type]: value
        });
      };

      const objOrder = {
        buyer: {
          name: buyerInfo.name,
          mail: buyerInfo.mail,
          address: buyerInfo.address,
          phone: buyerInfo.phone
        },
        item: cart,
        totalQuantity,
        total,
        date: new Date()
      };

    return {buyerInfo, handleInputChange, objOrder}
};

