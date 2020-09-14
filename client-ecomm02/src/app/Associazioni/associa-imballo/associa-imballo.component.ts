import { ListaProdottiDto } from './../../dto/lista-prodotti-dto';
import { Component, OnInit } from '@angular/core';
import { ProdottoService } from 'src/app/prodotto.service';
import { ImballoServiceService } from 'src/app/service/imballo-service.service';
import { Router } from '@angular/router';
import { RicercaDto } from 'src/app/dto/ricerca-dto';
import { Prodotto } from 'src/app/model/prodotto';
import { AssociaImballoDto } from 'src/app/dto/associa-imballo-dto';
import { Imballo } from 'src/app/model/imballo';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Component({
  selector: 'app-associa-imballo',
  templateUrl: './associa-imballo.component.html',
  styleUrls: ['./associa-imballo.component.css']
})
export class AssociaImballoComponent implements OnInit {

  constructor(private router: Router, public srvProdotto: ProdottoService, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.srvProdotto.lista();
    this.mem.imballi = this.mem.listaImballoService();
  }

  ricerca: RicercaDto = new RicercaDto();
  state = 'false';

  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  seleziona(prodotto: Prodotto): void {
    this.state = 'true';
    console.log("sono in seleziona" + this.state)
    this.mem.associaImballoDto.prodotto = Object.assign({}, prodotto);
  }

  associaImballo(imballo: Imballo) {
    this.mem.associaImballoDto.imballo = Object.assign({}, imballo);
    this.mem.bindingImballoService();
  }
}
