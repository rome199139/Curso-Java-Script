//Funciones Anonimas 
// esta afecta el objeto local
/*var a = 10;
console.log(a);
function cambiarA(){
    a = 20;
        //return a;
}    
    //console.log(a);

function prueba(){
    
}

cambiarA();
console.log(a);*/


//ahora si es anonima
(function(){
    var a = 10;
    console.log(a);
    function cambiarA(){
        a = 20;
    }
    cambiarA();    
    console.log(a);
})
();

//otra opcion

function ejecutarFuncion(fn){
    if(fn()== 1){
        return true;        
    }else{
        return false;
    }    
};

console.log(
    ejecutarFuncion(function(){
        console.log("Funcion anonima ejecutada");
        return 2;    
})
);
