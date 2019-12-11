import { Component, OnInit } from '@angular/core';
import { Pais } from './model/pais';
import { PaisService } from './services/pais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  visitados: Pais[] = [];
  estancia: Pais = undefined;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getByCode("ESP").subscribe(data => {
      console.log(data);
      this.visitados.push(data);
      this.estancia = data;
    })
  }

  viajar(codigoDestino: string) {
    console.log(codigoDestino);
  }

}
