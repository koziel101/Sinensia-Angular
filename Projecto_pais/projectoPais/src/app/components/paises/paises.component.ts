import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';

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

  
  constructor() {
    this.regions = [
      { name: 'Africa', code: 'Africa' },
      { name: 'Americas', code: 'Americas' },
      { name: 'Asia', code: 'Asia' },
      { name: 'Europe', code: 'Europe' },
      { name: 'Oceania', code: 'Oceania' }
    ];
  }

  ngOnInit() {
  }

  public Region = new class {

  }
}
