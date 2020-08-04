import { Imballo } from './dto/imballo-dto';
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
  imballo : Imballo


  lista(): Imballo[] {

    let o: Observable<Imballo[]> = this.http.get<Imballo[]>(this.url + '/listaImballi')
    o.subscribe(risp => { this.imballi = risp; })
    return this.imballi
  }

  addImballo (imballo : Imballo) {

    let o : Observable<Imballo> = this.http.post<Imballo>(this.url + "/addImballo", imballo)
    o.subscribe(risp => {imballo = risp;})

  }

  removeImballo(id: number) {

 let o: Observable<Imballo> = this.http.get<Imballo>(this.url + '/deleteImballo/' + id)
     o.subscribe(risp => { this.imballo = risp; })
   return this.imballo;

  }

  updateImballo(id: number) {

  }

  findImballo(id: number) {
    
  }

  

}
