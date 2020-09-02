import { ProdottoDto } from '../dto/prodotto-dto';
import { Router } from '@angular/router';
import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { RicercaDto } from '../dto/ricerca-dto';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.css']
})
export class HomeCRUDComponent implements OnInit {

  prodotto: ProdottoDto = new ProdottoDto();
  constructor(public mx: HomeServiceService, private router:Router) { }

  ngOnInit() {
    this.mx.lista();
  }

  aggiungiAlCarrello(){
    return null;
  }

  cercaProdotto() {
    if (this.mx.ricerca.ricerca != "") {
      this.mx.cerca();
      this.mx.ricerca.ricerca = "";
    } else {
      return this.mx.lista();
    }
  }

}
