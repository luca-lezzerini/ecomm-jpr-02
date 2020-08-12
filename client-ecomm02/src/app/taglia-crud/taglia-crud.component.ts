import { TagliaDto } from './../dto/taglia-dto';
import { TagliaServiceService } from './../taglia-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taglia-crud',
  templateUrl: './taglia-crud.component.html',
  styleUrls: ['./taglia-crud.component.css']
})
export class TagliaCrudComponent implements OnInit {

  state = "ricerca";
  state2 = ""
  tagliaSelezionata: number;

  constructor(private router: Router, public memT: TagliaServiceService) { }

  ngOnInit(): void {
    this.memT.taglie = this.memT.lista();
  }

  addTaglia() {
    this.state = "aggiungi"
    this.state2 = ""
  }

  updateTaglia(taglia: TagliaDto, i: number) {
    this.state = "modifica";
    this.tagliaSelezionata = i;
    this.memT.tagliaMod = Object.assign({}, taglia);
  }

  removeTaglia(id: number) {
    this.memT.removeTaglia(id);
    this.memT.taglia = new TagliaDto();
    this.memT.taglie = this.memT.lista();
  }

  findTaglia() {
    if (this.memT.ricerca.ricerca.length > 0) {
      this.memT.findTagliaSigla();
    } else {
      this.memT.lista();
    }
    this.state2 = ""
  }

  conferma() {
    if (this.state == "aggiungi") {
      this.memT.addTaglia();
      this.memT.tagliaMod = new TagliaDto();
    } else {
      this.memT.taglie[this.tagliaSelezionata] = this.memT.tagliaMod;
      this.memT.updateTaglia(this.memT.tagliaMod);
      this.memT.tagliaMod = new TagliaDto();
    }
    this.state = "ricerca"
    this.state2 = ""
  }

  chiudi() {
    this.state = "ricerca";
    this.state2 = ""
  }

  visualizza(t: TagliaDto, n: number) {
  
    if (this.state != "aggiungi") {
      this.state2 = "visualizza"
      this.tagliaSelezionata = n
      this.memT.tagliaVis = Object.assign({}, t)
  
    } 
   
  }
}
