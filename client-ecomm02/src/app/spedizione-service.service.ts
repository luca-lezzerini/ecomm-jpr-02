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

  constructor(private http: HttpClient, private tokenSrv: TokenService) { }

  addSpedizione() {
    //if(this.spedizioneDto != null){
    this.spedizioneDto.token = this.tokenSrv.getToken();
    this.spedizioneDto.spedizione = this.temp;
    console.log("SpedizioneDto = ", this.spedizioneDto);
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/aggiungi-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.setToken(risp.token);
    });
    //}
    console.log("Spedizione aggiunta");
  }
  cerca(): RicercaDto[] {
    console.log("Siamo in cerca e ricerca vale ", this.ricerca);
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/cerca-spedizione/", this.ricerca);
    obs.subscribe(risp => {
      console.log(risp);
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.setToken(risp.token);
      console.log("Finito cerca");
    });
    return this.ricerche;
  }
  lista(): Spedizione[] {
    this.spedizioneDto.token = this.tokenSrv.getToken();
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/lista-spedizioni/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.setToken(risp.token);
    });
    return this.spedizioni;
  }
  remove(temp: Spedizione) {
    this.spedizioneDto.spedizione = temp;
    this.spedizioneDto.token = this.tokenSrv.getToken();
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/rimuovi-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.spedizioni = risp.listaSpedizioneDto;
      this.tokenSrv.setToken(risp.token);
    });
  }
  update(temp: Spedizione) {
    this.spedizioneDto.spedizione = temp;
    this.spedizioneDto.token = this.tokenSrv.getToken();
    let obs: Observable<SpedizioneListaDto> =
      this.http.post<SpedizioneListaDto>(this.url + "/modifica-spedizione/", this.spedizioneDto);
    obs.subscribe(risp => {
      this.cerca();
      this.tokenSrv.setToken(risp.token);
    });
    return this.spedizioni;
  }
}
