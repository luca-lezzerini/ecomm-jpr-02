import { ImballoDto } from './../dto/imballo-dto';

import { ImballoServiceService } from './../imballo-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-imballo-crud',
  templateUrl: './imballo-crud.component.html',
  styleUrls: ['./imballo-crud.component.css']
})
export class ImballoCrudComponent implements OnInit {

  state = "ricerca"
  state2 = ""
  imballoSelezionato: number

  constructor(private router: Router, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.mem.imballi = this.mem.lista();
  }

  addImballo() {
    this.state = "aggiungi"
    this.state2 = ""
  }

  updateImballo(imballo: ImballoDto, i: number) {
    this.state = "modifica"
    this.state2 = ""
    this.imballoSelezionato = i;
    this.mem.imballoMod = Object.assign({}, imballo)
  }

  removeImballo(id: number) {
    this.mem.removeImballo(id)
    this.mem.imballi = this.mem.lista();
  }

  conferma() {
    if (this.state == "aggiungi") {
      this.mem.addImballo()
      this.mem.imballoMod = new ImballoDto()
    } else {
      this.mem.imballi[this.imballoSelezionato] = this.mem.imballoMod;
      this.mem.updateImballo(this.mem.imballoMod)
      this.mem.imballoMod = new ImballoDto()
    }
    this.state = "ricerca"
  }

  chiudi() {
    this.state = "ricerca"
  }

  findImballo() {

    this.state2 = ""
    if (this.mem.ricerca.ricerca.length > 0) {

      this.mem.findImballo()
    } else {
      this.mem.lista()
    }

  }

  visualizza(i: ImballoDto, n: number) {

    if (this.state != "aggiungi") {
      this.state2 = "visualizza"
      this.imballoSelezionato = n
      this.mem.imballoVis = Object.assign({}, i)
    }



  }
}
