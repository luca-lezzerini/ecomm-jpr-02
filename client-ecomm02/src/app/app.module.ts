import { CategoriaCRUDComponent } from './categoria-crud/categoria-crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColoreCrudComponent } from './colore-crud/colore-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    ColoreCrudComponent,
    CategoriaCRUDComponent
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
