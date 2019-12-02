import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamareroService } from './services/camarero.service';
import {HttpClientModule} from '@angular/common/http' // Necessario para Rest

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CamareroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
