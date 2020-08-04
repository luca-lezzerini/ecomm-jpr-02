import { Imballo } from '../dto/imballo-dto';

import { ImballoServiceService } from './../imballo-service.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-imballo-crud',
  templateUrl: './imballo-crud.component.html',
  styleUrls: ['./imballo-crud.component.css']
})
export class ImballoCrudComponent implements OnInit {

  imballi: Imballo[] = []

  id: number
  descrizione: string
  cost: number
  msg: string

  constructor(private router: Router, public srvImballo: ImballoServiceService) { }

  ngOnInit(): void {

    this.imballi = this.srvImballo.lista()

  }

  addImballo() {
    
      let imballo: Imballo = new Imballo(this.id, this.descrizione, this.cost)
      this.srvImballo.addImballo(imballo)
      this.msg = "inserito con successo!"
   
  }

  removeImballo(id: number) {

    this.srvImballo.removeImballo(id)
  }

  updateImballo() {
    if (this.descrizione.length > 0 && this.cost > 0) {
      let imballo: Imballo = new Imballo(this.id, this.descrizione, this.cost)
      this.srvImballo.updateImballo(imballo)                                   //da rivedere
    }  
  }

  findImballo() {
    this.srvImballo.findImballo()
  }


}
