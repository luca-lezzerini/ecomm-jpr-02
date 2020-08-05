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
  indice: number;
  temp: SpedizioneDto;

  constructor(public meme: SpedizioneServiceService) { } //da creare

  ngOnInit() {
    this.meme.spedizioni = this.meme.lista();
  }
  searchCriteria() {
    if (this.meme.spedizione.codice != "") {
      this.meme.cerca();
    } else {
      return this.meme.lista();
    }
  }
  conferma() {
    if (this.aggiungiState) {
      this.meme.aggiungi();
      this.meme.temp = new SpedizioneDto();
    } else {
      this.meme.spedizioni[this.indice] = this.meme.temp;
      this.meme.update(this.meme.temp);
      this.meme.temp = new SpedizioneDto();
    }
  }
  aggiungi() {
    this.aggiungiState = true;
  }
  annulla() {
    this.aggiungiState = false;
    this.modificaState = false;
  }
  modifica(x: SpedizioneDto, i: number) {
    this.indice = i;
    this.temp = Object.assign({}, x)
    this.modificaState = true;
  }
  rimuovi(id: number) {
    this.meme.remove(id);
  }
}
