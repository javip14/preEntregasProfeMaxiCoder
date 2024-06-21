let productosSupermercado = [];
let categoriasContador = {};

let nombreProductoAgregado;
let categoriaProductoAgregado;
let precioProductoAgregado;

do {
    nombreProductoAgregado = prompt("Ingresa el nombre del producto que quieres registrar. (Manzana, huevos, leche, etc) Para terminar, escribe \"SALIR\".");

    if (nombreProductoAgregado.toUpperCase() !== "SALIR") {
        categoriaProductoAgregado = prompt("Ingresa la categoría del producto(Frutas, lacteos, cereales, etc)");
        precioProductoAgregado = parseFloat(prompt("Ingresa el precio del producto en $ CLP"));

        let productoAgregado = {
            nombre: nombreProductoAgregado,
            categoria: categoriaProductoAgregado,
            precio: precioProductoAgregado
        }
        productosSupermercado.push(productoAgregado);

        if (categoriasContador[categoriaProductoAgregado]) {
            categoriasContador[categoriaProductoAgregado]++;
        } else {
            categoriasContador[categoriaProductoAgregado] = 1;
        }
    }

} while (nombreProductoAgregado.toUpperCase() !== "SALIR");

function calcularTotalGastos() {
    return productosSupermercado.reduce((acc, producto) => acc + producto.precio, 0);
}

function calcularPromedioGastos() {
    let total = calcularTotalGastos();
    let promedio = total / productosSupermercado.length;
    return parseFloat(promedio.toFixed(2));
}

console.log("Productos del supermercado: ", productosSupermercado);
console.log("Promedio de los precios de los productos: ", calcularPromedioGastos());
console.log("Cantidad de veces de cada categoría: ", categoriasContador);
alert("Gastaste en total: $" + calcularTotalGastos() + " pesos");
