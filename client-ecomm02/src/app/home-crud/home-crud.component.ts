import { ProdottoDto } from '../dto/prodotto-dto';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/service/home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.css']
})
export class HomeCRUDComponent implements OnInit {

  prodotto: ProdottoDto = new ProdottoDto();
  constructor(public mx: HomeServiceService, private router:Router) { }

  ngOnInit() {

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
