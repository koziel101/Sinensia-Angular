import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisesComponent } from './components/paises/paises.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components for PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PaisService } from './services/pais.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
