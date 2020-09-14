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
    this.mem.imballi;
  }

  ricerca: RicercaDto = new RicercaDto();
  state = 'false';

  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  seleziona(prodotto: Prodotto): void {
    console.log("sono in seleziona" + this.state)
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
    this.state = 'true';
  }

  associaImballo(imballo: Imballo) {
    this.mem.associaImballoDto.imballo = Object.assign({}, imballo);
    this.mem.bindingImballoService();
  }
}
