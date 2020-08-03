import { ColoreCrudComponent } from './Componet-Colore/colore-crud/colore-crud.component';
import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaColoreComponent } from './Componet-Colore/lista-colore/lista-colore.component';
import { DatiColoreComponent } from './Componet-Colore/dati-colore/dati-colore.component';
import { RicercaColoreComponent } from './Componet-Colore/ricerca-colore/ricerca-colore.component';


@NgModule({
  declarations: [
    AppComponent,
    ColoreCrudComponent,
    CategoriaCRUDComponent,
    ListaColoreComponent,
    DatiColoreComponent,
    RicercaColoreComponent
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
