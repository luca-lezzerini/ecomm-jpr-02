import { SrvAssociaCategoriaService } from './../../AssociazioniService/srv-associa-categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotto.service';
import { Prodotto } from '../../model/prodotto';


@Component({
  selector: 'app-associa-categoria',
  templateUrl: './associa-categoria.component.html',
  styleUrls: ['./associa-categoria.component.css']
})
export class AssociaCategoriaComponent implements OnInit {

  associaStato = false;
  associativa = false;
  nascondiButton = false;
  searchState = true;


  constructor(private srvProdotto: ProdottoService, public memcat: SrvAssociaCategoriaService) { }

  ngOnInit() {
    this.srvProdotto.lista();
    this.associativa = false;
  }

  seleziona(item: Prodotto){
    this.associaStato = true;
    this.associativa = true;
    this.memcat.prodottoSelezionato = item;
    //FIXME Aggiungere caricamento categorie perché non sono aggiornate
  }

  cercaProdotto(){
    this.memcat.cerca();
  }

/*
  associa(c: Categoria[]){
    this.memcat.prodottoSelezionato = this.memcat.categoriaAssociata.prodotto;
    this.memcat.categoriaAssociata.categoria = c;
    if(this.memcat.prodottoSelezionato.idCategoria != null){
      this.nascondiButton = true;
    } else {
      this.nascondiButton = false;
      this.memcat.associaCat(this.memcat.prodottoSelezionato, this.memcat.categoriaAssociata.categoria);
    }
  }*/

}
