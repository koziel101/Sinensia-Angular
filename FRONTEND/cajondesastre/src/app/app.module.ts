import { NgModule, Component } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Component1Component } from "./Componentes/Component1/component1.component";

// Services

// Pipes

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
