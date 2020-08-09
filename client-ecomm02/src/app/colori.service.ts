import { Injectable } from '@angular/core';
import { ColoreDto } from './dto/colore-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoriService {
  urlPath = 'http://localhost:8080';
  coloreForm: ColoreDto = new ColoreDto();
  listaColori: ColoreDto[] = [];
  constructor(private http: HttpClient) { }
  lista(): void {
    const oss: Observable<ColoreDto[]> = this.http.get<ColoreDto[]>(this.urlPath + '/lista-colori');
    const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
  }
/* Passa al server il Dto (colorepuñ essere cercato solo per colore)contenete
la stringa da cercare posiziona i dati nella Lista aposita,
restituisce una istanza di ColoreDtoa per resettare il campo
nel Tamplate*/
  cerca(colore: ColoreDto): ColoreDto {
    if (colore.colore == null) {
      this.lista();
    } else {
      const oss: Observable<ColoreDto[]> = this.http.post<ColoreDto[]>(this.urlPath + '/colori-find', colore);
      const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
    }
    return new ColoreDto();
  }
  /* in Base alla stato del componente che riceve come parametro setta url per la
richiesta e invia al server l'istanza da trattare. restituisce la stringa
 per ripristinare lo stato iniziale del component*/
  conferma(state: string): string {
    let urlEnd: string;
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
    const oss: Observable<ColoreDto> = this.http.post<ColoreDto>(this.urlPath + urlEnd, this.coloreForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    this.coloreForm = new ColoreDto();
    return 'ricerca';
  }
}
