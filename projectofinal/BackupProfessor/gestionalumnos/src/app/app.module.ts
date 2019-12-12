import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
