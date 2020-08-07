import { OffertaDto } from './../dto/offerta-dto';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OffertaService } from '../offerta.service';

@Component({
  selector: 'app-offerta-crud',
  templateUrl: './offerta-crud.component.html',
  styleUrls: ['./offerta-crud.component.css']
})
export class OffertaCrudComponent implements OnInit {

  offerta: OffertaDto = new OffertaDto();
  state = 'ricerca';

  constructor(private http: HttpClient, private srvOfferta: OffertaService) { }

  ngOnInit(): void {
    this.srvOfferta.lista();
  }

  chiediModifica(offerta: OffertaDto): void {
    this.state = 'modifica';
    this.srvOfferta.offertaForm = Object.assign({}, offerta);

  }
  chiediElimina(offerta: OffertaDto): void {
    this.state = 'elimina';
    this.srvOfferta.offertaForm = Object.assign({}, offerta);

  }
  nuovo(): void {
    this.state = 'aggiungi';
    this.srvOfferta.offertaForm.id = 0;
  }
  chiudi(): void {
    this.state = 'ricerca';
    this.offerta = new OffertaDto();
    this.srvOfferta.offertaForm = new OffertaDto();
  }

  visualizza(offerta: OffertaDto): void {
    this.srvOfferta.offertaForm = Object.assign({}, offerta);
    this.state = 'visualizza';
  }
}
