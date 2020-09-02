import { RicercaDto } from './dto/ricerca-dto';
import { CategoriaDto } from './dto/categoria-dto';
import { Categoria } from './model/categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaListaDto } from './dto/categoria-lista-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  private url = "http://localhost:8080"
  categorie: Categoria[] = []; 
  categoria: Categoria = new Categoria();
  categTemp: Categoria = new Categoria();
  ricerca: RicercaDto = new RicercaDto();
  ricerche: RicercaDto[] = [];
  categoriaDto: CategoriaDto = new CategoriaDto();
  
  constructor(private http:HttpClient) { }

  addCategoria(){
    if(this.categoriaDto.token != null){
      let o: Observable<CategoriaListaDto> =
      this.http.post<CategoriaListaDto>(this.url + "/aggiungi-categoria/", this.categTemp)
      o.subscribe(risp => {this.categoria = risp;
                          this.ser.setToken(risp.token);}) //inietto il token e dopo il ;
    }
  }

  lista(): Categoria[] {
    let o: Observable<CategoriaListaDto> = this.http.get<CategoriaListaDto>(this.url + '/lista-categorie')
    o.subscribe(risp => { this.categoria = risp; })
    return this.categorie
  }

  cerca(): RicercaDto[]{
    let o: Observable<CategoriaListaDto> =
    this.http.post<CategoriaListaDto>(this.url+'/cerca-categoria/' , this.ricerca)
    o.subscribe(risp => {this.categoria = risp;})
    return this.ricerche;
  }

  update(categTemp: Categoria){
    let o: Observable<CategoriaListaDto> =
    this.http.post<CategoriaListaDto>(this.url + "/modifica-categoria", categTemp)
    o.subscribe(risp => {this.categoria = risp;})
  }

  remove(id: number){
    let o: Observable<CategoriaListaDto> = this.http.get<CategoriaListaDto>(this.url + '/rimuovi-categoria/' + id)
    o.subscribe(risp => { this.categoria = risp; })
    return this.categorie
  }
}
