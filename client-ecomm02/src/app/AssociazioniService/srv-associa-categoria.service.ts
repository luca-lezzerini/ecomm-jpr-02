import { Injectable } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssociaCategoriaDto } from '../dto/associa-categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class SrvAssociaCategoriaService {

  private url = "http://localhost:8080";
  categoria: Categoria = new Categoria();
  categorie: Categoria[] = [];
  prodottoSelezionato: Prodotto = new Prodotto();
  categoriaAssociata: AssociaCategoriaDto = new AssociaCategoriaDto();
  
  constructor(public memcat: SrvAssociaCategoriaService, private http: HttpClient) { }

  /* associaCat(c: Categoria, p: Prodotto){
    let o: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.url + '/associa-categorie/', this.categoriaAssociata);
    o.subscribe(risp => {
      this.categorie = risp.listaCategoriaDto;
    });
  } */
}
