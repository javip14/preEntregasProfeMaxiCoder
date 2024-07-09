export const productos = [
    {
        id: 1,
        nombre: "Harry Potter",
        precio: 150,
        imagen: "./img/hp1.png",
        categoria: "Harry Potter"
    },
    {
        id: 2,
        nombre: "Adobe Illustrator",
        precio: 100,
        imagen: "./img/ai.png",
        categoria: "Diseño"
    },
    {
        id: 3,
        nombre: "Adobe Photoshop",
        precio: 50,
        imagen: "./img/ps.png",
        categoria: "Diseño"
    },
    {
        id: 4,
        nombre: "Fat Homer",
        precio: 50,
        imagen: "./img/homer1.png",
        categoria: "Simpsons"
    },
    {
        id: 5,
        nombre: "Hidding Homer",
        precio: 50,
        imagen: "./img/homer2.png",
        categoria: "Simpsons"
    },
    {
        id: 6,
        nombre: "Super Homer",
        precio: 350,
        imagen: "./img/homer3.png",
        categoria: "Simpsons"
    },
    {
        id: 7,
        nombre: "Maestro Roshi",
        precio: 350,
        imagen: "./img/db1.png",
        categoria: "Dragon Ball Z"
    },
    {
        id: 8,
        nombre: "Cell & Gokú",
        precio: 150,
        imagen: "./img/db2.png",
        categoria: "Dragon Ball Z"
    }
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
