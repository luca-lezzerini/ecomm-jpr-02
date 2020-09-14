import { RicercaDto } from './dto/ricerca-dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpedizioneDto } from './dto/spedizione-dto';
import { SpedizioneListaDto } from './dto/spedizione-lista-dto';
import { HttpClient } from '@angular/common/http';
import { Spedizione } from './model/spedizione';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class SpedizioneServiceService {
  private url = "http://localhost:8080";
  spedizioni: Spedizione[] = [];
  spedizione: Spedizione = new Spedizione();
  temp: Spedizione = new Spedizione();
  ricerca: RicercaDto = new RicercaDto();
  ricerche: RicercaDto[] = [];
  spedizioneDto: SpedizioneDto = new SpedizioneDto();
  spedizioneListaDto: SpedizioneListaDto = new SpedizioneListaDto();

  numeroTotaleElementi: number = 0;
  paginaCorrente: number = 1;
  numeroTotalePagine: number = 0;

  constructor(private http: HttpClient, private tokenSrv: TokenService) { }

  addSpedizione() {
    //if(this.spedizioneDto != null){
    this.spedizioneDto.token = this.tokenSrv.token;
    this.spedizioneDto.spedizione = this.temp;
    console.log("SpedizioneDto = ", this.spedizioneDto);
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/aggiungi-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.token = risp.token;
    });
    //}
    console.log("Spedizione aggiunta");
  }
  cerca(): RicercaDto[] {
    console.log("Siamo in cerca e ricerca vale ", this.ricerca);
    this.ricerca.paginaCorrente = this.paginaCorrente;
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/cerca-spedizione/", this.ricerca);
    obs.subscribe(risp => {
      console.log(risp);
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.token = risp.token;
      this.numeroTotaleElementi = risp.numeroTotaleElementi;
      this.numeroTotalePagine = risp.numeroTotalePagine;
      this.paginaCorrente = risp.paginaCorrente;
      console.log("Finito cerca");
    });
    return this.ricerche;
  }
  lista(): Spedizione[] {
    this.spedizioneDto.token = this.tokenSrv.token;
    this.spedizioneDto.paginaCorrente = this.paginaCorrente;
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/lista-spedizioni/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.token = risp.token;
      this.numeroTotaleElementi = risp.numeroTotaleElementi;
      this.numeroTotalePagine = risp.numeroTotalePagine;
      this.paginaCorrente = risp.paginaCorrente;
    });
    return this.spedizioni;
  }
  remove(temp: Spedizione) {
    this.spedizioneDto.spedizione = temp;
    this.spedizioneDto.token = this.tokenSrv.token;
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/rimuovi-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.token = risp.token;
    });
  }
  update(temp: Spedizione) {
    this.spedizioneDto.spedizione = temp;
    this.spedizioneDto.token = this.tokenSrv.token;
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/modifica-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.cerca();
      this.tokenSrv.token = risp.token;
    });
    return this.spedizioni;
  }
}
