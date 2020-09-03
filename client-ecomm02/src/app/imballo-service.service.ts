import { Imballo } from './dto/imballo';
import { ImballoDto } from './imballo-dto';
import { TokenService } from './token.service';
import { ImballoListDto } from './imballo-list-dto';
import { SpedizioneDto } from './dto/spedizione-dto';
import { RicercaDto } from './dto/ricerca-dto';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImballoServiceService {

  private url = "http://localhost:8080"
  imballi: Imballo[] = [];
  imballo: ImballoDto = new ImballoDto();
  imballiListMod: ImballoListDto = new ImballoListDto()
  imballoMod: ImballoDto = new ImballoDto();
  imballoVis: ImballoDto = new ImballoDto()
  ricerca: RicercaDto = new RicercaDto()


  constructor(private http: HttpClient, public tokenService: TokenService) { }

  addImballo() {
    console.log("Siamo in addImballo e imballo vale ", this.imballoMod)
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(
        this.url + "/add-imballo",
        this.imballoMod
      );
    o.subscribe(risp => {
      this.imballi = risp.imballi;
      this.tokenService.setToken(risp.token);

    });
  }

  lista(): Imballo[] {
    this.imballoMod.token = this.tokenService.getToken();
    let o: Observable<ImballoListDto> = this.http.post<ImballoListDto>(this.url + "/list-imballo", this.imballoMod)
    o.subscribe(risp => {
      this.imballi = risp.imballi;
      this.tokenService.setToken(risp.token);
    })
    return this.imballi;
  }


  findImballo() {
    this.ricerca.token = null;
    let o: Observable<ImballoListDto> = this.http.post<ImballoListDto>(
      this.url + "/find-by-descrizione-imballo",
      this.ricerca
    );
    o.subscribe(risp => {
      this.imballi = risp.imballi;
    });
    return this.imballi;
  }

  updateImballo(imballoMod: ImballoDto) {
    console.log("In updateImballo ", imballoMod);
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + "/update-imballo", imballoMod);
    o.subscribe(risp => {
      this.findImballo();
    });
  }

  removeImballo(id: number) {
    let o: Observable<ImballoDto[]> = this.http.get<ImballoDto[]>(this.url + '/delete-imballo/' + id)
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi;
  }



}
