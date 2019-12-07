import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AltaCamareroComponent } from './components/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/listado-camarero/listado-camarero.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "altaCamareros", component: AltaCamareroComponent },
  { path: "listadocamareros", component: ListadoCamareroComponent },
  { path: "listado", component: ListadoCamareroComponent },
  { path: "altaProductos", component: AltaProductoComponent },
  { path: "listadoProducto", component: ListadoProductoComponent },
  { path: "**", component: HomeComponent } // Provisional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
