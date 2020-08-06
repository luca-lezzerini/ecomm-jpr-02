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
  

  constructor(public mem: CategoriaServiceService) { }

  ngOnInit() {
    this.mem.categorie = this.mem.lista();
    this.mem.categoria.descrizione = "";
  }

  searchCriteria() {
    if(this.mem.categoria.descrizione != ""){
      this.mem.cerca();
      this.mem.categoria.descrizione = "";
      this.aggiungiState = false;
    }else{
      return this.mem.lista();
    }
  }

  aggiungi() {
    this.aggiungiState = true;
  }

  conferma() {
    if (this.aggiungiState) {    
      this.mem.addCategoria();
      this.mem.categTemp = new CategoriaDto() ;    
    } else {
      this.mem.categorie[this.categoriaSelezionata] = this.mem.categTemp;
      this.mem.update(this.mem.categTemp);
      this.mem.lista();
      this.mem.categTemp = new CategoriaDto() ;
    }
  }

  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
  }

  modifica(c: CategoriaDto, i: number) {
    this.categoriaSelezionata = i;
    this.mem.categTemp = Object.assign({}, c); //copio c dentro categTemp
    this.aggiungiState = false;
    this.modificaState = true;
  }

  rimuovi(id: number) {
    this.mem.remove(id);
  }

}
