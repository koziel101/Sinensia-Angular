import { Camarero } from './camarero';
import { LineasPedido } from './lineasPedido';

export class Pedido {

    camarero: Camarero;
    fecha: Date;
    id: number;
    lineasPedido: LineasPedido[];
    mesa: number;

    /* {
        "camarero": {
          "codigo": 0,
          "nombre": "string"
        },
        "fecha": "2019-12-03T18:12:50.694Z",
        "id": 0,
        "lineasPedido": [
          {
            "cantidad": 0,
            "precio": 0,
            "producto": {
              "categoria": "CAFE",
              "codigo": 0,
              "descatalogado": true,
              "descripcion": "string",
              "fechaAlta": "2019-12-03T18:12:50.694Z",
              "nombre": "string",
              "precio": 0
            }
          }
        ],
        "mesa": 0
      } */

}