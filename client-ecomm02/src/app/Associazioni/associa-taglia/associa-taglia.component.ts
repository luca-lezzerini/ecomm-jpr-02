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
  stateControllo : boolean;
  indexTaglia : number


  constructor(public memT: TagliaServiceService, public memP: ProdottoService, private router: Router) { }

  ngOnInit() {
    this.memP.lista();
    this.memT.taglie = this.memT.listaService();
  }

  seleziona(prodotto: Prodotto): void {
    this.stateVisualizza = true;
    this.memT.associatagliaDto.prodotto = Object.assign({}, prodotto);
    if (this.memT.associatagliaDto.taglia.prodotti.includes(prodotto)) {
      this.stateControllo = false;
    } else {
      this.stateControllo = true;
    }
  }

  associataglia(taglia: Taglia, n : number) {

    this.indexTaglia = n;
    this.memT.associatagliaDto.taglia = Object.assign({}, taglia);
    console.log(this.memT.associatagliaDto);
    this.memT.associaTagliaService();
  }

  cercaProdotto() {
    this.memP.cerca(this.ricerca);
  }
}
