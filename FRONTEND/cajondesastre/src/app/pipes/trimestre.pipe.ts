import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimestre'
})
export class TrimestrePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {

    /* let caracter = "";
    if(args[0] === "ingles"){
      caracter = "Q"
    } else{
      caracter = "T"
    } */

    let caracter = (args[0] === "ingles") ? "Q" : "T";

    //TODO Calcular el trimestre a partir de la fecha

    let mes = value.getMonth();
    mes++;

    // "1T", "2T"
    return Math.ceil((value.getMonth() + 1) / 3) + caracter;
  }

}
