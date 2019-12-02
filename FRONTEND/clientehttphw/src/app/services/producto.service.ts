import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getlAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>("https://pedi-gest.herokuapp.com/api/productos");
  }
}
