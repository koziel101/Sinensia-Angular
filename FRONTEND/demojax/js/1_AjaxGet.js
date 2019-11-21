console.log("Funciona!!");

//Vamos a hacer un request a un servidor utilizando el objeto XMLHttpRequest

var request = new XMLHttpRequest();

// 1) "Programamos" el request

request.onreadystatechange = function(){

    if(request.readyState == 2){
        console.log("Estado 2");
    }
    
    if(request.readyState == 3){
        console.log("Estado 3");
    }
    // if response is complete
    // Cuando nos llega todo...
    if(request.readyState == 4){
        console.log(request.responseText);
    }
}

// 2) Enviamos el request

request.open("GET", "https://restcountries.eu/rest/v2/name/china");
request.send(null);





