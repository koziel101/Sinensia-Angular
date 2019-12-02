import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  camareros: Camarero[] = undefined;
  constructor(private camareroService: CamareroService) {
  }

  ngOnInit(): void {
    this.camareroService.getlAll().subscribe(datos => {
      //Aquí es cuando llegano los datos definitivamente
      console.log(datos);

      this.camareros = datos;

    });
  }

}
