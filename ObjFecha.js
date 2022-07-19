//Objeto Fecha

var anio = "2020";
var mes = "04";
var dia = "05";
var hora = "17";
var min = "55";
var seg = "22";
var mili = "14";


var hoy = new Date();
console.info(hoy);
var fini = new Date(1);
console.info(fini);
var fFija = new Date(anio, mes, dia, hora, min, seg, mili);
console.info(fFija);

console.log(hoy.getFullYear());
//console.log(hoy.getUTCMonth());
console.log(hoy.getMonth());
console.log(hoy.getDay());
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());
console.log(hoy.getMilliseconds());

// momentjs.com

/*var inicio = new Date();
for(var i=1; i<= 15000; i++){
    console.info("por aqui voy haciendo algo....!")
}
var fin = new Date();
var duracion = fin.getTime()-inicio.getTime();
console.info(duracion);
console.info(duracion, "Milisegundos");
console.info( (duracion/100), "Segundos");*/
console.clear();

var fecha = new Date(2021,3,18);
console.info(fecha);
Date.prototype.SumarDias= function(dias){
    this.setDate(this.getDate()+dias);
    return this;
}
console.info(fecha.SumarDias(-5));

console.log(hoy.getFullYear());

Date.prototype.SumarAnios = function(anios){
    this.setFullYear(this.getFullYear()+anios);
    return this;
}

console.info(fecha.SumarAnios(21));


