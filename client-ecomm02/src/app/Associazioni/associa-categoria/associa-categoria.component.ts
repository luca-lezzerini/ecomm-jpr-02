import { Prodotto } from './../../model/prodotto';
import { Categoria } from './../../model/categoria';
import { CategoriaServiceService } from './../../categoria-service.service';
import { SrvAssociaCategoriaService } from './../../AssociazioniService/srv-associa-categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotto.service';

@Component({
  selector: 'app-associa-categoria',
  templateUrl: './associa-categoria.component.html',
  styleUrls: ['./associa-categoria.component.css']
})
export class AssociaCategoriaComponent implements OnInit {

  associaStato = false;
  associativa = false;
  searchState = true;
  
  constructor(private srvProdotto: ProdottoService, public mem: CategoriaServiceService, public memcat: SrvAssociaCategoriaService) { }

  ngOnInit() {
    this.srvProdotto.lista();
  }

  seleziona(item: Prodotto) {
    this.associaStato = true;
    this.associativa = true;
    this.memcat.prodottoSelezionato = item;
    this.mem.categorie = this.mem.lista();
  }

  cercaProdotto() {
    this.memcat.cerca();
  }

  associa(c: Categoria) {
    console.log("sono in associa", c);
    this.memcat.categoriaAssociata.categoria = c;
    console.log("sto passando i parametri da associare");
    this.memcat.associaCat(this.memcat.categoriaAssociata.categoria);
    this.mem.lista();
  }

}
