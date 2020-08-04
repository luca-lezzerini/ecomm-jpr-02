import { CategoriaDto } from './dto/categoria-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  private url = "http://localhost:8080"
  categorie: CategoriaDto[]; 
  categoria: CategoriaDto;
  
  constructor(private http:HttpClient) { }

  addCategoria(){
    let o: Observable<CategoriaDto[]> =
    this.http.post<CategoriaDto[]>(this.url + "/aggiungiCategoria", this.categoria)
    o.subscribe(risp => {this.categorie = risp;})
  }

  lista(): CategoriaDto[] {
    let o: Observable<CategoriaDto[]> = this.http.get<CategoriaDto[]>(this.url + '/listaCategorie')
    o.subscribe(risp => { this.categorie = risp; })
    return this.categorie
  }
}
