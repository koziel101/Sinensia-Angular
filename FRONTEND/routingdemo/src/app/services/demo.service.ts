import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  getRefran():string{
    return "Quien madruga Dios le ayuda";
  }
  
}
