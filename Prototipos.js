//Prototipos
function Persona(){
    this.nombre = "Luis Arturo";
    this.apellido = "Romero G";
    this.edad = "50";
    this.pais = "Colombia";   
}

Persona.prototype.imprimirInfo = function(){
    console.info(this.nombre + " " + this.apellido + " su edad es de: (" + this.edad + ") años");
}

var lucho = new Persona();
console.info(lucho);
console.info(lucho.imprimirInfo());

a = "prueba";

Number.prototype.esPositivo = function(){
    if(this > 0){
        return true;
    }else{
        return false;
    }
}