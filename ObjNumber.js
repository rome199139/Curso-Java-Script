//Objeto Number

/*
var a = 10.45639823;
var b = new Number(10);
console.info(a);
console.info(b);


a.toFixed(3); //convierte a 3 decimales
console.info("tofixed", a.toFixed(3));
console.info("toString", a.toString());
console.info("toPresicion", a.toPrecision(7));
a = a * "string";
console.info(a);

var b = new Number("2010");
console.info(b.valueOf());
b = new Number("2010e");
console.info(b.valueOf());
*/

// Objeto Booleano

var a = true;
//var a = new Boolean(0); al tratarlo como un objeto no lo puedo validar como tal con un if tal cosa
console.info(a.valueOf());
if (a){
    console.warn("me imprime", a)
}

