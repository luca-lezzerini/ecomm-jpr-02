import { TokenService } from './../token.service';
import { AssociaCategoriaListaDto } from './../dto/associa-categoria-lista-dto';
import { CategoriaServiceService } from './../categoria-service.service';
import { RicercaDto } from './../dto/ricerca-dto';
import { ProdottoService } from './../prodotto.service';
import { Injectable } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssociaCategoriaDto } from '../dto/associa-categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class SrvAssociaCategoriaService {

  private url = "http://localhost:8080";
  categoria: Categoria = new Categoria();
  categorie: Categoria[] = [];
  prodottoSelezionato: Prodotto = new Prodotto();
  ricerca: RicercaDto = new RicercaDto();
  categoriaAssociata: AssociaCategoriaDto = new AssociaCategoriaDto();

  constructor(public srvProdotto: ProdottoService, private tokenSrv: TokenService, public mem: CategoriaServiceService, private http: HttpClient) { }

  cerca() {
    this.srvProdotto.cerca(this.ricerca);
  }

  associaCat(c: Categoria) {
    this.categoriaAssociata.prodotto = this.prodottoSelezionato;
    this.categoriaAssociata.categoria = c;
    this.categoriaAssociata.token = this.tokenSrv.token;
    let o: Observable<AssociaCategoriaListaDto> =
      this.http.post<AssociaCategoriaListaDto>(this.url + '/associa-categorie/', this.categoriaAssociata);
    o.subscribe(risp => {
      this.categorie = risp.categorie;
      this.tokenSrv.token = risp.token;
    })
  }

}
