import { Component, OnInit } from '@angular/core';
import { ColoreDto } from '../dto/colore-dto';
import { ColoriService } from '../colori.service';

@Component({
  selector: 'app-colore-crud',
  templateUrl: './colore-crud.component.html',
  styleUrls: ['./colore-crud.component.css']
})
export class ColoreCrudComponent implements OnInit {
  /* per ricuperare la chiavi di ricerca
     direttamnte nel tamplate vieni pasata nel service e resettata.*/
  colore: ColoreDto = new ColoreDto();
  state = 'ricerca'; // lo stato del component che influenza il tamplate e metodi

  constructor(private srvColore: ColoriService) { }

  ngOnInit(): void {
    this.srvColore.lista();
  }

  chiediModifica(colore: ColoreDto): void {
    this.state = 'modifica';
    this.srvColore.coloreForm = Object.assign({}, colore);

  }
  chiediElimina(colore: ColoreDto): void {
    this.state = 'elimina';
    this.srvColore.coloreForm = Object.assign({}, colore);

  }
  nuovo(): void {
    this.state = 'aggiungi';
    this.srvColore.coloreForm.id = 0;
  }
  chiudi(): void {
    this.state = 'ricerca';
    this.srvColore.coloreForm = new ColoreDto();
  }

  visualizza(colore: ColoreDto): void {
    this.srvColore.coloreForm = Object.assign({}, colore);
    this.state = 'visualizza';
  }
}
