import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscador'
})
export class AsteriscadorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let numeroVeces = Number(args[0]);
    let caracter:string = args[1];
    let caracteres = caracter.repeat(numeroVeces);

    return caracteres + value + caracteres;

    //return "*".repeat(numeroAsteriscos) + value + "*".repeat(numeroAsteriscos);
  }

}
