//TypeOff 
/*
function identifica(param){
    //console.info(typeof param);
    if(typeof param == "function"){
        param();        
    }else{
        console.info(param);
    }
}

identifica(1);
identifica("1");
identifica(true);
identifica(null);
identifica({});

function Persona(){
    this.nombre = "Luis";
    this.apellido = "Romero";
    this.edad = "50";
}

var obj = new Persona();

identifica(obj);
identifica(function(){console.log("soy anonima");});
*/
//instanceof

function identificaDos(param){
    console.info(typeof param);
    console.info(param instanceof Persona); // si es Persona devuelve true 
}

function Persona(){
    this.nombre = "Luis";
    this.apellido = "Romero";
    this.edad = "50";
}

var obj = new Persona();

identificaDos(obj); //devuelve true
identificaDos("obj"); //devuelve false




