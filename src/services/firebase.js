/* Firebase */

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./index";
import { createProductFromFirestore } from "../adapters/productAdapter";

export const getProducts = (categoryId) => {
    const collectionRef = !categoryId ? collection(db, "PRODUCTOS") : query(collection(db, "PRODUCTOS"), where("categoria", "==", categoryId));

    return getDocs(collectionRef)
        .then((respuesta) => {
            const productAdapted = respuesta.docs.map((doc) => {
                return createProductFromFirestore(doc)
            })
            return productAdapted;
        })
        .catch((error) => {
            return error
        })
}