import { ListaOfferteDto } from './../../dto/lista-offerte-dto';
import { AssociaOffertaService } from './../../AssociazioniService/associa-offerta.service';
import { RicercaDto } from './../../dto/ricerca-dto';
import { OffertaDto } from './../../dto/offerta-dto';
import { Offerta } from './../../model/offerta';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-associa-offerta',
  templateUrl: './associa-offerta.component.html',
  styleUrls: ['./associa-offerta.component.css']
})
export class AssociaOffertaComponent implements OnInit {
  offerta: Offerta;
  offertaDto : OffertaDto;
  listaDto: ListaOfferteDto;
  listaOfferte: Offerta[] = [];
  ricerca: RicercaDto = new RicercaDto();
  listaDeiProdotti: Prodotto[];
  state = 'ricerca';
  constructor(private srvAssOff: AssociaOffertaService) { }
  
  
  ngOnInit(): void {
    this.srvAssOff.listaProdotti();
    this.srvAssOff.listaOfferte();
  }
  cercaProdotto() {
    this.srvAssOff.cercaProdotti(this.ricerca);
  }
}
