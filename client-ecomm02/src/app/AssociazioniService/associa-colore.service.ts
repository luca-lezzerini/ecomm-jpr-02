import { ProdottoDto } from './../dto/prodotto-dto';
import { RicercaDto } from './../dto/ricerca-dto';
import { Colore } from './../model/colore';
import { ColoriDto } from './../dto/colori-dto';
import { Prodotto } from './../model/prodotto';
import { TokenService } from './../token.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ListaProdottiDto } from './../dto/lista-prodotti-dto';
import { TokenDto } from './../dto/token-dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociaColoreService {
  urlPath = 'http://localhost:8080';
  listaProdotti: Prodotto[] = []; /* il contenitore che renderizza la tabella contente le risposte dal server*/
  listaColori: Colore[] = [];
  listaColoriDto: ColoriDto = new ColoriDto();
  prodottoForm: Prodotto = new Prodotto();
  prodottoDto: ProdottoDto = new ProdottoDto();

  constructor(private http: HttpClient, private srvToken: TokenService) { }

  visualizzaListaProdotti() {
    let tik: TokenDto = new TokenDto(this.srvToken.token);
    let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      this.urlPath + "/lista-prodotti",
      tik
    );
    o.subscribe((risp) => {
      this.listaProdotti = risp.listaProdotti;
    });
  }

  visualizzaListaColori(): void {
    const oss: Observable<ColoriDto> = this.http.post<ColoriDto> (this.urlPath + '/lista-colori', this.listaColoriDto);
    const sub: Subscription = oss.subscribe(risp => { this.listaColoriDto = risp;    
      this.listaColori = this.listaColoriDto.listaColori; 
      this.srvToken.token=this.listaColoriDto.token; 
    });
  }

  cercaProdotto(ricerca: RicercaDto) {
    if (ricerca.ricerca == null) { // se non viene inserito nulla nel campo di ricerca vengono restituiti tutti i prodotti
      this.visualizzaListaProdotti();
    } else {
      let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
        this.urlPath + "/prodotti-find/",
        ricerca
      );
      o.subscribe((risp) => {
        this.listaProdotti = risp.listaProdotti;
      });
    }
  }

  associaColoreProdotto(colore: Colore, prodotto: Prodotto) {
    //prodotto.colore = colore; // Forse si deve aggiungere l'attributo "colore" all'entità Prodotto lato client
    // Potrebbe essere necessario anche aggiungere un nuovo metodo a ControllerProdotto lato server per permettere l'associazione del colore
    this.prodottoDto.prodotto = prodotto;
    this.prodottoDto.token = this.srvToken.token;
    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + '/prodotti-add', this.prodottoDto);
    const sub: Subscription = oss.subscribe(risp => {
      this.visualizzaListaProdotti();
      this.srvToken.token = risp.token;
    });
    this.prodottoForm = new Prodotto();
  }

}
