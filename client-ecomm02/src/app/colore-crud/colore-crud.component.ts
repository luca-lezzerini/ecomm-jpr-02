import { Component, OnInit } from '@angular/core';
import { ColoreDto } from '../dto/colore-dto';
import { HttpClient } from '@angular/common/http';
import { ColoriService } from '../colori.service';

@Component({
  selector: 'app-colore-crud',
  templateUrl: './colore-crud.component.html',
  styleUrls: ['./colore-crud.component.css']
})
export class ColoreCrudComponent implements OnInit {

  colore: ColoreDto = new ColoreDto();
  state = 'ricerca';

  constructor(private http: HttpClient, private srvColore: ColoriService) { }

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
    this.colore = new ColoreDto();
    this.srvColore.coloreForm = new ColoreDto();
  }

  visualizza(colore: ColoreDto): void {
    this.srvColore.coloreForm = Object.assign({}, colore);
    this.state = 'visualizza';
  }
}
