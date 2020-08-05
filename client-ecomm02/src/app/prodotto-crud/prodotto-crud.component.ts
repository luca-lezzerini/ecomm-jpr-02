import { Component, OnInit } from '@angular/core';
import { ProdottoDto } from '../dto/prodotto-dto';

@Component({
  selector: 'app-prodotto-crud',
  templateUrl: './prodotto-crud.component.html',
  styleUrls: ['./prodotto-crud.component.css']
})
export class ProdottoCrudComponent implements OnInit {
  urlPath = 'http://localhost:8080';
  prodotto:ProdottoDto = new ProdottoDto();
  state = 'ricerca';
  constructor() { }

  ngOnInit(): void {
  }

}
