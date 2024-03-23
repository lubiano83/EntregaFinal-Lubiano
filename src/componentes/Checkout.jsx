/* Checkout */

import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { writeBatch, collection, documentId, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../services";
import Boton from "./Boton";
import { Link } from "react-router-dom";
import Titulo from "./Titulo";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {

  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const {cart, totalQuantity, sacarPrecioTotal, clearCart} = useCart();
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

  const total = sacarPrecioTotal();

  const createOrder = async () => {
    setLoading(true)
    try{
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
          console.log(`El Id de su Orden es: ${(await orderAdded).id}`);
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

  if(loading){
    return <Titulo label="Se esta generando su Orden..."/>
  }

  if(orderCreated){
    return <Titulo label="La Orden fue creada correctamente..."/>
  }

  return (
        
        <section id="Checkout">
          <Titulo label="Datos de Envio:"/>
          <CheckoutItem type="name" name="Nombre" label="Ingrese su Nombre" handleInputChange={handleInputChange}/>
          <CheckoutItem type="mail" name="Email" label="Ingrese su Mail" handleInputChange={handleInputChange}/>
          <CheckoutItem type="address" name="Dirección" label="Ingrese su Dirección" handleInputChange={handleInputChange}/>
          <CheckoutItem type="phone" name="Telefono" label="Ingrese su Telefono" handleInputChange={handleInputChange}/>

            <div className="CheckoutItem__botones">
              <Link to={"/"}>
                <Boton label="Volver" />
              </Link>
              <Link to={"/compra"}>
                <Boton label="Pagar" type="submit" name="submit" handleClick={createOrder} />
              </Link>
            </div>
        </section>
  )
}; export default Checkout;


