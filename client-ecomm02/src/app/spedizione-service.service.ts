import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpedizioneDto } from './dto/spedizione-dto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpedizioneServiceService {
  private url="http://localhost:8080";
  private spedizioni: SpedizioneDto[];
  private spedizione: SpedizioneDto;
  
  public getSpedizione() : SpedizioneDto {
    return this.spedizione;
  }
  public getSpedizioni():SpedizioneDto[]{
    return this.spedizioni;
  }

  constructor(private http:HttpClient) { }
  
  aggiungi(){
    let obs:Observable<SpedizioneDto[]> =
          this.http.post<SpedizioneDto[]>(this.url+"/aggiungi-spedizione",this.spedizioni);
          obs.subscribe(risp =>{this.spedizioni=risp});
  }
  cerca():SpedizioneDto{
    let obs:Observable<SpedizioneDto> =
    this.http.get<SpedizioneDto>(this.url+"/cerca-spedizione"+this.spedizione.codice);
    obs.subscribe(risp => {this.spedizione = risp});
    return this.spedizione;
  }
  lista():SpedizioneDto[]{
    let obs:Observable<SpedizioneDto[]> =
    this.http.get<SpedizioneDto[]>(this.url+"/lista-spedizioni");
    obs.subscribe(risp =>{this.spedizioni=risp});
    return this.spedizioni;
  }
  remove(id:number){
    let obs: Observable<SpedizioneDto> =
    this.http.delete<SpedizioneDto>(this.url+"/rimuovi-spedizione");
    obs.subscribe(risp =>{this.spedizione=risp});
  }
  update(spedizione:SpedizioneDto){
    let obs: Observable<SpedizioneDto> =
    this.http.post<SpedizioneDto>(this.url+"/modifica-spedizione",spedizione);
    obs.subscribe(risp =>{this.spedizione=risp});
    return this.spedizione;
  }
}
