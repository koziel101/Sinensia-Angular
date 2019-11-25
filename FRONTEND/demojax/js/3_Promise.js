
// Al construtor de Promise se le tiene que passar una "executar function"
//Esta funcion ejecutora, a su vez tiene dos parametros que son el primero y el segundo..

var promesa1 = new Promise(function(primero, segundo){
    // voy a perder el tiempo...
    setTimeout(function(){
        if(Math.random() > 0.5){
            //La cosa ha ido bien...
            primero();
        } else {
            //La cosa ha ido mal...
            segundo();
        }
    },5000);
});

promesa1.then(function(){
    console.log("La cosa ha ido bien");
})
promesa1.catch(function(){
    console.log("La cosa ha ido mal");
})



