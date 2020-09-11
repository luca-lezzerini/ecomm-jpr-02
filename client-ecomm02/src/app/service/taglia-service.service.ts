import { AssociaTagliaDto } from './../dto/associa-taglia-dto';
import { Taglia } from './../model/taglia';
import { Observable } from 'rxjs';
import { TagliaListDto } from '../dto/taglia-list-dto';
import { TagliaDto } from '../dto/taglia-dto';
import { TokenService } from '../token.service';
import { RicercaDto } from '../dto/ricerca-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TagliaServiceService {

  taglia: TagliaDto = new TagliaDto();
  taglie: Taglia[] = [];
  tagliaMod: TagliaDto = new TagliaDto();
  tagliaVis : TagliaDto = new TagliaDto()
  ricerca: RicercaDto = new RicercaDto();
  associatagliaDto : AssociaTagliaDto = new AssociaTagliaDto();

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
      this.tokenService.token=risp.token; });
  }

  updateTagliaService(tagliaMod: TagliaDto) {
    console.log("In updateTaglia ", tagliaMod);
    let o: Observable<TagliaListDto> =
     this.http.post<TagliaListDto>(
       this.url + '/update-taglia', tagliaMod);
    o.subscribe(risp => { this.findTagliaService();
      this.tokenService.token=risp.token; });

  }

  removeTagliaService(){
    let o: Observable<TagliaListDto> =
    this.http.post<TagliaListDto>(
      this.url + '/delete-taglia',this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.token=risp.token; });
      console.log("taglia eliminata");
    return this.taglie;
  }

  listaService(): Taglia[] {
    let o: Observable<TagliaListDto> =
    this.http.post<TagliaListDto>(
      this.url + '/list-taglia', this.tagliaMod);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.token=risp.token; });
    return this.taglie;
  }

  findTagliaService() {
    this.ricerca.token =null;
    let o: Observable<TagliaListDto>
    = this.http.post<TagliaListDto>(
      this.url + '/find-taglia', this.ricerca);
    o.subscribe(risp => { this.taglie = risp.taglie;
      this.tokenService.token=risp.token; });
    return this.taglie;
  }

  associaTagliaService() {
    this.associatagliaDto.token = this.tokenService.token;
  console.log("sto nel servizio associa taglia");
  let o : Observable<AssociaTagliaDto> = 
  this.http.post<AssociaTagliaDto>(this.url + "/associa-taglia", this.associatagliaDto);
  o.subscribe(risp => {this.listaService();
  //this.tokenService.token=risp.token;
  })

  }



}
