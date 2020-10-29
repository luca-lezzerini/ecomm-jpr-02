import { RicercaDto } from 'src/app/dto/ricerca-dto';
import { Prodotto } from './../../model/prodotto';
import { Categoria } from './../../model/categoria';
import { CategoriaServiceService } from 'src/app/service/categoria-service.service';
import { SrvAssociaCategoriaService } from './../../AssociazioniService/srv-associa-categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProdottoService } from 'src/app/service/prodotto.service';

@Component({
  selector: 'app-associa-categoria',
  templateUrl: './associa-categoria.component.html',
  styleUrls: ['./associa-categoria.component.css']
})
export class AssociaCategoriaComponent implements OnInit {

  prodotto = new Prodotto();
  ricerca: RicercaDto = new RicercaDto();
  associaStato = false;
  associativa = false;
  searchState = true;
  
  constructor(private srvProdotto: ProdottoService, public srvCategoria: CategoriaServiceService, public memcat: SrvAssociaCategoriaService) { }

  ngOnInit() {
    this.srvProdotto.lista();
    this.srvCategoria.lista();
  }

  seleziona(item: Prodotto) {
    this.associaStato = true;
    this.associativa = true;
    this.prodotto = item;
    this.srvCategoria.categorie = this.srvCategoria.lista();
  }

  cercaProdotto() {
    this.srvProdotto.cerca(this.ricerca);
  }

  chiediAssocia(categoria: Categoria) {
    console.log("sono in associa", categoria);
    console.log("sto passando i parametri da associare");
    this.memcat.associaCategoriaProdotto(categoria, this.prodotto);
    this.srvCategoria.lista();
  }

}
