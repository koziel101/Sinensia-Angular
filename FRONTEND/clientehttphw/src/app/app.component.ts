import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';
import { Cliente } from './model/cliente';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
import { Producto } from './model/producto';
import { Pedido } from './model/pedido';
import { PedidoService } from './services/pedido.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  camareros: Camarero[] = undefined;
  clientes: Cliente[] = undefined;
  productos: Producto[] = undefined;
  pedidos: Pedido[] = undefined;

  constructor(private camareroService: CamareroService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private pedidoService: PedidoService) {
  }

  ngOnInit(): void {
    this.camareroService.getAll().subscribe(datos => {
      //Aquí es cuando llegano los datos definitivamente
      this.camareros = datos;
    });

    this.clienteService.getAll().subscribe(datos => {
      this.clientes = datos;
    });

    this.productoService.getAll().subscribe(datos => {
      this.productos = datos;
    })

    this.pedidoService.getAll().subscribe(datos => {
      console.log("Pedidos:");
      console.log(datos);
      this.pedidos = datos;
    })
  }
}
