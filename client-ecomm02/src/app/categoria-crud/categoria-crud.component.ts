import { CategoriaDto } from './../dto/categoria-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCRUDComponent implements OnInit {

  searchState = true;
  aggiungiState = false;
  modificaState = false;
  visualizzaState = false;
  nascondiButton = false;
  disabilitaDescrizione = false;
  tabellaState = true;
  msgCategoriaNonValida = true;

  categoriaSelezionata: number;
  direzioneOrdinamento = "asc";

  constructor(public mem: CategoriaServiceService) { }

  ngOnInit() {
    this.mem.categorie = this.mem.lista();
  }

  searchCriteria() {
    if (this.mem.ricerca.ricerca != null) {
      this.mem.cerca();
    } else {
      return this.mem.lista();
    }
  }

  aggiungi() {
    this.aggiungiState = true;
    this.visualizzaState = false;
    this.searchState = false;
    this.nascondiButton = false;
    this.disabilitaDescrizione = false;
    this.mem.categTemp = new Categoria();
  }

  conferma() {
    console.log("Siamo in conferma");
    if (this.aggiungiState) {
      if (this.mem.categTemp.descrizione != null) {
        console.log("descrizione not null");
        this.mem.addCategoria();
        this.mem.categTemp = new Categoria();
        this.aggiungiState = false;
        this.searchState = true;
      } else {
        console.log("descrizione null");
        this.msgCategoriaNonValida = false;
      }
    } else if (this.modificaState) {
      if (this.mem.categTemp.descrizione != "") {
        console.log("descrizione non vuota");
        this.mem.categorie[this.categoriaSelezionata] = this.mem.categTemp;
        this.mem.update(this.mem.categTemp);
        this.modificaState = false;
        this.tabellaState = true;
        this.searchState = true;
        this.mem.categTemp = new Categoria();
      } else {
        console.log("descrizione vuota");
        this.msgCategoriaNonValida = false;
      }
    }
  }

  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
    this.msgCategoriaNonValida = true;
    this.tabellaState = true;
    this.searchState = true;
  }

  modifica(c: Categoria, i: number) {
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.modificaState = true;
    this.searchState = false;
    this.aggiungiState = false;
    this.visualizzaState = false;
    this.disabilitaDescrizione = false;
    this.nascondiButton = false;
    this.tabellaState = false;
    this.msgCategoriaNonValida = true;
  }

  rimuovi(c: Categoria, i: number) {
    this.categoriaSelezionata = i;
    if (confirm("Vuoi eliminare la categoria " + c.descrizione + "?")) {
      this.mem.categTemp = Object.assign({}, c);
      this.mem.categorie[this.categoriaSelezionata] = this.mem.categTemp;
      this.mem.remove(this.mem.categTemp);
      this.mem.lista();
      this.mem.categTemp = new Categoria();
      this.aggiungiState = false;
      this.modificaState = false;
      this.visualizzaState = false;
      this.nascondiButton = false;
      this.disabilitaDescrizione = true;
      this.searchState = true;
      this.tabellaState = true;
    } else {
      this.searchState = true;
      this.aggiungiState = false;
      this.visualizzaState = false;

    }
  }
  visualizzaDettagliCat(c: Categoria, i: number) {
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.visualizzaState = true;
    this.nascondiButton = true;
    this.disabilitaDescrizione = true;
    this.msgCategoriaNonValida = true;
  }

  disabilitaDesc() {
    this.msgCategoriaNonValida = true;
  }

  sortDescrizione() {
    if (this.direzioneOrdinamento == "asc") {
      this.direzioneOrdinamento = "disc";
      this.mem.categorie.sort((a, b) => (a.descrizione < b.descrizione ? -1 : 1))
    } else {
      this.direzioneOrdinamento = "asc";
      this.mem.categorie.sort((a, b) => (a.descrizione > b.descrizione ? -1 : 1))
    }
  }
}
