import { TokenService } from './token.service';
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
  categoriaListaDto: CategoriaListaDto = new CategoriaListaDto;

  constructor(private http: HttpClient, private tokenSrv: TokenService) { }

  addCategoria() {
    // if(this.categoriaDto.token != null){
    this.categoriaDto.token = this.tokenSrv.getToken();
    this.categoriaDto.categoria = this.categTemp;
    console.log("CategoriaDto = ", this.categoriaDto);
    let o: Observable<CategoriaListaDto> =
      this.http.post<CategoriaListaDto>(this.url + "/aggiungi-categoria/", this.categoriaDto)
    o.subscribe(risp => {
      this.categorie = risp.listaCategoriaDto;
      this.tokenSrv.setToken(risp.token);
    }); //inietto il token e dopo il ;
    // }
  }

  lista(): Categoria[] {
    this.categoriaDto.token = this.tokenSrv.getToken();
    let o: Observable<CategoriaListaDto> = this.http.post<CategoriaListaDto>(this.url + '/lista-categorie/', this.categoriaDto)
    o.subscribe(risp => { this.categorie = risp.listaCategoriaDto; this.tokenSrv.setToken(risp.token); })
    return this.categorie
  }

  cerca(): RicercaDto[] {
    console.log("Siamo in cerca e ricerca vale ", this.ricerca);
    let o: Observable<CategoriaListaDto> =
      this.http.post<CategoriaListaDto>(this.url + '/cerca-categoria/', this.ricerca)
    o.subscribe(risp => {
      console.log(risp);
      this.categorie = risp.listaCategoriaDto;
      this.tokenSrv.setToken(risp.token);
      console.log("Finito cerca");
    });
    return this.ricerche;
  }

  update(categTemp: Categoria) {
    this.categoriaDto.categoria = categTemp;
    this.categoriaDto.token = this.tokenSrv.getToken();
    let o: Observable<CategoriaListaDto> =
      this.http.post<CategoriaListaDto>(this.url + "/modifica-categoria", this.categoriaDto)
    o.subscribe(risp => { 
      this.cerca();
      this.tokenSrv.setToken(risp.token); 
      console.log("Finito update");
    })
  }

  remove(categTemp: Categoria) {
    this.categoriaDto.categoria = categTemp;
    this.categoriaDto.token = this.tokenSrv.getToken();
    let o: Observable<CategoriaListaDto> = this.http.post<CategoriaListaDto>(this.url + '/rimuovi-categoria/', this.categoriaDto)
    o.subscribe(risp => { this.categorie = risp.listaCategoriaDto; this.tokenSrv.setToken(risp.token); })
    return this.categorie
  }
}
