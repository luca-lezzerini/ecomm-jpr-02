import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProdottoDto } from './dto/prodotto-dto';
import { Prodotto } from './dto/prodotto';
import { RicercaDto } from './dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  urlPath = 'http://localhost:8080';
  prodottoForm: Prodotto = new Prodotto(); // memorizza l'istanza da trattare
  listaProdotti: Prodotto[] = []; /* il contenitore che renderizza la tabella
   contente le risposte dal server*/

  constructor(private http: HttpClient) { }
/* Passa al server il RicercaDto contenete la stringa da cercare posiziona i dati 
nella Lista aposita, restituisce una istanza di DtoRicerca per resettare il campo
nel Tamplate*/
  cerca(ricerca: RicercaDto): RicercaDto {
    if (ricerca.ricerca == null) {
      this.lista();
    } else {
      const oss: Observable<Prodotto[]> = this.http.post<Prodotto[]>(this.urlPath + '/prodotti-find', ricerca);
      const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
    }
    return new RicercaDto();
  }

  lista() {
    const oss: Observable<Prodotto[]> = this.http.get<Prodotto[]>(this.urlPath + '/lista-prodotti');
    const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
  }
/* in Base alla stato del componente che riceve come parametro setta url per la
richiesta e invia al server l'istanza da trattare. restituisce la stringa
 per ripristinare lo stato iniziale del component*/
  conferma(state: string) {
    let urlEnd: string;
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
    const oss: Observable<Prodotto> = this.http.post<Prodotto>(this.urlPath + urlEnd, this.prodottoForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    this.prodottoForm = new Prodotto();
    return 'ricerca';
  }
}