// Objeto Match

var PI = Math.PI;
var E = Math.E;

console.info(PI);
console.info(E);

var num = 10.456789
console.info(num);
console.info(Math.round(num));
console.info(Math.round(num*100)/100);
console.info(Math.floor(num)); //devuelve entero sin decimales

var rnd = Math.random();
console.log(rnd);

function randomEntre(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.info(randomEntre(50,100));
console.info(Math.sqrt(25));
console.info(Math.pow(13,2));