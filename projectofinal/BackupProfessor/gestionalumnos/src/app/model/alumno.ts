export class Alumno {

    nombre:string;
    apellido1:string;
    apellido2:string;
    faltas:number;
    fechaFinal:Date;

    constructor(nombre:string,apellido1:string,apellido2:string,faltas:number,fechaFinal:Date){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.faltas = faltas;
        this.fechaFinal = fechaFinal;
    }

}
