/* productAdapter */

export const createProductFromFirestore = (doc) => {
    const data = doc.data();

    const productAdapted = {
        id: doc.id,
        marca: data.marca,
        modelo: data.modelo,
        img: data.img,
        precio: data.precio,
        categoria: data.categoria,
        descripcion: data.descripcion,
        stock: data.stock
    }; return productAdapted
}