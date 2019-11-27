import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza',
  templateUrl: './component-pizza.component.html',
  styleUrls: ['./component-pizza.component.css']
})
export class ComponentPizzaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pizzaTotal: number = 10;
  pizzas: string[] = ["Basica", "Margarita (+2 euros)", "Pepperoni (+2 euros)", "Havaiana (+4 euros)", "Atun (+3 euros)", "Sinensia (+10 euros)"];
  pizzaSelecionada: string = this.pizzas[1];
  dobleQueso:boolean = false;
  qntdPessoas:number = 0;

  finalizarPedido() {
    this.pizzaTotal = 10;
    
    //Calculando sabor da Pizza
    switch (this.pizzaSelecionada) {
      case "Margarita (+2 euros)":
        this.pizzaTotal = this.pizzaTotal + 2;
        break;
      case "Pepperoni (+2 euros)":
        this.pizzaTotal = this.pizzaTotal + 2;
        break;
      case "Havaiana (+4 euros)":
        this.pizzaTotal = this.pizzaTotal + 4;
        break;
      case "Atun (+3 euros)":
        this.pizzaTotal = this.pizzaTotal + 3;
        break;
      case "Sinensia (+10 euros)":
        this.pizzaTotal = this.pizzaTotal + 10;
        break;
    }
    
    if(this.dobleQueso){
      this.pizzaTotal = this.pizzaTotal + 5;
    }
    
    this.pizzaTotal = Number(this.pizzaTotal) + Number(this.qntdPessoas);
  }
}
