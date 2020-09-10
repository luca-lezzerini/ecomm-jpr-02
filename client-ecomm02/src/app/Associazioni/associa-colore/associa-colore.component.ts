import { Colore } from './../../model/colore';
import { Prodotto } from './../../model/prodotto';
import { RicercaDto } from './../../dto/ricerca-dto';
import { AssociaColoreService } from './../../AssociazioniService/associa-colore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associa-colore',
  templateUrl: './associa-colore.component.html',
  styleUrls: ['./associa-colore.component.css']
})
export class AssociaColoreComponent implements OnInit {
  ricerca: RicercaDto = new RicercaDto();
  prodotto = new Prodotto();
  state = 'visualizza';

  constructor(private srvAssociaColore: AssociaColoreService) { }

  ngOnInit(): void {
    this.srvAssociaColore.visualizzaListaProdotti();
    this.srvAssociaColore.visualizzaListaColori();
  }

  cercaProdotto() {
    this.srvAssociaColore.cercaProdotto(this.ricerca);
  }

  chiediSelezione(prodotto: Prodotto) {
    this.state = 'seleziona';
    this.prodotto = prodotto;
  }

  chiediAssocia(colore: Colore) {
    this.srvAssociaColore.associaColoreProdotto(colore, this.prodotto);
    this.state = 'visualizza';
  }

}
