import { Component, OnInit } from '@angular/core';
import { ProdottoService } from 'src/app/prodotto.service';
import { ImballoServiceService } from 'src/app/service/imballo-service.service';
import { Router } from '@angular/router';
import { RicercaDto } from 'src/app/dto/ricerca-dto';
import { Prodotto } from 'src/app/model/prodotto';
import { Imballo } from 'src/app/model/imballo';



@Component({
  selector: 'app-associa-imballo',
  templateUrl: './associa-imballo.component.html',
  styleUrls: ['./associa-imballo.component.css']
})
export class AssociaImballoComponent implements OnInit {

  ricerca: RicercaDto = new RicercaDto();
  state = false;
  indexImballo: number;

  constructor(private router: Router, public srvProdotto: ProdottoService, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.srvProdotto.lista();
    this.mem.imballi = this.mem.listaImballoService();
  }

  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  seleziona(prodotto: Prodotto): void {
    this.state = true;
    console.log("sono in seleziona" + this.state)
    this.mem.associaImballoDto.prodotto = Object.assign({}, prodotto);
    this.mem.listaImballoService();
  }

  associaImballo(imballo: Imballo, n: number) {
    this.indexImballo = n;
    this.mem.associaImballoDto.imballo = Object.assign({}, imballo);
    this.mem.bindingImballoService();
    window.location.reload();
  }

  dissociaImballo(){
    this.mem.unbindingImballoService();
    window.location.reload();
  }
}
