import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

const URL = "https://restcountries.eu/rest/v2/";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(URL + "all");
  }

  getByRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(URL + "region/" + region);
  }

  getByCode(codigo: string): Observable<Pais> {
    return this.http.get<Pais>(URL + "alpha/" + codigo);
  }
}
