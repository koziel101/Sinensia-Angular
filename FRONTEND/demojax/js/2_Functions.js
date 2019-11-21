// Vamos a probar el setTimeout

//Metodo 1
var accion = function(){
    console.log("3 segundos");
}
setTimeout(accion, 3000);

//Metodo 2
setTimeout(function(){
    console.log("5 segundos");
}, 5000);

//Metodo 3
setTimeout(()=>{
    console.log("7 segundos")
},7000);

// =============================

var convert = (texto1, texto2) => texto2.toUpperCase() + texto1.toLowerCase();

var convert2 = function(texto1, texto2){
    return texto2.toUpperCase() + texto1.toUpperCase();
}

setInterval(() =>{
    //console.log(Math.random());
}, 500);