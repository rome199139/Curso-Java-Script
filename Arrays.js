// Arreglos parte 1
/*
var arr = [5,4,3,2,1];

console.info(arr);
console.log(arr);

console.info(arr[0], arr[4], arr[5]);
arr.reverse(); // lo muestra al contrario
console.info(arr);

arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});

console.info(arr);

arr = arr.map(Math.sqrt);
console.info(arr);

arr = arr.join("|");
console.info(arr);

arr = arr.split("|");
console.info(arr);

arr.push("6");
arr.unshift("0");
console.info(arr);
console.info(arr.toString());

var elimine = arr.pop();
console.info(arr);
console.info(arr,elimine);

console.info(arr[3]);

var arr = [0,1,2,3,4,5,6];
arr.splice(1,1, "10", "20","30"); // borra posicion 1 e incluye los 3 valores desde esa posicion
console.info(arr);

var arr = [0,1,2,3,4,5,6];
arr.splice(1,0, "10", "20","30"); // no borra e incluye los 3 valores 
console.info(arr);

arr = arr.slice(0,2); //primer valor desde donde arranco y 2 parametro cuantas posiciones voy a cortar
console.info(arr);

arr = arr.slice(2,3); //primer valor desde donde arranco y 2 parametro cuantas posiciones voy a cortar
console.info(arr);
*/

//Arreglos parte 2

var arr = [
    true,
    {
        nombre: "Luis Arturo",
        apellido: "Romero G"
    },
    function(){
        console.log("estoy dentro de un arreglo");
    },
    function(persona){
        console.log(arr[1].nombre + " " + arr[1].apellido);
    },
    [
        "dario",
        "fernando",
        "diana",
        "marcela",
        [
            "Juan",
            "Pedro",
            "Dulcinea",
            function(){
                console.log(this);
            }
        ],
    ]
];

console.log(arr);
console.log(arr[0]);
arr[2]();
arr[3](arr[1]);
mostrar = arr[4][4][1];
console.log(mostrar);
var arr2 = arr[4][4];
arr2[1] = "Peter";
console.log(arr2);
console.log(arr);
arr2[3]();





