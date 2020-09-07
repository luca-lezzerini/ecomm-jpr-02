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

  addTagliaService() {
    console.log("Siamo in addTaglia e la taglia vale ",
     this.tagliaMod)
    let o: Observable<TagliaListDto> 
    = this.http.post<TagliaListDto>(
      this.url + '/add-taglia', this.tagliaMod);
    o.subscribe(risp => { //this.taglie = risp.taglie;
      this.findTagliaService();
      this.tokenService.setToken(risp.token); });
  }

  updateTagliaService(tagliaMod: TagliaDto) {
    console.log("In updateTaglia ", tagliaMod);
    let o: Observable<TagliaListDto> =
     this.http.post<TagliaListDto>(
       this.url + '/update-taglia', tagliaMod);
    o.subscribe(risp => { this.findTagliaService();
      this.tokenService.setToken(risp.token); });
  
  }

  removeTagliaService(){
    let o: Observable<TagliaListDto> = 
    this.http.post<TagliaListDto>(
      this.url + '/delete-taglia',this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
      console.log("taglia eliminata");
    return this.taglie;
  }

  listaService(): Taglia[] {
    let o: Observable<TagliaListDto> = 
    this.http.post<TagliaListDto>(
      this.url + '/list-taglia', this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
    return this.taglie;
  }

  findTagliaService() {
    this.ricerca.token =null;
    let o: Observable<TagliaListDto> 
    = this.http.post<TagliaListDto>(
      this.url + '/find-taglia', this.ricerca);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.setToken(risp.token); });
    return this.taglie;
  }



}
