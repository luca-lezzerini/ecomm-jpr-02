import { ImballoDto } from './../dto/imballo-dto';

import { ImballoServiceService } from './../imballo-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RicercaDto } from '../dto/ricerca-dto';


@Component({
  selector: 'app-imballo-crud',
  templateUrl: './imballo-crud.component.html',
  styleUrls: ['./imballo-crud.component.css']
})
export class ImballoCrudComponent implements OnInit {

  state = "ricerca"
  state2 = ""
  imballoSelezionato: number
  msg = ""

  constructor(private router: Router, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.mem.imballi = this.mem.lista();
  }

  addImballo() {
    this.state = "aggiungi"
    this.state2 = ""
    this.mem.ricerca.ricerca = ""
    this.msg = ""
  }

  updateImballo(imballo: ImballoDto, i: number) {
    this.state = "modifica"
    this.state2 = ""
    this.imballoSelezionato = i;
    this.mem.imballoMod = Object.assign({}, imballo)
    this.msg = ""
  }

  removeImballo(id: number) {
    this.mem.removeImballo(id)
    this.mem.imballi = this.mem.lista();
    this.state = "ricerca"
  }

  confirm() {
    if (this.state == "aggiungi") {
      if (this.mem.imballoMod.descrizione && this.mem.imballoMod.costo > 0) {
        this.mem.addImballo()
        this.mem.imballoMod = new ImballoDto()
        this.state = "ricerca"
      } else {
        this.state = "aggiungi"
        this.msg = "riempire tutti i campi!"
      }
    }
    else if (this.state == "modifica") {
      if (this.mem.imballoMod.descrizione && this.mem.imballoMod.costo > 0) {
        this.mem.imballi[this.imballoSelezionato] = this.mem.imballoMod;

        this.mem.updateImballo(this.mem.imballoMod)
        this.mem.imballoMod = new ImballoDto()
        this.state = "ricerca"
      } else {
        this.state = "modifica"
        this.msg = "riempire tutti i campi!"
      }
    }
  }

  close() {
    this.state = "ricerca"
    this.mem.imballoMod = new ImballoDto()

  }

  findImballo() {

    this.state2 = ""
    // if (this.mem.ricerca.ricerca.length > 0) {

      this.mem.findImballo()
    // } else {
    //   this.mem.lista()
    // }

  }

  view(i: ImballoDto, n: number) {

    if (this.state != "aggiungi") {
      this.state2 = "visualizza"
      this.imballoSelezionato = n
      this.mem.imballoVis = Object.assign({}, i)
    }
  }
  canRemove(i: ImballoDto, n: number) {
    this.state = "delete"
    this.state2 = "";
    this.imballoSelezionato = n
    this.mem.imballoMod = Object.assign({}, i)

  }
}
