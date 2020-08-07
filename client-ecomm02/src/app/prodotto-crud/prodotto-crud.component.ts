import { ProdottoService } from './../prodotto.service';
import { Component, OnInit } from '@angular/core';
import { ProdottoDto } from '../dto/prodotto-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { RicercaDto } from './../dto/ricerca-dto';

@Component({
  selector: 'app-prodotto-crud',
  templateUrl: './prodotto-crud.component.html',
  styleUrls: ['./prodotto-crud.component.css']
})
export class ProdottoCrudComponent implements OnInit {
  prodotto: ProdottoDto = new ProdottoDto();
  ricerca: RicercaDto = new RicercaDto();
  state = 'ricerca';
 
 
  constructor(private http: HttpClient, private srvProdotto: ProdottoService) { }

  ngOnInit(): void {
    this.srvProdotto.lista();
  }
  nuovo(): void {
    this.state = 'aggiungi';
    this.srvProdotto.prodottoForm.id = 0;
  }
  chiudi(): void {
    this.state = 'ricerca';
    this.prodotto = new ProdottoDto();
    this.srvProdotto.prodottoForm = new ProdottoDto();
  }

  chiediModifica(prodotto: ProdottoDto): void {
    this.state = 'modifica';
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);

  }
  chiediElimina(prodotto: ProdottoDto): void {
    this.state = 'elimina';
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);

  }
  visualizza(prodotto: ProdottoDto): void {
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
    this.state = 'visualizza';
  }

}
