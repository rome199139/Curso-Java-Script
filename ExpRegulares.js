// Expresiones Regulares

var ExpReg1 = RegExp("la");
var texto = "Hola Mundo, 12345";
var ExpReg2 = /a/;

var arr = texto.match(ExpReg1);
console.info(arr);

var arr = texto.match(/a/);
console.info(arr);

var arr = texto.match(/^H/); // Alt + 94 - devuelve cadena si encontro primer caracter igual al enviado
console.info(arr);

var arr = texto.match(/^M/); // Alt + 94 - devuelve cadena si encontro primer caracter igual al enviado
console.info(arr);

var arr = texto.match(/o$/); //devuelve cadena si encontro ultimo caracter igual al enviado
console.info(arr);

var arr = texto.match(/a$/); //devuelve cadena si encontro ultimo caracter igual al enviado
console.info(arr);

var arr = texto.match(/.../); // devuelve cadena de caracteres indicada por los puntos
console.info(arr);

var arr = texto.match(/^..l/); // Alt + 94 - devuelve cadena no importa primer caracter mas los puntos
console.info(arr);

var arr = texto.match(/[0-9]/); // devuelve primer caracter numerico encontrado en el rango
console.info(arr);

var arr = texto.match(/[a-z]/); // devuelve primer caracter alfabetico encontrado en el rango (CaseSensitive)
console.info(arr);

var arr = texto.match(/[a-zA-Z]/); // devuelve primer caracter alfabetico encontrado en el rango (las dos)
console.info(arr);

var arr = texto.match(/^H[a-z]/); // devuelve caracteres que inician con H y luego primera letra
console.info(arr);

var arr = texto.match(/[aeiou].......$/); // devuelve ultimos caracteres segun el punto hasta encontrar una vocal
console.info(arr);

var arr = texto.match(/\s/); // devuelve primer caracter separador que encuente en el texto
console.info(arr);

var arr = texto.match(/\w/); // [a-zA-Z0-9]
console.info(arr);

var arr = texto.match(/\d/); // [0-9]
console.info(arr);

// m -> multilinea

var arr = texto.match(/m/i); // i -> insensible a mayus / minus
console.info(arr);

var arr = texto.match(/[aeiou]/g); // g -> todas apariciones
console.info(arr);

// Mozilla Regular Expression - page www





