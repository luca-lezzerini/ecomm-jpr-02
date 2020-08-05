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
  imballoSelezionato: number

  constructor(private router: Router, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.mem.imballi = this.mem.lista();
  }

  addImballo() {
    this.state = "aggiungi"
  }

  updateImballo(imballo: ImballoDto, i: number) {
    this.state = "modifica"
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

    }

    else {
      this.mem.imballi[this.imballoSelezionato] = this.mem.imballoMod;
      this.mem.updateImballo(this.mem.imballoMod)
      this.mem.imballoMod = new ImballoDto()


    }


  }
  chiudi() {
    this.state = "ricerca"
  }
  findImballo() {

   if (this.mem.imballo.descrizione.length > 0) {
      this.mem.findImballo(this.mem.imballo)

    } 
    else {
      this.mem.lista()
    }
  
  }
}
