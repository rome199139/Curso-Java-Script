//Objeto String
var a = new String("Luis Arturo Romero Garzon");

//console.log(a);
console.log(a.toLowerCase());
console.log(a.toUpperCase());
var i = a.indexOf("Romero");
console.log("la letra inicia en: ", i);

var i = a.lastIndexOf("m");
console.log("la ultima letra o esta en: ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);
 //mozilla javascript documetation

 document.writeln("hola mundo");
 document.writeln(a.italics());
 document.writeln(a.blink());
 document.writeln(a.bold());
 document.writeln(a.strike());

