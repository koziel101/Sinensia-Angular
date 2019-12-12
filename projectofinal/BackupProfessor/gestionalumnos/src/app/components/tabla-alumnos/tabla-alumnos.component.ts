import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  constructor(private alumnoService:AlumnoService) { }

  faltones:Alumno[] = [];
  aPuntoAcabar:Alumno[] = [];

  ngOnInit() {
  
      this.faltones = this.alumnoService.getByFaltas(8);
      this.aPuntoAcabar = this.alumnoService.getDosSemanasToEnd();
  }

}
