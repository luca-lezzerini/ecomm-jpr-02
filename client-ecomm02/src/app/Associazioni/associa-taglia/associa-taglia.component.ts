import { Prodotto } from './../../model/prodotto';
import { Router } from '@angular/router';
import { ProdottoService } from './../../prodotto.service';
import { TagliaServiceService } from './../../service/taglia-service.service';
import { Component, OnInit } from '@angular/core';
import { RicercaDto } from 'src/app/dto/ricerca-dto';

@Component({
  selector: 'app-associa-taglia',
  templateUrl: './associa-taglia.component.html',
  styleUrls: ['./associa-taglia.component.css']
})
export class AssociaTagliaComponent implements OnInit {

  ricerca: RicercaDto = new RicercaDto();
  state = false;




  constructor(public memT : TagliaServiceService, public memP : ProdottoService, private router: Router) { }

  ngOnInit() {
    this.memP.lista();
  }
  
  seleziona(prodotto: Prodotto): void {
    this.state = true;
    this.memP.prodottoForm = Object.assign({}, prodotto); 
  }

  cercaProdotto() {
    this.memP.cerca(this.ricerca);
  }
}
