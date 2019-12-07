import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
import { PedidoService } from './services/pedido.service';
import { CamareroService } from './services/camarero.service';
import { AltaCamareroComponent } from './components/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/listado-camarero/listado-camarero.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // PrimeNG

//Modulos de PrimeNG
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListadoCamareroComponent,
    ListadoProductoComponent,
    AltaProductoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [CamareroService, ClienteService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
