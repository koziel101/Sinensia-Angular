import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getByCode(code: string): Observable<Pais> {
    return this.http.get<Pais>("https://restcountries.eu/rest/v2/alpha/" + code);
  }
}
