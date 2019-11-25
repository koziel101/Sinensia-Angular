var a = 100;

a = 8;

var nombre:string = "Pepin";
var numero:number = 23;
var descartalogado:boolean = true;

function doSomething():number{
    return 30;
}

numero = doSomething();

var numeros: number[] = [34, 5, 7, 97];
var cosasVarias: any[] = [23, true, "cierto"];
var cualquierCosa: any = true;
cualquierCosa = "teste";

function hazAlgo(p1:number, p2:boolean):string{
    return "Funciona";
}

hazAlgo(32, true);

//Parametro optional "?"
function optionalParam(nombre:string, disponible?:boolean): string{
//function optionalParam(nombre:string, disponible:boolean = true): string{
    return "text string";
}

optionalParam("Pepin", true);
optionalParam("Pepin");

