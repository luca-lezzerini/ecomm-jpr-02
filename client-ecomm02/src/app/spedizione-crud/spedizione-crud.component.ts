import { Component, OnInit } from '@angular/core';
import { SpedizioneDto } from '../dto/spedizione-dto';
import { SpedizioneServiceService } from '../spedizione-service.service';

@Component({
  selector: 'app-spedizione-crud',
  templateUrl: './spedizione-crud.component.html',
  styleUrls: ['./spedizione-crud.component.css']
})
export class SpedizioneCRUDComponent implements OnInit {

  aggiungiStateSped = false;
  modificaStateSped = false;
  indice: number;
  disabilitaCampi = false;
  nascondiButton = false;
  nascostoSearch = true;
  tabellaState = true;


  constructor(public meme: SpedizioneServiceService) { } //da creare

  ngOnInit() {
    this.meme.spedizioni = this.meme.lista();
  }
  searchCriteria() {
    if (this.meme.ricerca.ricerca != null) {
      this.meme.cerca();
      this.meme.ricerca.ricerca = "";
      this.aggiungiStateSped = false;
    } else {
      return this.meme.lista();
    }
  }
  conferma() {
    if (this.aggiungiStateSped) {
      if (this.meme.temp.codice != null) {
        this.meme.aggiungi();
        this.meme.temp = new SpedizioneDto();
      } else {
        this.meme.nascondiMessaggio = false;
      }
    } else {
      this.meme.spedizioni[this.indice] = this.meme.temp;
      this.meme.update(this.meme.temp);
      this.meme.lista();
      this.tabellaState = true;
      this.nascostoSearch = true;
      this.meme.temp = new SpedizioneDto();
    }
  }
  aggiungi() {
    this.aggiungiStateSped = true;
    this.modificaStateSped = false;
    this.meme.temp = new SpedizioneDto();
    this.nascondiButton = false;
    this.disabilitaCampi = false;
    this.meme.nascondiMessaggio = true;
  }
  annulla() {
    this.aggiungiStateSped = false;
    this.modificaStateSped = false;
    this.tabellaState = true;
    this.nascostoSearch = true;
  }
  modifica(x: SpedizioneDto, i: number) {
    this.indice = i;
    this.meme.temp = Object.assign({}, x)
    this.aggiungiStateSped = false;
    this.modificaStateSped = true;
    this.nascondiButton = false;
    this.disabilitaCampi = false;
    this.nascostoSearch = false;
    this.tabellaState = false;
  }
  rimuovi(id: number) {
    this.meme.remove(id);
    this.meme.temp = new SpedizioneDto();
  }
  visualizzaDettagliSped(x: SpedizioneDto, i: number) {
    this.indice = i;
    this.meme.temp = Object.assign({}, x);
    this.aggiungiStateSped = false;
    this.modificaStateSped = true;
    this.nascondiButton = true;
    this.disabilitaCampi = true;
  }

  disabilitaCod() {
    this.meme.nascondiMessaggio = true;
  }

}
