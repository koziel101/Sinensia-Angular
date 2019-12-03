import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

const PATH_BASE = "https://pedi-gest.herokuapp.com/api";
const URL = PATH_BASE + "/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(URL);
  }
}
