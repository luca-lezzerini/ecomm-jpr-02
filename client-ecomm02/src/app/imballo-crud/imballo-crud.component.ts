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

  imballi: ImballoDto[] = []
  imballo: ImballoDto
  imballoMod : ImballoDto 
  id: number
  descrizione: string
  costo: number
  state = 'ricerca';
  imballoNumber : number
  

  constructor(private router: Router, public srvImballo: ImballoServiceService) { }

  ngOnInit(): void {

    this.imballi = this.srvImballo.lista()

  }

  addImballo() {

    this.state = "aggiungi"

  }

  removeImballo(id: number) {

    this.srvImballo.removeImballo(id)
  }

  updateImballo(imballo : ImballoDto, i: number) {
    this.imballoNumber = i
    this.state = "modifica"
    this.imballoMod = Object.assign({}, imballo)
    
    
  }
  confirmationUpdate() {
   console.log("modifica")
   
    this.srvImballo.updateImballo(this.imballoMod)
  }

  findImballo() {
    this.imballo = new ImballoDto(this.id, this.descrizione, this.costo)
    this.srvImballo.findImballo(this.imballo)
    
  }

  chiudi() {
    this.state = 'ricerca';
    this.imballi = this.srvImballo.lista()

  }
  conferma() {

    this.imballo = new ImballoDto(this.id, this.descrizione, this.costo)
    this.srvImballo.addImballo(this.imballo)
    this.imballi = this.srvImballo.lista()

  }

}
