//formato JSON 

var objectJS = {
    nombre:"Luis Arturo",
    edad:30
};

console.info(objectJS);

var jsonString = JSON.stringify(objectJS);

console.info(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);
console.info(objetoDesdeJson);

console.info(objetoDesdeJson.nombre);
console.info(objetoDesdeJson.edad);

