import { Component } from '@angular/core';

@Component({
    selector:'c1',
    templateUrl:'./component1.component.html',
    styleUrls:['./component1.component.css']
})

export class Component1Component{
    nombre:string = "Hiago";
    apelido1:string = "Koziel";
    apelido2:string = "Rahmig";

    numeroAleatorio:number = Math.random();

    colores:string[] = ["Rojo", "Amarillo", "Naranja", "Lima"];

    frutas = [
        {
            id:1233,
            nombre: "manzana",
            precio:1.3,
            procedencia:"Lleida"
        },
        {
            id:2567,
            nombre: "plátano",
            precio:1.7,
            procedencia:"Canarias"
        },
        {
            id:1563,
            nombre: "limón",
            precio:0.8,
            procedencia:"Tarragona"
        },
        {
            id:2166,
            nombre: "melocotón",
            precio:1.7,
            procedencia:"Lleida"
        }];
}