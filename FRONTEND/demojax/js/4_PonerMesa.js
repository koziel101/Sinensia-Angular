var ponerMesa = new Promise (function(resolve, reject){

    setTimeout(function(){
        if(Math.random < 0.9){
            console.log("mp")
            resolve("Mesa puesta");
        }else{
            reject("Mesa sin poner");
        }
    }, 1000)
})

var recogerCuarto = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(Math,random() < 0.9){
            resolve("Cuarto recogido");
        } else{
            reject("Cuarto sin recoger")
        }
    }, 5000)
});

Promise.all([ponerMesa, recogerCuarto]).then(function(data){
    console.log(data[0]);
    console.log(data[1]);
})