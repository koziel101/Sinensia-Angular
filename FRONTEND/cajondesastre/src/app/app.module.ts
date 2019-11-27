import { NgModule, Component } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' // Para disponer de 2-way databinding

// Components
import { AppComponent } from './app.component';
import { Component1Component } from "./Componentes/Component1/component1.component";

import { Component3Component } from './Componentes/component3/component3.component';
import { ComponentPizzaComponent } from './Componentes/component-pizza/component-pizza.component';
import { Component2Component } from './Componentes/component2/component2.component';


// Services

// Pipes

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ComponentPizzaComponent
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
