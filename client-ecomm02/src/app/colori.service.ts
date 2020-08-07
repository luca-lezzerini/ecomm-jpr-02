import { Injectable } from '@angular/core';
import { ColoreDto } from './dto/colore-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoriService {
  urlPath = 'http://localhost:8080';
  coloreForm: ColoreDto = new ColoreDto();
  listaColori: ColoreDto[] = [];
  constructor(private http: HttpClient) { }
  lista(): void {
    const oss: Observable<ColoreDto[]> = this.http.get<ColoreDto[]>(this.urlPath + '/lista-colori');
    const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
  }

  cerca(colore: ColoreDto): ColoreDto {
    if (colore.colore == null) {
      this.lista();
    } else {
      const oss: Observable<ColoreDto[]> = this.http.post<ColoreDto[]>(this.urlPath + '/colori-find', colore);
      const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
    }
    return new ColoreDto();
  }
  conferma(state: string): string {
    let urlEnd: string;
    switch (state) {
      case 'modifica': {
        urlEnd = '/colori-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/colori-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/colori-add';
        break;
      }

    }
    const oss: Observable<ColoreDto> = this.http.post<ColoreDto>(this.urlPath + urlEnd, this.coloreForm);
    const sub: Subscription = oss.subscribe(risp => { this.lista(); });
    // this.state = 'ricerca';
    this.coloreForm = new ColoreDto();
    return 'ricerca';
  }
}
