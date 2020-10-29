import { ProdottoService } from 'src/app/service/prodotto.service';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { RicercaDto } from './../dto/ricerca-dto';

@Component({
  selector: 'app-prodotto-crud',
  templateUrl: './prodotto-crud.component.html',
  styleUrls: ['./prodotto-crud.component.css']
})
export class ProdottoCrudComponent implements OnInit {
  /* per ricuperare la chiavi di ricerca
   direttamnte nel tamplate vieni pasata nel service e resettata.*/
  prodotto = new Prodotto();
  ricerca: RicercaDto = new RicercaDto();
  state = 'ricerca'; // lo stato del component che influenza il tamplate e metodi
  
  constructor(private srvProdotto: ProdottoService) { }

  ngOnInit(): void {
    this.srvProdotto.lista(); // inizializza la paggina con la lista dei prodotti
  }

  nuovo(): void {
    this.state = 'aggiungi';
    this.srvProdotto.prodottoForm.id = '0';
  }

  chiudi(): void {
    this.state = 'ricerca';
    this.prodotto = new Prodotto();
    this.srvProdotto.prodottoForm = new Prodotto();
  }

  chiediModifica(prodotto: Prodotto): void {
    this.state = 'modifica';
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
  }

  chiediElimina(prodotto: Prodotto): void {
    this.state = 'elimina';
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
  }

  visualizza(prodotto: Prodotto): void {
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
    this.state = 'visualizza';
  }
  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

}
