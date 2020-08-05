import { Component, OnInit } from '@angular/core';
import { SpedizioneDto } from '../dto/spedizione-dto';
import { SpedizioneServiceService } from '../spedizione-service.service';

@Component({
  selector: 'app-spedizione-crud',
  templateUrl: './spedizione-crud.component.html',
  styleUrls: ['./spedizione-crud.component.css']
})
export class SpedizioneCRUDComponent implements OnInit {
  private aggiungiState = false;
  private modificaState = false;
  private indice:number;
  private temp:SpedizioneDto;
  
  constructor(public meme:SpedizioneServiceService) { } //da creare
    
  ngOnInit() {
  }
  searchCriteria() {
    if (this.meme.getSpedizione().codice != ""){
      this.meme.cerca();
    } else {
      return this.meme.lista();
    }
  }
  aggiungi() {
    this.aggiungiState=true;
  }
  annulla() {
    this.aggiungiState,this.modificaState=false;
  }
  modifica(x:SpedizioneDto,i:number) {
    this.indice=i;
    this.temp=Object.assign({},x)
    this.modificaState=true;
   }
  rimuovi(id:number) {
    this.meme.remove(id);
   }
}
