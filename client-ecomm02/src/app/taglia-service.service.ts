import { TagliaListDto } from './taglia-list-dto';
import { TagliaDto } from './dto/taglia-dto';
import { RicercaDto } from './dto/ricerca-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taglia } from './dto/taglia';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TagliaServiceService {

  taglia: TagliaDto = new TagliaDto();
  taglie: Taglia[] = [];
  tagliaMod: TagliaDto = new TagliaDto();
  tagliaVis : TagliaDto = new TagliaDto()
  ricerca: RicercaDto = new RicercaDto();

  private url = "http://localhost:8080";

  constructor(private http: HttpClient, public tokenService: TokenService) { }

  addTaglia() {
    console.log("Siamo in addTaglia e la taglia vale ",
     this.tagliaMod)
    let o: Observable<TagliaListDto> 
    = this.http.post<TagliaListDto>(
      this.url + '/add-taglia', this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
  }

  updateTaglia(tagliaMod: TagliaDto) {
    console.log("In updateTaglia ", tagliaMod);
    let o: Observable<TagliaListDto> =
     this.http.post<TagliaListDto>(
       this.url + '/update-taglia', tagliaMod);
    o.subscribe(risp => { this.findTaglia() });
  }

  removeTaglia(){
    let o: Observable<TagliaListDto> = 
    this.http.get<TagliaListDto>(
      this.url + '/delete-taglia' + this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
    return this.taglie;
  }

  lista(): Taglia[] {
    let o: Observable<TagliaListDto> = 
    this.http.post<TagliaListDto>(
      this.url + '/list-taglia', this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
    return this.taglie;
  }

  findTaglia() {
    this.ricerca.token =null;
    let o: Observable<TagliaListDto> 
    = this.http.post<TagliaListDto>(
      this.url + '/find-taglia', this.ricerca);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
    return this.taglie;
  }



}
