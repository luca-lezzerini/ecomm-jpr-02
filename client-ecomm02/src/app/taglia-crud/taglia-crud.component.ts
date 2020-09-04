import { TagliaDto } from './../dto/taglia-dto';
import { TagliaServiceService } from './../taglia-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taglia } from '../dto/taglia';

@Component({
  selector: 'app-taglia-crud',
  templateUrl: './taglia-crud.component.html',
  styleUrls: ['./taglia-crud.component.css']
})
export class TagliaCrudComponent implements OnInit {

  state = "ricerca";
  state2 = ""
  tagliaSelezionata: number;
  msg ="";

  constructor(private router: Router, public memT: TagliaServiceService) { }

  ngOnInit(): void {
    this.memT.taglie = this.memT.lista();
  }

  addTaglia() {
    this.state = "aggiungi"
    this.state2 = ""
    this.memT.ricerca.ricerca="";
    this.msg ="";
  }

  updateTaglia(taglia: Taglia, i: number) {
    this.state = "modifica";
    this.state2="";
    this.tagliaSelezionata = i;
    console.log(taglia);
    this.memT.tagliaMod.taglia = Object.assign({}, taglia);
    this.msg="";
  }

  removeTaglia(taglia: Taglia) {
    this.memT.removeTaglia();
    console.log("taglia eliminata");
    this.memT.tagliaMod = new TagliaDto();
    this.state = "ricerca"
  }

  findTaglia() {
    this.state2 = "";
    if (this.memT.ricerca.ricerca.length > 0) {
      this.memT.findTaglia();
    } else {
      this.memT.lista();
    }
  }

  conferma() {
    console.log("Entrato in conferma");
    if (this.state == "aggiungi") {
      console.log(this.memT.tagliaMod);
      if (this.memT.tagliaMod.taglia.descrizione && this.memT.tagliaMod.taglia.sigla) {
        this.memT.addTaglia()
        this.memT.tagliaMod = new TagliaDto()
        this.state = "ricerca"
      } else {
        this.state = "aggiungi"
        this.msg = "riempire tutti i campi!"
      }
    }
    else if (this.state == "modifica") {
      console.log("Siamo in confirm - modifica");
      if (this.memT.tagliaMod.taglia.descrizione && this.memT.tagliaMod.taglia.sigla) {
        this.memT.updateTaglia(this.memT.tagliaMod)
        this.memT.tagliaMod = new TagliaDto()
        this.state = "ricerca"
      } else {
        this.state = "modifica"
        this.msg = "riempire tutti i campi!"
      }
    }
  }
  chiudi() {
    this.state = "ricerca";
    this.memT.tagliaMod = new TagliaDto();
  }

  visualizza(t: TagliaDto, n: number) {

    if (this.state != "aggiungi") {
      this.state2 = "visualizza"
      this.tagliaSelezionata = n
      this.memT.tagliaVis = Object.assign({}, t)

    }

  }
  canRemove(t: Taglia, n: number) {
    this.state = "delete";
    this.state="";
    this.tagliaSelezionata = n
    this.memT.tagliaMod.taglia = Object.assign({}, t)
  }
}
