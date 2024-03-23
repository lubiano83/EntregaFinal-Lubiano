/* useOrder */

import { useState } from "react";
import { writeBatch, collection, documentId, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../services";
import { useCart } from "./useCart";
import { useBuyer } from "./useBuyer";

export const useOrder = () => {

    const [loading, setLoading] = useState(false);
    const {cart, clearCart } = useCart();
    const {objOrder} = useBuyer();
    const [orderCreated, setOrderCreated] = useState(false);
    const [newOrderId, setNewOrderId] = useState(null);
  
    const createOrder = async () => {
        setLoading(true)
        try{
          const ids = cart.map((item) => item.id);
          const productRef = collection(db, "PRODUCTOS");
          const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(), "in", ids)));
            const {docs} = productsAddedFromFirestore;
    
            const outOfStock = [];
            const batch = writeBatch(db);
    
            docs.forEach((doc) => {
              const dataDoc = doc.data();
              const stockDB = dataDoc.stock;
              const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
              const prodQuantity = productsAddedToCart?.cantidad;
    
              if(stockDB >= prodQuantity){
                // actualizar
                batch.update(doc.ref, {stock: stockDB - prodQuantity});
              } else {
                outOfStock.push({id: doc.id, ...dataDoc});
              }
            })
    
            if(outOfStock.length === 0){
              await batch.commit();
              const orderRef = collection(db, "orders");
              const orderAdded = addDoc(orderRef, objOrder);
              const orderId = (await orderAdded).id;
              console.log(`El Id de su Orden es: ${orderId}`);
              setNewOrderId(orderId)
              clearCart();
              setOrderCreated(true);
            } else {
              console.log("Hay productos que estan fuera de Stock...")
            }
        } catch(error){
          console.log(error)
        } finally{
          setLoading(false)
        }
      }

    return {createOrder, loading, orderCreated, newOrderId}
}
