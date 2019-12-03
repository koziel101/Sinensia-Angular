import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("https://pedi-gest.herokuapp.com/api/clientes");
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("https://pedi-gest.herokuapp.com/api/clientes", cliente);
  }
}
