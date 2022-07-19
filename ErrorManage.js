//Manejo de Errores

try{
    var a = 100;
    throw "error indicido manualmente";
    console.info("el valor de a es : " + a);
}catch(e){
    console.warn(e);
}

try{
    var a = 100;
    console.info("el valor de a es : " + a);
}finally{
    console.info("Finalmete");
}


try{
    throw {
        nombreerror:"error de tipo 1",
        accion:"corrar por su vida",
        codigoerror:"569-edrFF$%"
    }
    console.info("esta parte nunca se ejecuta");
}catch(e){
    console.warn(e);
    console.warn(e.nombreerror);
    console.warn(e.accion);
    console.warn(e.codigoerror);
    console.warn("Esto tambien hace parte del catch");
}

