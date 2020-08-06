import { Component, OnInit } from '@angular/core';
import { OffertaDTO } from '../dto/offerta-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-offerta-crud',
  templateUrl: './offerta-crud.component.html',
  styleUrls: ['./offerta-crud.component.css']
})
export class OffertaCrudComponent implements OnInit {

  urlPath = 'http://localhost:8080';
  offerta: OffertaDTO = new OffertaDTO();
  offertaForm: OffertaDTO = new OffertaDTO();
  listaOfferte: OffertaDTO[] = [];
  state = 'ricerca';



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const oss: Observable<OffertaDTO[]> = this.http.get<OffertaDTO[]>(this.urlPath + '/lista-offerte');
    const sub: Subscription = oss.subscribe(risp => { this.listaOfferte = risp; });
  }
  cerca(): void {
    const oss: Observable<OffertaDTO[]> = this.http.post<OffertaDTO[]>(this.urlPath + '/offerta-find', this.offerta);
    const sub: Subscription = oss.subscribe(risp => { this.listaOfferte = risp; });
  }

  chiediModifica(offerta: OffertaDTO): void {
    this.state = 'modifica';
    this.offertaForm = Object.assign({}, offerta);

  }
  chiediElimina(offerta: OffertaDTO): void {
    this.state = 'elimina';
    this.offertaForm = Object.assign({}, offerta);

  }
  nuovo(): void {
    this.state = 'aggiungi';
    this.offertaForm.id = 0;
  }


  chiudi(): void {
    this.state = 'ricerca';
    this.offerta = new OffertaDTO();
    this.offertaForm = new OffertaDTO();
  }
  conferma(): void {
    let urlEnd: string;
    switch (this.state) {
      case 'modifica': {
        urlEnd = '/offerta-update';
        break;
      }
      case 'elimina': {
        urlEnd = '/offerta-delete';
        break;
      }
      case 'aggiungi': {
        urlEnd = '/offerta-add';
        break;
      }

    }
    const oss: Observable<OffertaDTO> = this.http.post<OffertaDTO>(this.urlPath + urlEnd, this.offertaForm);
    const sub: Subscription = oss.subscribe(risp => { this.ngOnInit(); });
    this.state = 'ricerca';
    this.offertaForm = new OffertaDTO();

  }
  visualizza(offerta: OffertaDTO): void {
    this.offertaForm = Object.assign({}, offerta);
    this.state = 'visualizza';
  }
}







