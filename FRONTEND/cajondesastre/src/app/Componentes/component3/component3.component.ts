import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  celsius:number = 10;
  fahrenheit:number = undefined;
  kelvin:number = undefined;

  ngOnInit() {
    this.refresh();
  }

  refresh(): void{
    this.fahrenheit = (this.celsius * 1.8) + 32; 
    this.kelvin = this.celsius + 273.15;
  }
}