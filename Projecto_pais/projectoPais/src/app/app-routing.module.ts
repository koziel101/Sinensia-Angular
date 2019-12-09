import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './components/paises/paises.component';


const routes: Routes = [
  { path: "", component: PaisesComponent },
  { path: "**", component: PaisesComponent },
  { path: "home", component: PaisesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
