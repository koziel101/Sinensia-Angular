import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';

const ALUMNOS:Alumno[] = [
  new Alumno("Pepín","Gálvez","Ridruejo",12,new Date(2019,11,14)),
  new Alumno("Honorio","Martín","Salvador",8,new Date(2019,11,20)),
  new Alumno("Carlota","Cifuentes","Badimóm",6,new Date(2019,11,20)),
  new Alumno("Anna","Roca","Vilagut",10,new Date(2019,11,18)),
  new Alumno("Fausto","Giró","Beltrán",14,new Date(2019,11,20)),
  new Alumno("José Ramón","Morales","Badía",11,new Date(2020,11,20)),
  new Alumno("Hernesto","Kaizer","Tertulio",2,new Date(2020,3,21)),
  new Alumno("Marcós","Andrés","Mariño",0,new Date(2019,11,26)),
  new Alumno("Sebastián","Cortés","Arderiu",17,new Date(2019,11,20)),
  new Alumno("Martin","Held", null,4,new Date(2019,11,24)),
  new Alumno("Gemma","Capmany","Prats",7,new Date(2020,11,18))
]; 

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  getByFaltas(faltas:number):Alumno[]{
    return ALUMNOS.filter(x => x.faltas >= faltas);
  }

  getDosSemanasToEnd():Alumno[]{
  
    return ALUMNOS.filter(x => {
      let diffMillisecons = Math.abs(x.fechaFinal.getTime() - new Date().getTime());
      let diffDays = Math.ceil(diffMillisecons / (1000 * 3600 * 24));
      console.log(diffDays);
      return diffDays <= 14;
    });
  }
}
