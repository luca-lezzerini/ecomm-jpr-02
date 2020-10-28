import { AssociaImballoDto } from './../dto/associa-imballo-dto';
import { Prodotto } from './../model/prodotto';
import { ImballoListDto } from '../dto/imballo-list-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imballo } from '../model/imballo';
import { ImballoDto } from '../dto/imballo-dto';
import { RicercaDto } from '../dto/ricerca-dto';
import { TokenService } from '../token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class ImballoServiceService {

  private url = "http://localhost:8080"
  imballi: Imballo[] = [];
  imballo: ImballoDto = new ImballoDto();
  imballiListMod: ImballoListDto = new ImballoListDto();
  imballoMod: ImballoDto = new ImballoDto();
  imballoVis: ImballoDto = new ImballoDto();
  ricerca: RicercaDto = new RicercaDto();
  associaImballoDto: AssociaImballoDto = new AssociaImballoDto();

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  addImballoService() {
    console.log("Siamo in addImballo e imballo vale ", this.imballoMod)
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(
        this.url + "/add-imballo",
        this.imballoMod
      );
    o.subscribe(risp => {
      this.findImballoService();
      this.tokenService.token = risp.token;
    });
  }

  listaImballoService(): Imballo[] {
    //this.imballoMod.token = this.tokenService.token;
    let o: Observable<ImballoListDto> = this.http.post<ImballoListDto>(
      this.url + "/list-imballo", this.imballoMod);
    o.subscribe(risp => {
      this.imballi = risp.imballi;
      this.tokenService.token = risp.token;
    })
    return this.imballi;
  }

  findImballoService() {
    this.ricerca.token = null;
    let o: Observable<ImballoListDto> = this.http.post<ImballoListDto>(
      this.url + "/find-by-descrizione-imballo",
      this.ricerca
    );
    o.subscribe(risp => {
      this.imballi = risp.imballi;
      this.tokenService.token = risp.token;
    });
    return this.imballi;
  }

  updateImballoService(imballoMod: ImballoDto) {
    console.log("In updateImballo ", imballoMod);
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + "/update-imballo", imballoMod);
    o.subscribe(risp => {
      this.findImballoService();
      this.tokenService.token = risp.token;
    });
    this.imballi = this.listaImballoService();
  }

  removeImballoService() {
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + '/delete-imballo', this.imballoMod)
    o.subscribe(risp => {
      this.imballi = risp.imballi;
      this.tokenService.token = risp.token;
    })
    return this.imballi;
  }

  bindingImballoService() {
    this.associaImballoDto.token = this.tokenService.token;
    console.log("sto nel servizio associa imballo");
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + '/associa-imballo', this.associaImballoDto)
    o.subscribe(risp => {
      this.findImballoService();
      this.tokenService.token = risp.token;
    })
  }

  unbindingImballoService() {
    this.associaImballoDto.token = this.tokenService.token;
    console.log("sto nel servizio dissocia imballo");
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + '/dissocia-imballo', this.associaImballoDto)
    o.subscribe(risp => {
      this.findImballoService();
      this.tokenService.token = risp.token;
    })
  }
}
