import { RicercaDto } from './dto/ricerca-dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProdottoDto } from './model/prodotto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  url = 'http://localhost:8080'; 
  listaDeiProdotti: ProdottoDto[] = [];
  ricerche: RicercaDto[] = [];
  ricerca: RicercaDto = new RicercaDto();
  prodotto: ProdottoDto = new ProdottoDto();

  constructor(private http: HttpClient) { }

  lista(): ProdottoDto[]{
    let o: Observable<ProdottoDto[]> = 
    this.http.get<ProdottoDto[]>(this.url + '/lista-prodotti');
    o.subscribe(risp => { this.listaDeiProdotti = risp; });
    return this.listaDeiProdotti;
  }

  cerca(): RicercaDto[]{
    let o: Observable<ProdottoDto[]> =
    this.http.post<ProdottoDto[]>(this.url+'/prodotti-find/' , this.ricerca)
    o.subscribe(risp => {this.listaDeiProdotti = risp;});
    return this.ricerche;
  }
}
