//Argumentos
console.log("Argumentos");

var arguments = 10;
function miFuncion(a, b, c, d){
    if(arguments.length!==4){
        console.error("la funcion necesita 4 argumentos");
        alert("la funcion necesita 4 argumentos");
        return;
    }
    console.log(a+b+c+d);
}
miFuncion(10,20,30,40);

//Sobrecarga
console.log("Sobrecarga");

function crearProducto(nombre, precio){
    nombre = nombre || "Sin nombre",
    precio = precio || 0;
    console.log("Producto:", nombre, "Precio:", precio);
}

function crearProducto100(nombre){
    crearProducto(nombre, 100);

}

function crearProductoCamisa(precio){
    crearProducto("Camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("Esfero");
crearProductoCamisa(125);



