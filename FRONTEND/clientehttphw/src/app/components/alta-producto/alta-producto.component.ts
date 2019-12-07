import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})

export class AltaProductoComponent {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) { }

  crear() {
    this.productoService.create(this.producto).subscribe(data => {
      console.log(data);
      this.producto = new Producto(); //Voltamos a por outro camarero
    });
  }
}
