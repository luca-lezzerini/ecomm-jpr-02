import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotto.service';

@Component({
  selector: 'app-associa-categoria',
  templateUrl: './associa-categoria.component.html',
  styleUrls: ['./associa-categoria.component.css']
})
export class AssociaCategoriaComponent implements OnInit {

  constructor(private srvProdotto: ProdottoService) { }

  ngOnInit() {
  }

}
