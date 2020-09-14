import { ProdottoService } from 'src/app/prodotto.service';
import { TokenService } from './../token.service';
import { ListaProdottiDto } from './../dto/lista-prodotti-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offerta } from '../model/offerta';
import { OffertaDto } from '../dto/offerta-dto';
import { RicercaDto } from '../dto/ricerca-dto';
import { Prodotto } from '../model/prodotto';
import { TokenDto } from '../dto/token-dto';
import { Observable, Subscription } from 'rxjs';
import { ListaOfferteDto } from '../dto/lista-offerte-dto';
import { isNgTemplate } from '@angular/compiler';
import { ProdottoDto } from '../dto/prodotto-dto';

@Injectable({
  providedIn: 'root'
})
export class AssociaOffertaService {
  urlPath = 'http://localhost:8080';
  offerta: Offerta;
  offertaDto : OffertaDto;
  prodottoSelezionato : Prodotto;
  ricerca: RicercaDto = new RicercaDto();
  listaDeiProdotti : Prodotto[] = [];
  listaProdottiDto : ListaProdottiDto;
  listaOfferteDto: ListaOfferteDto;
  listaDelleOfferte: Offerta[] = [];
  prodottoForm : Prodotto;
  prodotto : Prodotto;
  prodottoDto: ProdottoDto;
  state = 'ricerca';
  constructor(private http : HttpClient, private srvToken: TokenService, private srvProdotto: ProdottoService) { }

  
  listaProdotti() {
    let tik: TokenDto = new TokenDto(this.srvToken.token);
    let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      this.urlPath + "/lista-prodotti",
      tik
    );
    o.subscribe((risp) => {
      this.listaDeiProdotti = risp.listaProdotti;
    });
  }
  
  cercaProdotti(ricerca: RicercaDto) {
    if (ricerca.ricerca == null) { // se non viene inserito nulla nel campo di ricerca vengono restituiti tutti i prodotti
      this.listaProdotti();
    } else {
      let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
        this.urlPath + "/prodotti-find/",
        ricerca
      );
      o.subscribe((risp) => {
        this.listaDeiProdotti = risp.listaProdotti;
      });
    }
  }
  
  listaOfferte(): void {
    let tik: TokenDto = new TokenDto(this.srvToken.token);
    const oss: Observable<ListaOfferteDto> = this.http.post<ListaOfferteDto> (this.urlPath + '/lista-offerte',   tik);
    const sub: Subscription = oss.subscribe(risp => { this.listaOfferteDto = risp;    this.listaDelleOfferte = this.listaOfferteDto.listaOfferte; this.srvToken.token=this.listaOfferteDto.token; });
  }
  associa(prodotto:Prodotto, offerta: Offerta){
    prodotto.offerta = offerta; 
    this.prodottoDto.prodotto = prodotto;
    this.prodottoDto.token = this.srvToken.token;
    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + '/prodotti-update', this.prodottoDto);
    const sub: Subscription = oss.subscribe(risp => {
      this.srvProdotto.lista();
      this.srvToken.token = risp.token;
    });
    this.prodottoForm = new Prodotto();
  }

}
