import { Prodotto } from './../../model/prodotto';
import { Router } from '@angular/router';
import { ProdottoService } from './../../prodotto.service';
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
  }

  seleziona(prodotto: Prodotto): void {
    this.stateVisualizza = true;
    this.memT.associatagliaDto.prodotto = Object.assign({}, prodotto);
    console.log(this.memT.associatagliaDto.prodotto);  
    this.memT.listaService();  
    console.log(this.memP.listaProdotti)
  }

  associataglia(taglia: Taglia, n: number) {
    this.indexTaglia = n;
    this.memT.associatagliaDto.taglia = Object.assign({}, taglia);
    console.log(this.memT.associatagliaDto.taglia);
    this.memT.associaTagliaService(); 
    window.location.reload();      
    console.log(this.memT.taglie)
  }

  cercaProdotto() {
    this.memP.cerca(this.ricerca);
  }
}
