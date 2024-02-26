/* asyncMock */

const PRODUCTOS = [
    {
      id: "1",
      img: "./src/img/calcetin-nox-negro-rojo.webp",
      categoria: "Calcetines",
      marca: "Nox",
      descripcion: "Negro-Rojo",
      stock: 20,
      precio: 9990,
    },
    {
      id: "2",
      img: "./src/img/grip-wilson.webp",
      categoria: "Grips",
      marca: "Wilson",
      descripcion: "Blanco",
      stock: 100,
      precio: 2990,
    },
    {
      id: "3",
      img: "./src/img/pala-nox.webp",
      categoria: "Palas",
      marca: "Nox",
      descripcion: "ML10 Pro Cup Luxury 2023 By Miguel Lamperti",
      stock: 5,
      precio: 259990,
    },
    {
      id: "4",
      img: "./src/img/pelota-padel-m_m.webp",
      categoria: "Pelotas",
      marca: "M/M",
      descripcion: "Pelotas de Padel",
      stock: 50,
      precio: 5990,
    },
    {
      id: "5",
      img: "./src/img/protector-nox.webp",
      categoria: "Protectores",
      marca: "Nox",
      descripcion: "Protector de Pala Ventus Verde-Negro",
      stock: 10,
      precio: 7990,
    }
];
  
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTOS);
        },500)
    })
}