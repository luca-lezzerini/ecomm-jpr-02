import { CategoriaDto } from './../dto/categoria-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCRUDComponent implements OnInit {
  id: number;
  descrizione: string;
  categoria: CategoriaDto;
  aggiungiState = false;
  constructor(public mem: CategoriaServiceService) { }
  
  ngOnInit() {
  }

  searchCriteria(){
    return null;
  }

  aggiungi(){
    this.aggiungiState = true;
    let categoria: CategoriaDto = new CategoriaDto(this.id, this.descrizione)
    this.mem.addCategoria(categoria);
  }

  conferma(){
    return null;
  }

  annulla(){
    return null;
  }

}
