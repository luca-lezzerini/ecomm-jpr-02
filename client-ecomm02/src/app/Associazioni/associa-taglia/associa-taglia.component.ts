import { Prodotto } from './../../model/prodotto';
import { Router } from '@angular/router';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { TagliaServiceService } from './../../service/taglia-service.service';
import { Component, OnInit } from '@angular/core';
import { RicercaDto } from 'src/app/dto/ricerca-dto';
import { Taglia } from 'src/app/model/taglia';

@Component({
  selector: 'app-associa-taglia',
  templateUrl: './associa-taglia.component.html',
  styleUrls: ['./associa-taglia.component.css']
})
export class AssociaTagliaComponent implements OnInit {

  ricerca: RicercaDto = new RicercaDto();
  stateVisualizza = false;
  stateControllo: boolean;
  indexTaglia: number;

  constructor(public memT: TagliaServiceService, public memP: ProdottoService, private router: Router) { }

  ngOnInit() {
    this.memT.taglie = this.memT.listaService();
    this.memP.lista();
    console.log(this.stateVisualizza);
  }

  seleziona(prodotto: Prodotto): void {
    this.stateVisualizza = true;
    this.memT.associaTagliaDto.prodotto = Object.assign({}, prodotto);
    console.log(this.stateVisualizza);  
    this.memT.listaService();  
    console.log(this.memP.listaProdotti)
  }

  associataglia(taglia: Taglia, n: number) {
    this.indexTaglia = n;
    this.memT.associaTagliaDto.taglia = Object.assign({}, taglia);
    console.log(this.memT.associaTagliaDto.taglia);
    this.memT.associaTagliaService(); 
    window.location.reload();      
    console.log(this.memT.taglie)
  }
  dissociataglia() {

    this.memT.dissociaTagliaService();
    window.location.reload();  
  }

  cercaProdotto() {
    this.memP.cerca(this.ricerca);
  }
}
