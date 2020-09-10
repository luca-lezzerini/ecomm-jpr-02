import { SpedizioneCRUDComponent } from './spedizione-crud/spedizione-crud.component';
import { ImballoCrudComponent } from './imballo-crud/imballo-crud.component';
import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColoreCrudComponent } from './colore-crud/colore-crud.component';
import { HomeCRUDComponent } from './home-crud/home-crud.component';
import { OffertaCrudComponent } from './offerta-crud/offerta-crud.component';
import { ProdottoCrudComponent } from './prodotto-crud/prodotto-crud.component';
import { TagliaCrudComponent } from './taglia-crud/taglia-crud.component';
import { AssociaCategoriaComponent } from './Associazioni/associa-categoria/associa-categoria.component';
import { AssociaColoreComponent } from './Associazioni/associa-colore/associa-colore.component';


@NgModule({
  declarations: [
    AppComponent,
    ColoreCrudComponent,
    CategoriaCRUDComponent,
    ImballoCrudComponent,
    HomeCRUDComponent,
    OffertaCrudComponent,
    ProdottoCrudComponent,
    SpedizioneCRUDComponent,
    TagliaCrudComponent,
    AssociaCategoriaComponent,
    AssociaColoreComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
