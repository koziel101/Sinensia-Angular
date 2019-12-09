import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/model/pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  /* regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  selectedRegion: string = "Africa" */

  regions: Region[];
  selectedRegion: Region;
  paises: Pais[] = [];

  region: string = "";

  constructor(private paisesService: PaisService) {
    this.regions = [
      { name: 'africa', code: 'africa' },
      { name: 'americas', code: 'americas' },
      { name: 'asia', code: 'asia' },
      { name: 'europe', code: 'europe' },
      { name: 'oceania', code: 'oceania' }
    ];
  }

  ngOnInit() {
    this.paisesService.getByRegion(this.region).subscribe(data => {
      this.paises = data;
      console.log(data);
    });
  }

  buscarPaises() {
    console.log("Buscamos paises de " + this.selectedRegion.name);
    this.paisesService.getByRegion(this.selectedRegion.name).subscribe(data => {
      this.paises = data;
      console.log(data);
    });

  }
}
