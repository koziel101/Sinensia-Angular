import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  nombre:string = "Pepin";
  calculo:number = 42;
  mayorEdad:boolean = false;

  fecha:Date = new Date;


  
  elementoSeleccionado:string = "HARDWARE";
  opciones:string[] = ["SOFTWARE", "HARDWARE", "CONSUMIBLES"];

  sistemaNotificacion:string = "email";

  ngOnInit() {
    this.calcularCaracteres();
  }

  numeroCaracteres:number = undefined;
  calcularCaracteres(): void{
    this.numeroCaracteres = this.nombre.length;
  }

}
