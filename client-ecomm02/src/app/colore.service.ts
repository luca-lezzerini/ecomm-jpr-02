import { ColoreDto } from './dto/colore-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ColoreService {

  private url = "http://localhost:8080";
  listaColori: ColoreDto[] = [];

  
  constructor(private http:HttpClient) { }
  
  colori() {
    let o: Observable<ColoreDto> =
    this.http.get<ColoreDto>(this.url + "/Colori")
    o.subscribe(risp => {this.listaColori = risp;})
  }

  addColore(colore: ColoreDto){
    let o: Observable<ColoreDto> =
    this.http.post<ColoreDto>(this.url + "/Colori/Add", colore)
    o.subscribe(risp => {colore = risp;});
    this.colori();
  }

  deleteColore(colore: ColoreDto){
    let o: Observable<ColoreDto> =
    this.http.post<ColoreDto>(this.url + "/Colori/Delete", colore)
    this.colori();
  }

  updateColore(colore: ColoreDto){
    let updatedColore = new ColoreDto();
    let o: Observable<ColoreDto> =
    this.http.post<ColoreDto>(this.url + "/Colori/Update", colore)
    o.subscribe(risp => {updatedColore = risp;})
    this.colori();
  }

  findColore(colore: ColoreDto): ColoreDto{
    let coloreTrovato: ColoreDto = new ColoreDto();
    let o: Observable<ColoreDto> =
    this.http.post<ColoreDto>(this.url + "/Colori/Find", colore)
    o.subscribe(risp => {coloreTrovato = risp;})
    return coloreTrovato;
  }
}