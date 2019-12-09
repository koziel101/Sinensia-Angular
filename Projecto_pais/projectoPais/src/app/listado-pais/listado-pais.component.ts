import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/pais.service';
import { Pais } from '../model/pais';

@Component({
  selector: 'app-listado-pais',
  templateUrl: './listado-pais.component.html',
  styleUrls: ['./listado-pais.component.css']
})
export class ListadoPaisComponent implements OnInit {

  paises: Pais[] = [];
  region: string = "europe";

  constructor(private paisesService: PaisService) { }

  ngOnInit() {
    this.paisesService.getByRegion(this.region).subscribe(data => {
      this.paises = data;
      console.log(data);
    });
  }

}
