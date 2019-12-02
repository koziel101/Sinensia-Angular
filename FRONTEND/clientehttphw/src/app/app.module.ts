import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamareroService } from './services/camarero.service';
import {HttpClientModule} from '@angular/common/http' // Necessario para Rest
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CamareroService, ClienteService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
