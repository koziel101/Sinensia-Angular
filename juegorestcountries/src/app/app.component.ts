import { Component, OnInit } from '@angular/core';
import { Pais } from './model/pais';
import { PaisService } from './services/pais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  visitados: string[] = [];
  estancia: Pais = undefined;
  jugable: boolean = true;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getByCode("ESP").subscribe(data => {
      this.visitados = ["ESP"];
      this.jugable = true;
      this.estancia = data;
    });
  }

  viajar(codigoDestino: string) {

    if (this.visitados.includes(codigoDestino)) {
      this.jugable = false;
    } else {
      this.paisService.getByCode(codigoDestino).subscribe(data => {
        this.estancia = data;
        this.visitados.push(codigoDestino);
      });
    }

  }
}
