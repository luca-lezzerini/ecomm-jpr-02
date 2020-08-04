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

  constructor(public mem: CategoriaServiceService) { }
  
  ngOnInit() {
    this.categorie = this.mem.lista()
  }

  searchCriteria(){
    return null;
  }

  attiva(){
    this.aggiungiState = true;
  }

  aggiungi(){
    this.mem.addCategoria();
  }

  conferma(){
    return null;
  }

  annulla(){
    return null;
  }

}
