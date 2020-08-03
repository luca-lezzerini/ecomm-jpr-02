import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'categoria-crud', component: CategoriaCRUDComponent },
  { path: '', redirectTo: "/categoria-crud", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
