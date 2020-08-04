import { Imballo } from './model/imballo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImballoServiceService {

  private url : 'http://localhost:8080/'

  
  constructor(private http : HttpClient) { }

  imballi : Imballo[] = []



  lista(): Imballo[] {
    let o: Observable<Imballo[]> = this.http.get<Imballo[]>(this.url + '/listaImballi')
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi
  }

  addImballo (imballo : Imballo) {

 

  }

  removeImballo(id: number) {


  }

  updateImballo(id: number) {

  }

  

}
