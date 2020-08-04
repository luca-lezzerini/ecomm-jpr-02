import { CategoriaDto } from './../dto/categoria-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCRUDComponent implements OnInit {

  categorie: CategoriaDto[] = []
  aggiungiState = false;
  modificaState = false;
  categoriaSelezionata: number;
  categTemp: CategoriaDto;

  constructor(public mem: CategoriaServiceService) { }

  ngOnInit() {
    this.categorie = this.mem.lista()
  }

  searchCriteria() {
    this.mem.cerca();
  }

  aggiungi() {
    this.aggiungiState = true;
  }

  conferma() {
    if (this.aggiungiState) {
      this.mem.addCategoria();
    } else {
      this.mem.categorie[this.categoriaSelezionata] = this.categTemp;
      this.mem.update(this.categTemp);
    }
  }

  annulla() {
    this.aggiungiState = false;
  }

  modifica(c: CategoriaDto, i: number) {
    this.categoriaSelezionata = i;
    this.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.aggiungiState = false;
    this.modificaState = true;
  }

  rimuovi(id: number) {
    this.mem.remove(id);
  }

}
