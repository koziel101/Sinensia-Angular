import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';
const URL = "https://pedi-gest.herokuapp.com/api/camareros";

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Camarero[]> {

    return this.http.get<Camarero[]>(URL);
  }

  create(camarero: Camarero): Observable<Camarero> {

    return this.http.post<Camarero>("https://pedi-gest.herokuapp.com/api/camareros", camarero);

  }
}
