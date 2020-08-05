import { ImballoDto } from '../dto/imballo-dto';
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
  id: number
  descrizione: string
  costo: number
  state = 'ricerca';

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

  updateImballo() {
    if (this.descrizione.length > 0 && this.costo > 0) {
      let imballo: ImballoDto = new ImballoDto(this.id, this.descrizione, this.costo)
      this.srvImballo.updateImballo(imballo)                                   //da rivedere
    }
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
