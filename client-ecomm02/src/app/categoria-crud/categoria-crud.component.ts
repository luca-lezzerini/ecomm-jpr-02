import { CategoriaDto } from './../dto/categoria-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCRUDComponent implements OnInit {

  aggiungiState = false;
  modificaState = false;
  categoriaSelezionata: number;
  nascondiButton = false;
  disabilitaDescrizione = false;
  nascostoSearch = true;
  tabellaState = true;

  constructor(public mem: CategoriaServiceService) { }

  ngOnInit() {
    this.mem.categorie = this.mem.lista();
    this.mem.categoria.descrizione = "";
  }

  searchCriteria() {
    if (this.mem.categoria.descrizione != "") {
      this.mem.cerca();
      this.mem.categoria.descrizione = "";
      this.aggiungiState = false;
    } else {
      return this.mem.lista();
    }
  }

  aggiungi() {
    this.aggiungiState = true;
    this.modificaState = false;
    this.mem.categTemp = new CategoriaDto();
    this.nascondiButton = false;
    this.disabilitaDescrizione = false;
  }

  conferma() {
    if (this.aggiungiState) {
      this.mem.addCategoria();
      this.mem.categTemp = new CategoriaDto();
    } else {
      this.mem.categorie[this.categoriaSelezionata] = this.mem.categTemp;
      this.mem.update(this.mem.categTemp);
      this.mem.lista();
      this.tabellaState = true;
      this.nascostoSearch = true;
      this.mem.categTemp = new CategoriaDto();
    }
  }

  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
    this.tabellaState = true;
    this.nascostoSearch = true;
  }

  modifica(c: CategoriaDto, i: number) {
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.aggiungiState = false;
    this.modificaState = true;
    this.nascondiButton = false;
    this.disabilitaDescrizione = false;
    this.nascostoSearch = false;
    this.tabellaState = false;
  }

  rimuovi(id: number) {
    this.mem.remove(id);
    this.mem.categTemp = new CategoriaDto();
  }
  visualizzaDettagliCat(c: CategoriaDto, i: number) {
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.aggiungiState = false;
    this.modificaState = true;
    this.nascondiButton = true;
    this.disabilitaDescrizione = true;
  }
}
