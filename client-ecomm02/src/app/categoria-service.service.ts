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

  cerca(){
    let o: Observable<CategoriaDto[]> =
    this.http.get<CategoriaDto[]>(this.url+'/cerca-categoria/' + this.categoria.descrizione)
    o.subscribe(risp => {this.categorie = risp;})
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
