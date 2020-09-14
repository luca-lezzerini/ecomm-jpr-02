import { Component, OnInit } from '@angular/core';
import { SrvAssociaSpedizioneService } from '../../AssociazioniService/srv-associa-spedizione.service';
import { Prodotto } from '../../model/prodotto';
import { Spedizione } from '../../model/spedizione';
import { ProdottoService } from '../../prodotto.service';
import { SpedizioneServiceService } from '../../spedizione-service.service';

@Component({
  selector: 'app-associa-spedizione',
  templateUrl: './associa-spedizione.component.html',
  styleUrls: ['./associa-spedizione.component.css']
})
export class AssociaSpedizioneComponent implements OnInit {

  associativa = false;
  associaStato = false;
  searchState = true;

  constructor(private srvProdotto: ProdottoService, public meme: SpedizioneServiceService, public memsped: SrvAssociaSpedizioneService ) { }

  ngOnInit() {
    this.srvProdotto.lista();
  }

  cercaProdotto(){
    this.memsped.cerca();
  }

  seleziona(item: Prodotto){
    this.associativa = true;
    this.associaStato = true;
    this.memsped.prodottoSelezionato  = item;
    this.memsped.spedizioni = this.meme.lista();
  }

  associa(s: Spedizione){
    this.memsped.spedizioneAssociata.spedizione = s;
    console.log("sto associando la spedizione: ", s);
    this.memsped.associaSped(this.memsped.spedizioneAssociata.spedizione);
    this.seleziona(this.memsped.prodottoSelezionato);
  }

}
