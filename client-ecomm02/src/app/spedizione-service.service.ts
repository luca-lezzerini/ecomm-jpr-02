import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpedizioneDto } from './dto/spedizione-dto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpedizioneServiceService {
  private url = "http://localhost:8080";
  spedizioni: SpedizioneDto[] = [];
  spedizione: SpedizioneDto;
  temp: SpedizioneDto = new SpedizioneDto();

  constructor(private http: HttpClient) { }

  aggiungi() {
    let obs: Observable<SpedizioneDto[]> =
      this.http.post<SpedizioneDto[]>(this.url + "/aggiungi-spedizione/", this.temp);
    obs.subscribe(risp => { this.spedizioni = risp });
  }
  cerca() {
    let obs: Observable<SpedizioneDto[]> =
      this.http.get<SpedizioneDto[]>(this.url + "/cerca-spedizione/" + this.spedizione.codice);
    obs.subscribe(risp => { this.spedizioni = risp });
  }
  lista(): SpedizioneDto[] {
    let obs: Observable<SpedizioneDto[]> =
      this.http.get<SpedizioneDto[]>(this.url + "/lista-spedizioni");
    obs.subscribe(risp => { this.spedizioni = risp });
    return this.spedizioni;
  }
  remove(id: number) {
    let obs: Observable<SpedizioneDto[]> =
      this.http.get<SpedizioneDto[]>(this.url + "/rimuovi-spedizione/" + id);
    obs.subscribe(risp => { this.spedizioni = risp });
  }
  update(temp: SpedizioneDto) {
    let obs: Observable<SpedizioneDto> =
      this.http.post<SpedizioneDto>(this.url + "/modifica-spedizione/", temp);
    obs.subscribe(risp => { this.spedizione = risp });
    return this.spedizione;
  }
}
