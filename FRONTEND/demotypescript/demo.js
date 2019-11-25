var a = 100;
a = 8;
var nombre = "Pepin";
var numero = 23;
var descartalogado = true;
function doSomething() {
    return 30;
}
numero = doSomething();
var numeros = [34, 5, 7, 97];
var cosasVarias = [23, true, "cierto"];
var cualquierCosa = true;
cualquierCosa = "teste";
function hazAlgo(p1, p2) {
    return "Funciona";
}
hazAlgo(32, true);
//Parametro optional "?"
function optionalParam(nombre, disponible) {
    //function optionalParam(nombre:string, disponible:boolean = true): string{
    return "text string";
}
optionalParam("Pepin", true);
optionalParam("Pepin");
