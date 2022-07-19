//Polimorfismo
/*
console.info("Polimorfismo");

function determinaDato(a){
    if(a === undefined){
        console.log("El dato es undefined ... no se que hacer");
    }
    if( typeof a === "number"){
        console.log("El dato es un numero ... y puedo hacer operaciones numericas con el");
    }
    if(typeof a === "string"){
        console.log("El dato es un texto ... y puedo hacer operaciones de tipo texto con el");
    }
    if(typeof a === "object"){
        console.log("El dato es un objeto ... y puedo hacer cualquier cosa con el");
        if (a instanceof Number){
            console.log("El dato es un objeto numerico ... ");
        }
    }
}

determinaDato();
determinaDato(50)
determinaDato("Persona");
determinaDato({nombre: "Persona"});

var b = new Number(3);
console.log(b);
determinaDato(b);
*/

//Cuidado funciones y sus contextos

console.info("Cuidado Funciones y sus contextos");

function crearFunciones(){
    var arr = [];    
    for(var numero = 1; numero <= 5; numero++){
        arr.push(
            (function(numero){
                return function(){
                    console.log(numero);
                }
            })(numero)
        );
        }
    return arr;
}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();






















