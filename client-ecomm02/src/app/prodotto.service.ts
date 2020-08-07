import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProdottoDto } from './dto/prodotto-dto';
import { RicercaDto } from './dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  urlPath = 'http://localhost:8080';
  prodottoForm: ProdottoDto = new ProdottoDto();
  listaProdotti: ProdottoDto[] = [];

  constructor(private http: HttpClient) { }

  cerca(ricerca: RicercaDto): RicercaDto {
    if (ricerca.ricerca == null) {
      this.lista();
    } else {
      const oss: Observable<ProdottoDto[]> = this.http.post<ProdottoDto[]>(this.urlPath + '/prodotti-find', ricerca);
      const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
    }
    return new RicercaDto();
  }

  lista() {
    const oss: Observable<ProdottoDto[]> = this.http.get<ProdottoDto[]>(this.urlPath + '/lista-prodotti');
    const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
  }

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
    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + urlEnd, this.prodottoForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    this.prodottoForm = new ProdottoDto();
    return 'ricerca';
  }
}