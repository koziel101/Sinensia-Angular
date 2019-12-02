import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';
import { Cliente } from './model/cliente';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
import { Producto } from './model/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  camareros: Camarero[] = undefined;
  clientes: Cliente[] = undefined;
  productos: Producto[] = undefined;

  constructor(private camareroService: CamareroService, private clienteService: ClienteService, private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.camareroService.getlAll().subscribe(datos => {
      //Aquí es cuando llegano los datos definitivamente
      console.log(datos);
      this.camareros = datos;
    });

    this.clienteService.getAll().subscribe(datos => {
      this.clientes = datos;
    });

    this.productoService.getlAll().subscribe(datos => {
      this.productos = datos;
    })
  }
}
