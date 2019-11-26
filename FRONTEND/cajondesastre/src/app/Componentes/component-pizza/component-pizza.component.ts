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
  pizzas: string[] = ["Margarita - 2", "Pepperoni - 2", "Havaiana - 4", "Atun - 3", "Sinensia - 10"];
  pizzaSelecionada: string = this.pizzas[0];

  finalizarPedido() {
    switch (this.pizzaSelecionada) {
      case "Margarita - 2":
        this.pizzaTotal += 2;
        break;
    }
  }
}
