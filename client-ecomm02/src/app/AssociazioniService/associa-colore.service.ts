import { ProdottoService } from './../prodotto.service';
import { ColoriService } from './../colori.service';
import { ProdottoDto } from './../dto/prodotto-dto';
import { RicercaDto } from './../dto/ricerca-dto';
import { Colore } from './../model/colore';
import { Prodotto } from './../model/prodotto';
import { TokenService } from './../token.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociaColoreService {
  urlPath = 'http://localhost:8080';
  listaProdotti: Prodotto[] = [];
  listaColori: Colore[] = [];
  prodottoForm: Prodotto = new Prodotto();
  prodottoDto: ProdottoDto = new ProdottoDto();

  constructor(private http: HttpClient, private srvToken: TokenService, private srvColore: ColoriService, private srvProdotto: ProdottoService) { }

  visualizzaListaProdotti(): void {
      this.srvProdotto.lista();
      this.listaProdotti = this.srvProdotto.listaProdotti;
  }

  visualizzaListaColori(): void {
    this.srvColore.lista();
    this.listaColori = this.srvColore.listaColori;
  }

  cercaProdotto(ricerca: RicercaDto) {
    this.srvProdotto.cerca(ricerca);
    this.listaProdotti = this.srvProdotto.listaProdotti;
  }

  associaColoreProdotto(colore: Colore, prodotto: Prodotto): void {
    prodotto.colore = colore; 
    this.prodottoDto.prodotto = prodotto;
    this.prodottoDto.token = this.srvToken.token;
    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + '/prodotti-update', this.prodottoDto);
    const sub: Subscription = oss.subscribe(risp => {
      this.visualizzaListaProdotti();
      this.srvToken.token = risp.token;
    });
    this.prodottoForm = new Prodotto();
  }

}
