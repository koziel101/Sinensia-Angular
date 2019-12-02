import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  constructor(private http: HttpClient) { }

  getlAll(): Observable<Camarero[]> {
    return this.http.get<Camarero[]>("https://pedi-gest.herokuapp.com/api/camareros");
  }

}
