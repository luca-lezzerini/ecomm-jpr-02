import { Component, OnInit } from '@angular/core';
import { ColoreDto } from '../dto/colore-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ColoriService } from '../colori.service';

@Component({
  selector: 'app-colore-crud',
  templateUrl: './colore-crud.component.html',
  styleUrls: ['./colore-crud.component.css']
})
export class ColoreCrudComponent implements OnInit {
 // urlPath = 'http://localhost:8080';
  colore: ColoreDto = new ColoreDto();
  // coloreForm: ColoreDto = new ColoreDto();
  // listaColori: ColoreDto[] = [];
  state = 'ricerca';

  constructor(private http: HttpClient, private srvColore: ColoriService) { }

  ngOnInit(): void {
    this.srvColore.lista();
  //  const oss: Observable<ColoreDto[]> = this.http.get<ColoreDto[]>(this.urlPath + '/lista-colori');
  //  const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
  }
  /*  cerca(): void {
      const oss: Observable<ColoreDto[]> = this.http.post<ColoreDto[]>(this.urlPath + '/colori-find', this.colore);
      const sub: Subscription = oss.subscribe(risp => { this.listaColori = risp; });
      console.log(this.listaColori);
}*/
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
/* conferma(): void {
   let urlEnd: string;
   switch (this.state) {
     case 'modifica': {
       urlEnd = '/colori-update';
       break;
     }
     case 'elimina': {
       urlEnd = '/colori-delete';
       break;
     }
     case 'aggiungi': {
       urlEnd = '/colori-add';
       break;
     }

   }
   const oss: Observable<ColoreDto> = this.http.post<ColoreDto>(this.urlPath + urlEnd, this.coloreForm);
   const sub: Subscription = oss.subscribe(risp => { this.ngOnInit(); });
   this.state = 'ricerca';
   this.coloreForm = new ColoreDto();
 }*/
visualizza(colore: ColoreDto): void {
  this.srvColore.coloreForm = Object.assign({}, colore);
  this.state = 'visualizza';
}
}
