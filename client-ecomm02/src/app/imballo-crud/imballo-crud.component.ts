
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Imballo } from "../entity/imballo";
import { ImballoServiceService } from '../service/imballo-service.service';
import { ImballoDto } from '../dto/imballo-dto';

@Component({
  selector: "app-imballo-crud",
  templateUrl: "./imballo-crud.component.html",
  styleUrls: ["./imballo-crud.component.css"],
})
export class ImballoCrudComponent implements OnInit {
  state = "ricerca"; // inizializza state ricerca
  state2 = ""; // questo state serve a permettere al codice di mostrare due state contemporaneamente
  imballoSelezionato: number; // viene dichiarata la variabile
  msg = ""; //inizializza messaggio di errore

  constructor(private router: Router, public mem: ImballoServiceService) {}

  ngOnInit(): void {
    this.mem.imballi = this.mem.listaImballoService();
  }
  /* 
     Questo metodo viene chiamato dal bottone aggiungi
     cambia lo state aggiungi
     azzera campo di ricerca
     svuota messaggio di errore
  */
  addImballo() {
    this.state = "aggiungi";
    this.state2 = "";
    this.mem.ricerca.ricerca = "";
    this.msg = "";
  }
  /*
    Questo metodo viene chiamato dal bottone modifica
    cambia lo state modifica
    visualizza oggetto selezionato da input
    assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
    svuota messaggio di errore 
  */
  updateImballo(imballo: Imballo, i: number) {
    this.state = "modifica";
    this.state2 = "";
    this.imballoSelezionato = i; // serve a visualizzare l'oggetto selezionato da input
    console.log(imballo);
    this.mem.imballoMod.imballo = Object.assign({}, imballo);
    this.msg = "";
  }
  /*
     Questo metodo viene chiamato dal bottone rimuovi
     rimuove oggetto dalla tabella 
     ritorna lo state ricerca
  */
  removeImballo(imballo: Imballo) {
    this.mem.removeImballoService();
    console.log("imballo eliminato");
    this.mem.imballoMod = new ImballoDto();
    this.state = "ricerca";
  }

  /*
     Questo metodo viene chiamato dal bottone conferma 
    -->se lo state aggiungi
        -->se i campi non sono vuoti
          aggiunge oggetto
          inizializza Dto
          ritorna state ricerca
        -->se i campi sono vuoti
          ritorna lo state aggiungi 
          valorizza messaggio di errore
    -->se lo state modifica
        -->se i campi non sono vuoti
          chiama addImballo dal service
          -inizializza Dto per modifica
          ritorna lo state ricerca
        -->se i campi sono vuoti
          ritorna lo state modifica
          valorizza messaggio di errore 
  */
  confirm() {
    console.log("Entrato in confirm");
    if (this.state == "aggiungi") {
      console.log(this.mem.imballoMod);
      if (
        this.mem.imballoMod.imballo.descrizione &&
        this.mem.imballoMod.imballo.costo > 0
      ) {
        this.mem.addImballoService();
        this.mem.imballoMod = new ImballoDto();
        this.state = "ricerca";
      } else {
        this.state = "aggiungi";
        this.msg = "riempire tutti i campi!";
      }
    } else if (this.state == "modifica") {
      console.log("Siamo in confirm - modifica");
      if (
        this.mem.imballoMod.imballo.descrizione &&
        this.mem.imballoMod.imballo.costo > 0
      ) {
        this.mem.updateImballoService(this.mem.imballoMod);
        this.mem.imballoMod = new ImballoDto();
        this.state = "ricerca";
      } else {
        this.state = "modifica";
        this.msg = "riempire tutti i campi!";
      }
    }
  }
  /* 
    Questo metodo viene chiamato dal bottone chiudi
    ritorna lo state ricerca
  */
  close() {
    this.state = "ricerca";
    this.mem.imballoMod = new ImballoDto();
  }
  /*
     Questo metodo viene chiamato dal bottone ricerca
     -->se il campo ricerca non è vuoto
        chiama il metod dal service per cercare l'oggetto
     -->se il campo ricerca è vuoto
        chiama il metodo dal service, ritorna l'intera lista
  */
  findImballo() {
    this.state2 = "";
    if (this.mem.ricerca.ricerca.length > 0) {
      this.mem.findImballoService();
    } else {
      this.mem.listaImballoService();
    }
  }
  /*
     Questo metodo viene quando viene selezionato un oggetto nella tabella
     -->se lo state non è aggiungi 
        ritorna state2 visualizza 
        assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
  */
  view(imballo: ImballoDto, i: number) {
    if (this.state != "aggiungi") {
      this.state2 = "visualizza";
      this.imballoSelezionato = i; // serve a visualizzare l'oggetto selezionato da input
      this.mem.imballoVis = Object.assign({}, imballo);
    }
  }
  /*
     Questo metodo viene chiamato dal bottone elimina 
     serve a prendere l'oggetto da eliminare 
     ritorna state elimina 
     assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
  */
  canRemove(imballo: Imballo, i: number) {
    this.state = "delete";
    this.state2 = "";
    this.imballoSelezionato = i; // serve a visualizzare l'oggetto selezionato da input
    this.mem.imballoMod.imballo = Object.assign({}, imballo);
  }
}
