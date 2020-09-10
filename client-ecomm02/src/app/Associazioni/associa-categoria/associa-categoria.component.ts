import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotto.service';
import { Categoria } from '../../model/categoria';
import { Prodotto } from '../../model/prodotto';
import { CategoriaServiceService } from '../../categoria-service.service';
import { SrvAssociaCategoriaService } from '../../AssociazioniService/srv-associa-categoria.service';
import { AssociaCategoriaDto } from '../../dto/associa-categoria-dto';

@Component({
  selector: 'app-associa-categoria',
  templateUrl: './associa-categoria.component.html',
  styleUrls: ['./associa-categoria.component.css']
})
export class AssociaCategoriaComponent implements OnInit {

  associaStato = false;
  associativa = false;
  prodottoSelezionato: Prodotto;
  categoria: Categoria;
  categoriaAssociata: AssociaCategoriaDto;
  nascondiButton = false;
  constructor(private srvProdotto: ProdottoService, public mem: CategoriaServiceService, public memcat: SrvAssociaCategoriaService) { }

  ngOnInit() {
    this.srvProdotto.lista();
  }

  seleziona(item: Prodotto){
    this.associaStato = true;
    this.associativa = true;
    this.prodottoSelezionato = item;
  }

  associa(c: Categoria){
    this.prodottoSelezionato = this.categoriaAssociata.prodotto;
    this.categoriaAssociata.categoria = c;
    if(this.prodottoSelezionato.idCategoria != null){
      this.nascondiButton = true;
    } else {
      this.nascondiButton = false;
      this.memcat.associaCat(this.prodottoSelezionato.idCategoria, this.categoriaAssociata.categoria);
    }
  }

}
