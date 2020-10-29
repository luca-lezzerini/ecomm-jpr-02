import { Offerta } from './../model/offerta';
import { OffertaService } from 'src/app/service/offerta.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { ProdottoDto } from './../dto/prodotto-dto';
import { Prodotto } from './../model/prodotto';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociaOffertaService {
  urlPath = 'http://localhost:8080';
  listaProdotti: Prodotto[] = [];
  listaOfferte: Offerta[] = [];
  prodottoForm: Prodotto = new Prodotto();
  prodottoDto: ProdottoDto = new ProdottoDto();

  constructor(private http: HttpClient, private srvToken: TokenService, private srvOfferta: OffertaService, private srvProdotto: ProdottoService) { }

  associaOffertaProdotto(offerta: Offerta, prodotto: Prodotto): void {
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
