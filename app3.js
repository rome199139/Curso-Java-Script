/*function obtenerAleatorio(){

    return Math.random();

}

var numero;
numero = obtenerAleatorio();

console.log(numero);


function booleano(){

    if(numero > 0.5){
        return true;
    }
    else{
        return false;
    }

}

if(booleano()){
    console.log("es mayor a 0.5");
}
else{
    console.log("es menor a 0.5");
}

console.log(booleano());


function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    } 
}

var persona = crearPersona("Luis", "Romero");
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

function crearObjeto(){
    return crearPersona("Maria", "Paz");
     
}
var nuevoObjeto = crearObjeto();
console.log(nuevoObjeto);

function creaFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);
        return function(){
            console.log("return Segunda funcion")
        }
    }
}

var nuevaFuncion = creaFuncion();
var segundafuncion = nuevaFuncion(persona.nombre);
segundafuncion();*/

// metodos y THIS
/*var nombre = "Maria Paz";

var persona = {
    nombre: "Luis",
    apellido: "Romero",
    imprimirnombre: function(){
        //console.log("Nombre completo")
        console.log("Nombre global es : " + nombre);
        console.log("Nombre de la funcion es : " + this.nombre + " " + this.apellido);
    },
    direccion:{
        pais: "Colombia",
        obtenerPais: function(){
            var self = this;
            var nuevaDireccion = function(){
                console.log(self);
                console.log("La direccion esta en el pais de : " + self.pais);
            }
            nuevaDireccion();
        }
    }
};

persona.imprimirnombre();
persona.direccion.obtenerPais();*/

// Palabra reservada NEW

function Persona(){
    this.nombre = "Arturo";
    this.apellido = "Garzon";
    this.edad = 50;
    this.imprimirDatosPersona = function(){
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }
}

persona = new Persona();

console.log(persona);
console.log(persona.imprimirDatosPersona());

// lo mismo pero pasando parametros a la funcion

function PersonaParametros(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 42;
    this.imprimirDatosPersona = function(){
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }
}

personaParametro = new PersonaParametros("Diana", "Romero");
console.log(personaParametro);
console.log(personaParametro.imprimirDatosPersona());


