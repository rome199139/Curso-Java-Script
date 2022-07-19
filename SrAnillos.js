//Juego Sr de los Anillos

function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100; // puntos vencer
    this.sp = 100; // magia restante
    this.curar = function(jugadorObjetivo){
        if(this.sp >= 40){
            this.sp -= 40;
            jugadorObjetivo.sp = jugadorObjetivo.sp + 20;
            // jugadorObjetivo += 20; -> otra notacion igual que arriba
        }else{
            console.info(this.nombre + " no tiene sp disponible");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }

    this.tirarFlecha = function(jugadorObjetivo){
        if(jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " ... Murio vilmente por un amigo !!!");
        }
        
        this.estado(jugadorObjetivo);
    }
};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);

