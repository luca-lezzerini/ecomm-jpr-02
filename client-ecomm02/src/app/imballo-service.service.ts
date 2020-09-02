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
  imballi: ImballoDto[] = [];
  imballo: ImballoDto = new ImballoDto();
  imballoMod: ImballoDto = new ImballoDto();
  imballoVis: ImballoDto = new ImballoDto()
  ricerca: RicercaDto = new RicercaDto()


  constructor(private http: HttpClient, public tokenService : TokenService) { }

  addImballo() {
    let o: Observable<ImballoListDto> =
      this.http.post<ImballoListDto>(this.url + "/add-imballo", this.imballoMod)
    o.subscribe(risp => { this.imballi = risp.imballi;
    this.tokenService.setToken(risp.token);
    
    })
  }

  lista(): ImballoDto[] {
    let o: Observable<ImballoDto[]> = this.http.post<ImballoDto[]>(this.url + "/list-imballo", ImballoDto)
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi
  }

  findImballo(): ImballoDto[] {
    this.ricerca.token = null;
    let o: Observable<ImballoDto[]> = this.http.post<ImballoDto[]>(this.url + "/find-by-descrizione-imballo", this.ricerca.ricerca)
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi


  }

  updateImballo(imballoMod: ImballoDto) {
    let o: Observable<ImballoDto> =
      this.http.post<ImballoDto>(this.url + "/update-imballo", imballoMod)
    o.subscribe(risp => { this.imballo = risp; })
  }

  removeImballo(id: number): ImballoDto[] {
    let o: Observable<ImballoDto[]> = this.http.get<ImballoDto[]>(this.url + '/delete-imballo/' + id)
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi;
  }



}
