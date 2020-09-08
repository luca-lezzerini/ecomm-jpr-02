import { ColoriDto } from './dto/colori-dto';
import { Colore } from './model/colore';
import { Injectable, ValueProvider } from '@angular/core';
import { ColoreDto } from './dto/colore-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ColoriService {
  urlPath = 'http://localhost:8080';
  coloreForm: Colore = new Colore();
  coloreDto: ColoreDto = new ColoreDto();
  listaColori: Colore[] = [];
  listaDto: ColoriDto = new ColoriDto();
  constructor(private http: HttpClient, private srvToken: TokenService) { }

  lista(): void {
    const oss: Observable<ColoriDto> = this.http.post<ColoriDto> (this.urlPath + '/lista-colori', this.listaDto);
    const sub: Subscription = oss.subscribe(risp => { this.listaDto = risp;    this.listaColori = this.listaDto.listaColori; this.srvToken.token=this.listaDto.token; });

  }
/* Passa al server il Dto (colorepuñ essere cercato solo per colore)contenete
la stringa da cercare posiziona i dati nella Lista aposita,
restituisce una istanza di ColoreDtoa per resettare il campo
nel Tamplate*/
  cerca(colore: Colore) {
    if (colore.colore == null) {
      this.lista();
    } else {
      this.coloreDto.colore = colore;
      this.coloreDto.token = this.srvToken.token;
      const oss: Observable<ColoriDto> = this.http.post<ColoriDto>(this.urlPath + '/colori-find', this.coloreDto);
      const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp.listaColori ; this.srvToken.token=this.listaDto.token; });
    }
    return new Colore();
  }
  /* in Base alla stato del componente che riceve come parametro setta url per la
richiesta e invia al server l'istanza da trattare. restituisce la stringa
 per ripristinare lo stato iniziale del component*/
  conferma(state: string) {
    let urlEnd: string;
    this.coloreDto.colore = this.coloreForm;
    this.coloreDto.token = this.srvToken.token;
    switch (state) {
      case 'modifica': {
        urlEnd = '/colori-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/colori-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/colori-add';
        break;
      }

    }
    const oss: Observable<ColoriDto> = this.http.post<ColoriDto>(this.urlPath + urlEnd, this.coloreDto);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); this.srvToken.token=risp.token; });
    this.coloreForm = new Colore();
    return 'ricerca';
  }
}
