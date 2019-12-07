import { Camarero } from './camarero';
import { LineasPedido } from './lineasPedido';

export class Pedido {
  camarero: Camarero;
  fecha: Date;
  id: number;
  lineasPedido: LineasPedido[];
  mesa: number;
}