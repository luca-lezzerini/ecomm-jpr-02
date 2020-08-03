import { Imballo } from './../module/imballo';
import { ImballoServiceService } from './../imballo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-imballo-crud',
  templateUrl: './imballo-crud.component.html',
  styleUrls: ['./imballo-crud.component.css']
})
export class ImballoCrudComponent implements OnInit {

 imballi : Imballo[] = []
 imballo : Imballo

  constructor(private router: Router, public srvImballo: ImballoServiceService) { }

  ngOnInit(): void {
  
    this.imballi = this.srvImballo.lista()

  }

  addImballo(imballo) {
   this.srvImballo.addImballo(imballo);
  }

  removeImballo(id: number) {

    this.srvImballo.removeImballo(id)
  }

  updateImballo(id: number) {

    this.srvImballo.updateImballo(id)
  }


}
