import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RicercaDto } from '../dto/ricerca-dto';
import { Spedizione } from '../model/spedizione';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { SpedizioneServiceService } from 'src/app/service/spedizione-service.service';
import { TokenService } from 'src/app/service/token.service';
import { AssociaSpedizioneDto } from '../dto/associa-spedizione-dto';
import { Prodotto } from '../model/prodotto';
import { Observable } from 'rxjs';
import { AssociaSpedizioneListaDto } from '../dto/associa-spedizione-lista-dto';

@Injectable({
  providedIn: 'root'
})
export class SrvAssociaSpedizioneService {

  private url = "http://localhost:8080";
  spedizione: Spedizione = new Spedizione();
  spedizioni: Spedizione[] = [];
  ricerca: RicercaDto = new RicercaDto();
  prodottoSelezionato: Prodotto = new Prodotto();
  spedizioneAssociata: AssociaSpedizioneDto = new AssociaSpedizioneDto();

  constructor(private http: HttpClient, private srvProdotto: ProdottoService, private tokenSrv: TokenService, public memsped: SpedizioneServiceService) { }

  cerca(){
    this.srvProdotto.cerca(this.ricerca);
  }

  associaSped(s: Spedizione){
    this.spedizioneAssociata.prodotto = this.prodottoSelezionato;
    this.spedizioneAssociata.spedizione = s;
    this.spedizioneAssociata.token = this.tokenSrv.token;
    let o: Observable<AssociaSpedizioneListaDto> =
    this.http.post<AssociaSpedizioneListaDto>(this.url + '/associa-spedizioni/', this.spedizioneAssociata);
    o.subscribe(risp => {
    this.prodottoSelezionato = risp.prodotto;
    this.tokenSrv.token = risp.token;  
    })
  }
}
