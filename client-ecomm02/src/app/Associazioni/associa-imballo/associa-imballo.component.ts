import { Component, OnInit } from '@angular/core';
import { ProdottoService } from 'src/app/prodotto.service';
import { ImballoServiceService } from 'src/app/service/imballo-service.service';
import { Router } from '@angular/router';
import { RicercaDto } from 'src/app/dto/ricerca-dto';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-associa-imballo',
  templateUrl: './associa-imballo.component.html',
  styleUrls: ['./associa-imballo.component.css']
})
export class AssociaImballoComponent implements OnInit {

  constructor(private router: Router, public srvProdotto: ProdottoService, public mem: ImballoServiceService) { }

  ngOnInit(): void {
    this.srvProdotto.lista();
  }

  ricerca: RicercaDto = new RicercaDto();
  state = 'ricerca';
  

  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  seleziona(prodotto: Prodotto): void {
    this.srvProdotto.prodottoForm = Object.assign({}, prodotto);
  }
}
