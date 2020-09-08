import { RicercaDto } from "./dto/ricerca-dto";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProdottoDto } from "./dto/prodotto-dto";
import { HttpClient } from "@angular/common/http";
import { ListaProdottiDto } from "./dto/lista-prodotti-dto";
import { Prodotto } from "./model/prodotto";
import { TokenService } from "./token.service";
import { Token } from "./dto/token";
import { TokenDto } from "./dto/token-dto";

@Injectable({
  providedIn: "root",
})
export class HomeServiceService {
  url = "http://localhost:8080";
  listaDeiProdotti: Prodotto[] = [];
  ricerche: RicercaDto[] = [];
  ricerca: RicercaDto = new RicercaDto();
  prodotto: ProdottoDto = new ProdottoDto();

  constructor(private http: HttpClient, private srvToken: TokenService) {}

  lista(): Prodotto[] {
    console.log("sono in lista", this.srvToken.token);
    let tik: TokenDto = new TokenDto(this.srvToken.token);
    let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      this.url + "/lista-prodotti",
      tik
    );
    o.subscribe((risp) => {
      this.listaDeiProdotti = risp.listaProdotti;
    });
    return this.listaDeiProdotti;
  }

  cerca(): RicercaDto[] {
    let o: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      this.url + "/prodotti-find/",
      this.ricerca
    );
    o.subscribe((risp) => {
      this.listaDeiProdotti = risp.listaProdotti;
    });
    return this.ricerche;
  }
}
