import { TagliaCrudComponent } from './taglia-crud/taglia-crud.component';
import { SpedizioneCRUDComponent } from './spedizione-crud/spedizione-crud.component';
import { HomeCRUDComponent } from './home-crud/home-crud.component';
import { ImballoCrudComponent } from './imballo-crud/imballo-crud.component';
import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoreCrudComponent } from './colore-crud/colore-crud.component';
import { ProdottoCrudComponent } from './prodotto-crud/prodotto-crud.component';
import { OffertaCrudComponent } from './offerta-crud/offerta-crud.component';


const routes: Routes = [
  { path: 'home-crud', component: HomeCRUDComponent},
  { path: 'imballo-crud', component: ImballoCrudComponent},
  { path: 'categoria-crud', component: CategoriaCRUDComponent },
  { path: 'colore-crud', component: ColoreCrudComponent},
  { path: 'prodotto-crud', component: ProdottoCrudComponent},
  { path: 'spedizione-crud', component: SpedizioneCRUDComponent},
  { path: 'taglia-crud', component: TagliaCrudComponent},
  { path: 'offerta-crud', component: OffertaCrudComponent},
  { path: '', redirectTo: '/home-crud', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
