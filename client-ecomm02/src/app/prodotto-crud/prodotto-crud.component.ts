import { Component, OnInit } from '@angular/core';
import { ProdottoDto } from '../dto/prodotto-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-prodotto-crud',
  templateUrl: './prodotto-crud.component.html',
  styleUrls: ['./prodotto-crud.component.css']
})
export class ProdottoCrudComponent implements OnInit {
  urlPath = 'http://localhost:8080';
  prodotto:ProdottoDto = new ProdottoDto();
  prodottoForm: ProdottoDto = new ProdottoDto();
  listaProdotti: ProdottoDto[] = [];
  state = 'ricerca';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const oss: Observable<ProdottoDto[]> = this.http.get<ProdottoDto[]>(this.urlPath + '/lista-prodotti');
    const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
  }

  cerca(): void {
    const oss: Observable<ProdottoDto[]> = this.http.post<ProdottoDto[]>(this.urlPath + '/prodotti-find', this.prodotto);
    const sub: Subscription = oss.subscribe(risp => { this.listaProdotti = risp; });
    console.log(this.listaProdotti);}

    nuovo(): void {
      this.state = 'aggiungi';
      this.prodottoForm.id = 0;
    }
    chiudi(): void {
      this.state = 'ricerca';
      this.prodotto = new ProdottoDto();
      this.prodottoForm= new ProdottoDto();
    }
    conferma(): void {
      let urlEnd: string;
      switch (this.state) {
        case 'modifica': {
          urlEnd = '/prodotti-update';
          break;
        }
        case 'elimina': {
          urlEnd = '/prodotti-delete';
          break;
        }
        case 'aggiungi': {
          urlEnd = '/prodotti-add';
          break;
        }
  
      }
      console.log(this.urlPath + urlEnd);
    console.log(this.prodottoForm);
    const oss: Observable<ProdottoDto> = this.http.post<ProdottoDto>(this.urlPath + urlEnd, this.prodottoForm);
    const sub: Subscription = oss.subscribe(risp => { this.ngOnInit(); });
    this.state = 'ricerca';
    this.prodottoForm = new ProdottoDto();
    }
    chiediModifica(prodotto: ProdottoDto): void {
      this.state = 'modifica';
      this.prodottoForm = Object.assign({}, prodotto);
  
    }
    chiediElimina(prodotto: ProdottoDto): void {
      this.state = 'elimina';
      this.prodottoForm = Object.assign({}, prodotto);
  
    }
    visualizza(prodotto: ProdottoDto): void {
      this.prodottoForm = Object.assign({}, prodotto);
      this.state = 'visualizza';
    }

}
