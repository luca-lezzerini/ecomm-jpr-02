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
  state = false;


  constructor(public memT: TagliaServiceService, public memP: ProdottoService, private router: Router) { }

  ngOnInit() {
    this.memP.lista();
    this.memT.taglie = this.memT.listaService();
  }

  seleziona(prodotto: Prodotto): void {
    this.state = true;
    this.memT.associatagliaDto.prodotto = Object.assign({}, prodotto);
  }

  associataglia(taglia: Taglia) {

    this.memT.associatagliaDto.taglia = Object.assign({}, taglia);
    console.log(this.memT.associatagliaDto);
    this.memT.associaTagliaService();
  }

  cercaProdotto() {
    this.memP.cerca(this.ricerca);
  }
}
