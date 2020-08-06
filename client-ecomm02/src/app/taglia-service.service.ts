import { Observable } from 'rxjs';
import { TagliaDto } from './dto/taglia-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagliaServiceService {

  taglia: TagliaDto = new TagliaDto();
  taglie: TagliaDto[] = [];
  tagliaMod: TagliaDto = new TagliaDto();

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addTaglia() {
    let o: Observable<TagliaDto[]> = this.http.post<TagliaDto[]>(this.url + '/add-taglia', this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp; });
  }

  updateTaglia(tagliaMod: TagliaDto) {
    let o: Observable<TagliaDto> = this.http.post<TagliaDto>(this.url + '/add-taglia', tagliaMod);
    o.subscribe(risp => { this.taglia = risp; });
  }

  removeTaglia(id: number) {
    let o: Observable<TagliaDto> = this.http.get<TagliaDto>(this.url + '/remove-taglia' + id);
    o.subscribe(risp => { this.taglia = risp; });
    return this.taglia;
  }

  lista(): TagliaDto[] {
    let o: Observable<TagliaDto[]> = this.http.get<TagliaDto[]>(this.url + '/list-taglia');
    o.subscribe(risp => { this.taglie = risp; });
    return this.taglie;
  }

  findTagliaSigla(taglia: TagliaDto) {
    let o: Observable<TagliaDto[]> = this.http.post<TagliaDto[]>(this.url + '/find-taglia-by-sigla', taglia)
    o.subscribe(risp => { this.taglie = risp; })
  }


}
