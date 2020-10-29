import { RicercaDto } from './../dto/ricerca-dto';
import { Component, OnInit } from '@angular/core';
import { OffertaService } from 'src/app/service/offerta.service';
import { Offerta } from '../model/offerta';

@Component({
  selector: 'app-offerta-crud',
  templateUrl: './offerta-crud.component.html',
  styleUrls: ['./offerta-crud.component.css']
})
export class OffertaCrudComponent implements OnInit {

  offerta: Offerta = new Offerta();
  ricerca: RicercaDto = new RicercaDto();
  state = 'ricerca';

  constructor(private srvOfferta: OffertaService) { }

  ngOnInit(): void {
    this.srvOfferta.lista();
  }

  chiediModifica(offerta: Offerta): void {
    this.state = 'modifica';
    this.srvOfferta.offertaForm = Object.assign({}, offerta);

  }
  chiediElimina(offerta: Offerta): void {
    this.state = 'elimina';
    this.srvOfferta.offertaForm = Object.assign({}, offerta);

  }
  nuovo(): void {
    this.state = 'aggiungi';
    this.srvOfferta.offertaForm.id = '0';
  }
  chiudi(): void {
    this.state = 'ricerca';
    this.offerta = new Offerta();
    this.srvOfferta.offertaForm = new Offerta();
  }

  visualizza(offerta: Offerta): void {
    this.srvOfferta.offertaForm = Object.assign({}, offerta);
    this.state = 'visualizza';
  }
}
