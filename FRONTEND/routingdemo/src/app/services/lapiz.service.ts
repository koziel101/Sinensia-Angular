import { Injectable } from '@angular/core';
import { Lapiz } from '../model/lapiz';

const ESTUCHE: Map<number, Lapiz> = new Map<number, Lapiz>(
  [
    [1, new Lapiz(1, "Lapiz 1", 4.4, new Date(1999, 13, 13))],
    [2, new Lapiz(2, "Lapiz 2", 5.6, new Date(1999, 3, 4))],
    [3, new Lapiz(3, "Lapiz 3", 7.4, new Date(1999, 5, 6))],
    [4, new Lapiz(4, "Lapiz 4", 2.6, new Date(1999, 7, 8))]
  ]

);

@Injectable({
  providedIn: 'root'
})
export class LapizService {

  create(lapiz: Lapiz): void {
    ESTUCHE.set(lapiz.codigo, lapiz);
  }

  read(codigo: number): Lapiz {
    let lapis: Lapiz = ESTUCHE.get(codigo);
    return lapis;
  }

  update(lapiz: Lapiz): void {
    ESTUCHE.set(lapiz.codigo, lapiz);
  }

  delete(codigo: number): void {
    ESTUCHE.delete(codigo);
  }

  getAll(): Lapiz[] {
    let lapices: Lapiz[] = [];
    let keys = Array.from(ESTUCHE.keys());

    for (let key of keys) {
      lapices.push(ESTUCHE.get(key));
    }

    return lapices;
  }

}
