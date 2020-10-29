import { OffertaService } from 'src/app/service/offerta.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { AssociaOffertaService } from './../../AssociazioniService/associa-offerta.service';
import { RicercaDto } from './../../dto/ricerca-dto';
import { Offerta } from './../../model/offerta';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-associa-offerta',
  templateUrl: './associa-offerta.component.html',
  styleUrls: ['./associa-offerta.component.css']
})
export class AssociaOffertaComponent implements OnInit {
  ricerca: RicercaDto = new RicercaDto();
  prodotto: Prodotto;
  state = 'ricerca';
  constructor(private srvAssOff: AssociaOffertaService, private srvProdotto: ProdottoService, private srvOfferta: OffertaService) { }
  
  
  ngOnInit(): void {
    this.srvProdotto.lista();
    this.srvOfferta.lista();
  }
  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  selezionaProdotto(prodotto: Prodotto){
    this.state = 'seleziona';
    this.prodotto = prodotto;
  }
  chiediAssociazione(offerta: Offerta){
    this.srvAssOff.associaOffertaProdotto(offerta, this.prodotto);

  }
}

