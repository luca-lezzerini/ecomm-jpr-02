import { ProdottoDto } from './../dto/prodotto-dto';
import { TokenService } from './../token.service';
import { CategoriaServiceService } from './../categoria-service.service';
import { RicercaDto } from './../dto/ricerca-dto';
import { ProdottoService } from './../prodotto.service';
import { Injectable } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { Categoria } from '../model/categoria';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssociaCategoriaDto } from '../dto/associa-categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class SrvAssociaCategoriaService {

  private urlPath = "http://localhost:8080";
  categoria: Categoria = new Categoria();
  prodottoForm: Prodotto = new Prodotto();
  ricerca: RicercaDto = new RicercaDto();
  categoriaAssociata: AssociaCategoriaDto = new AssociaCategoriaDto();
  prodottoDto: ProdottoDto = new ProdottoDto();

  constructor(public srvProdotto: ProdottoService, private srvToken: TokenService, public mem: CategoriaServiceService, private http: HttpClient) { }

  associaCategoriaProdotto(categoria: Categoria, prodotto: Prodotto) {
    console.log("sto associando", categoria);
      prodotto.categoria = categoria; 
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
