import { NgModule, Component } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' // Para disponer de 2-way databinding

// Components
import { AppComponent } from './app.component';
import { Component1Component } from "./Componentes/Component1/component1.component";
import { Component2Component } from './componentes/component2/component2.component';

// Services

// Pipes

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
