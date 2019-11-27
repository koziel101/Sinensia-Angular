import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  precioBase:number = 10.0;

  pizzas:any[] = [
    {
      nombre: "margarita",
      precio: 2
    },
    {
      nombre: "pepperoni",
      precio: 2
    },
    {
      nombre: "hawaiana",
      precio: 4
    },
    {
      nombre: "atun",
      precio: 3
    },
    {
      nombre: "sinensia",
      precio: 10
    }
  ];

  selectedPizza:any = undefined;
  dobleQueso:boolean = undefined;
  numeroPersonas:number = undefined;

  precioFinal:number = undefined;

  ngOnInit() {

    // Inicializamos a una configuración de pizza standard

    this.selectedPizza = this.pizzas[0];
    this.numeroPersonas = 2;
    this.dobleQueso = false;

    this.calculatePrice();

  }

  calculatePrice(){
    let suplementoQueso = (this.dobleQueso) ? 5 : 0;
    let precioComensales = this.numeroPersonas * 5;
    let precioPizza = this.selectedPizza.precio;
    this.precioFinal = this.precioBase + suplementoQueso + precioComensales + precioPizza;
  }

}
