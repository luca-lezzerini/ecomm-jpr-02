import { Component, OnInit } from '@angular/core';
import { SpedizioneDto } from '../dto/spedizione-dto';
import { SpedizioneServiceService } from '../spedizione-service.service';

@Component({
  selector: 'app-spedizione-crud',
  templateUrl: './spedizione-crud.component.html',
  styleUrls: ['./spedizione-crud.component.css']
})
export class SpedizioneCRUDComponent implements OnInit {

  aggiungiState = false;
  modificaState = false;
  visualizzaState = false;
  msgSpedizioneNulla = false;

  indice: number;
  disabilitaCampi = false;
  nascondiButton = false;
  searchState = true;
  tabellaState = true;


  constructor(public meme: SpedizioneServiceService) { } //da creare

  ngOnInit() {
    this.meme.spedizioni = this.meme.lista();
  }
  searchCriteria() {
    if (this.meme.ricerca.ricerca != "") {
      this.meme.cerca();
      this.meme.ricerca.ricerca = "";
    } else {
      return this.meme.lista();
    }
  }
  conferma() {
    if (this.aggiungiState) {
      if (this.meme.temp.codice != null) {
        this.meme.aggiungi();
        this.meme.temp = new SpedizioneDto();
        this.aggiungiState = false;
      } else {
        this.msgSpedizioneNulla = false;
      }
    } else  if(this.modificaState){
      this.meme.spedizioni[this.indice] = this.meme.temp;
      this.meme.update(this.meme.temp);
      this.meme.lista();
      this.tabellaState = true;
      this.searchState = true;
      this.modificaState = false;
      this.meme.temp = new SpedizioneDto();
    }else{
      this.msgSpedizioneNulla = false;
    }
  }
  aggiungi() {
    this.aggiungiState = true;
    this.modificaState = false;
    this.meme.temp = new SpedizioneDto();
    this.nascondiButton = false;
    this.disabilitaCampi = false;
    this.msgSpedizioneNulla = true;
  }
  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
    this.visualizzaState = false;
    this.msgSpedizioneNulla = false;
    this.tabellaState = true;
    this.searchState = true;
  }
  modifica(x: SpedizioneDto, i: number) {
    this.indice = i;
    this.meme.temp = Object.assign({}, x)
    this.modificaState = true;
    this.visualizzaState = false;
    this.aggiungiState = false;
    this.nascondiButton = false;
    this.disabilitaCampi = false;
    this.searchState = false;
    this.tabellaState = false;
    this.msgSpedizioneNulla = true;
  }
  rimuovi(x: SpedizioneDto, i: number) {
    this.indice = i;
    if(confirm("Vuoi eliminare la spedizione "+ x.codice+"?")){
      this.meme.temp = Object.assign({}, x);
      this.meme.spedizioni[this.indice] = this.meme.temp;
      this.meme.remove(this.meme.temp.id);
      this.meme.lista();
      this.meme.temp = new SpedizioneDto();
      this.aggiungiState = false;
      this.modificaState = false;
      this.visualizzaState = false;
      this.nascondiButton = false;
      this.disabilitaCampi = true;
      this.searchState = true;
      this.msgSpedizioneNulla = false;
      this.tabellaState = true;
    }else{
      this.aggiungiState = false;
      this.visualizzaState = false;
      return false;
    }
  }
  visualizzaDettagliSped(x: SpedizioneDto, i: number) {
    this.indice = i;
    this.meme.temp = Object.assign({}, x);
    this.visualizzaState = true;
    this.nascondiButton = true;
    this.disabilitaCampi = true;
    this.msgSpedizioneNulla = true;
    this.searchState = true;
  }

  disabilitaCod() {
    this.meme.nascondiMessaggio = true;
  }

}
