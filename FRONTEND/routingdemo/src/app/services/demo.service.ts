import { Injectable } from '@angular/core';
import { Lapiz } from '../model/lapiz';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  getRefran():string{

    let l1 = new Lapiz(123, "Lapiz B2", 23);
    
    return "Quien madruga Dios le ayuda";
  }
  
}
