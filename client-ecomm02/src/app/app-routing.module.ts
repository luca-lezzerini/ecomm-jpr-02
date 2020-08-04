import { ImballoCrudComponent } from './imballo-crud/imballo-crud.component';
import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoreCrudComponent } from './colore-crud/colore-crud.component';


const routes: Routes = [
  { path: 'Imballo-crud', component: ImballoCrudComponent},
  { path: 'categoria-crud', component: CategoriaCRUDComponent },
  { path: 'colore-crud', component: ColoreCrudComponent},
  { path: '', redirectTo: '/categoria-crud', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
