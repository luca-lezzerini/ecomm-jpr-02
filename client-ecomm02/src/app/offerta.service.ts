import { ListaProdottoDto } from './dto/lista-prodotto-dto';
import { Token } from './dto/token';
import { ListaOfferteDto } from './dto/lista-offerte-dto';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { OffertaDto } from './dto/offerta-dto';
import { RicercaDto } from './dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Offerta } from './model/offerta';

@Injectable({
  providedIn: 'root'
})
export class OffertaService {
  urlPath = 'http://localhost:8080';
  offertaForm: Offerta = new Offerta();
  offertaDto : OffertaDto = new OffertaDto();
  listaOfferte: Offerta[] = [];
  risultatiOfferte: RicercaDto[] = [];
  listaDto: ListaOfferteDto = new ListaOfferteDto();
  constructor(private http: HttpClient, private srvToken : TokenService,) { }
  lista(): void {
    const oss: Observable<ListaOfferteDto> = this.http.post<ListaOfferteDto> (this.urlPath + '/lista-offerte', this.listaDto);
    const sub: Subscription = oss.subscribe(risp => { this.listaDto = risp;    this.listaOfferte = this.listaDto.listaOfferte; this.srvToken.setToken(this.listaDto.token); });
 
  }

  cerca(ricerca: RicercaDto): RicercaDto {
    if (ricerca.ricerca == null) { // se non viene inserito nulla nel campo di ricerca vengono restituite tutte le offerte
      this.lista();
    } else {
      const oss: Observable<ListaOfferteDto> = this.http.post<ListaOfferteDto>(this.urlPath + '/offerta-find', ricerca);
      const sub: Subscription = oss.subscribe(risp => { this.listaDto = risp;      this.listaOfferte = this.listaDto.listaOfferte;
        this.srvToken.setToken(this.listaDto.token); });

    }
    return new RicercaDto();
  }
  conferma(state: string): string {
    let urlEnd: string;
    this.offertaDto.offerta = this.offertaForm;
    this.offertaDto.token = this.srvToken.getToken();
    switch (state) {
      case 'modifica': {
        urlEnd = '/offerta-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/offerta-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/offerta-add';
        break;
      }

    }
    const oss: Observable<OffertaDto> = this.http.post<OffertaDto>(this.urlPath + urlEnd, this.offertaForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    this.offertaForm = new Offerta();
    return 'ricerca';
  }
}
