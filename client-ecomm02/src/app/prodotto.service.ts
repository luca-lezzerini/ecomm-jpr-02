import { ListaProdottiDto as ListaProdottiDto } from './dto/lista-prodotti-dto';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { ProdottoDto } from './dto/prodotto-dto';
import { RicercaDto } from './dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Prodotto } from './model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  urlPath = 'http://localhost:8080';
  prodottoForm: Prodotto = new Prodotto(); // memorizza l'istanza da trattare
  prodottoDto: ProdottoDto = new ProdottoDto();
  listaProdotti: Prodotto[] = []; /* il contenitore che renderizza la tabella contente le risposte dal server*/
  risultatiProdotti: RicercaDto[] = [];
  listaDto: ListaProdottiDto = new ListaProdottiDto();
  constructor(private http: HttpClient, private srvToken : TokenService,) { }
/* Passa al server il RicercaDto contenete la stringa da cercare posiziona i dati 
nella Lista aposita, restituisce una istanza di DtoRicerca per resettare il campo
nel Tamplate*/
  cerca(ricerca: RicercaDto): RicercaDto { 
    if (ricerca.ricerca == null) { // se non viene inserito nulla nel campo di ricerca vengono restituiti tutti i prodotto
      this.lista();
    } else {
      const oss: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(this.urlPath + '/prodotti-find', ricerca);
      const sub: Subscription = oss.subscribe(risp => { this.listaDto = risp;      this.listaProdotti = this.listaDto.listaProdotti;
        this.srvToken.setToken(this.listaDto.token); });
    }
    return new RicercaDto();
  }

  lista() {
    const oss: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto> (this.urlPath + '/lista-prodotti', this.listaDto);
    const sub: Subscription = oss.subscribe(risp => { this.listaDto = risp;    this.listaProdotti = this.listaDto.listaProdotti; this.srvToken.setToken(this.listaDto.token); });
  }
/* in Base alla stato del componente che riceve come parametro setta url per la
richiesta e invia al server l'istanza da trattare. restituisce la stringa
 per ripristinare lo stato iniziale del component*/
  conferma(state: string) { 
    let urlEnd: string;
    this.prodottoDto.prodotto = this.prodottoForm;
    this.prodottoDto.token = this.srvToken.getToken();
    switch (state) {
      case 'modifica': {
        urlEnd = '/prodotti-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/prodotti-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/prodotti-add';
        break;
      }
    }

    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + urlEnd, this.prodottoForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    this.prodottoForm = new Prodotto();
    return 'ricerca';
  }
}