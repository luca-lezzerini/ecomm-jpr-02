import { RicercaDto } from './dto/ricerca-dto';
import { CategoriaDto } from './dto/categoria-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  private url = "http://localhost:8080"
  categorie: CategoriaDto[] = []; 
  categoria: CategoriaDto = new CategoriaDto();
  categTemp: CategoriaDto = new CategoriaDto();
  ricerca: RicercaDto = new RicercaDto();
  ricerche: RicercaDto[] = [];
  
  constructor(private http:HttpClient) { }

  addCategoria(){
    let o: Observable<CategoriaDto[]> =
    this.http.post<CategoriaDto[]>(this.url + "/aggiungi-categoria/", this.categTemp)
    o.subscribe(risp => {this.categorie = risp;})
  }

  lista(): CategoriaDto[] {
    let o: Observable<CategoriaDto[]> = this.http.get<CategoriaDto[]>(this.url + '/lista-categorie')
    o.subscribe(risp => { this.categorie = risp; })
    return this.categorie
  }

  cerca(): RicercaDto[]{
    let o: Observable<CategoriaDto[]> =
    this.http.post<CategoriaDto[]>(this.url+'/cerca-categoria/' , this.ricerca)
    o.subscribe(risp => {this.categorie = risp;})
    return this.ricerche;
  }

  update(categTemp: CategoriaDto){
    let o: Observable<CategoriaDto[]> =
    this.http.post<CategoriaDto[]>(this.url + "/modifica-categoria", categTemp)
    o.subscribe(risp => {this.categorie = risp;})
  }

  remove(id: number){
    let o: Observable<CategoriaDto[]> = this.http.get<CategoriaDto[]>(this.url + '/rimuovi-categoria/' + id)
    o.subscribe(risp => { this.categorie = risp; })
    return this.categorie
  }
}
