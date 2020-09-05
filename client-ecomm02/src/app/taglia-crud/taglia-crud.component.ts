import { TagliaDto } from "./../dto/taglia-dto";
import { TagliaServiceService } from "./../taglia-service.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Taglia } from "../dto/taglia";

@Component({
  selector: "app-taglia-crud",
  templateUrl: "./taglia-crud.component.html",
  styleUrls: ["./taglia-crud.component.css"],
})
export class TagliaCrudComponent implements OnInit {
  state = "ricerca";
  state2 = "";
  tagliaSelezionata: number;
  msg = "";

  constructor(private router: Router, public memT: TagliaServiceService) {}

  ngOnInit(): void {
    this.memT.taglie = this.memT.lista();
  }

  /* 
     Questo metodo viene chiamato dal bottone aggiungi
     cambia lo state aggiungi
     azzera campo di ricerca
     svuota messaggio di errore
  */
  addTaglia() {
    this.state = "aggiungi";
    this.state2 = "";
    this.memT.ricerca.ricerca = "";
    this.msg = "";
  }
  /*
    Questo metodo viene chiamato dal bottone modifica
    cambia lo state modifica
    visualizza oggetto selezionato da input
    assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
    svuota messaggio di errore 
  */
  updateTaglia(taglia: Taglia, i: number) {
    this.state = "modifica";
    this.state2 = "";
    this.tagliaSelezionata = i;
    console.log(taglia);
    this.memT.tagliaMod.taglia = Object.assign({}, taglia);
    this.msg = "";
  }
  /*
     Questo metodo viene chiamato dal bottone rimuovi
     rimuove oggetto dalla tabella 
     ritorna lo state ricerca
  */
  removeTaglia(taglia: Taglia) {
    console.log("sei in removeTaglia");
    this.memT.removeTaglia();
    this.memT.tagliaMod = new TagliaDto();
    this.state = "ricerca";
  }
  /*
     Questo metodo viene chiamato dal bottone ricerca
     -->se il campo ricerca non è vuoto
        chiama il metod dal service per cercare l'oggetto
     -->se il campo ricerca è vuoto
        chiama il metodo dal service, ritorna l'intera lista
  */
  findTaglia() {
    this.state2 = "";
    console.log("stiamo in findTaglia", this.memT.ricerca);
    if (this.memT.ricerca.ricerca != null) {
      this.memT.findTaglia();
    } else {
      this.memT.lista();
    }
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
  conferma() {
    console.log("Entrato in conferma");
    if (this.state == "aggiungi") {
      console.log(this.memT.tagliaMod);
      if (
        this.memT.tagliaMod.taglia.descrizione &&
        this.memT.tagliaMod.taglia.sigla
      ) {
        this.memT.addTaglia();
        this.memT.tagliaMod = new TagliaDto();
        this.state = "ricerca";
      } else {
        this.state = "aggiungi";
        this.msg = "riempire tutti i campi!";
      }
    } else if (this.state == "modifica") {
      console.log("Siamo in confirm - modifica");
      if (
        this.memT.tagliaMod.taglia.descrizione &&
        this.memT.tagliaMod.taglia.sigla
      ) {
        this.memT.updateTaglia(this.memT.tagliaMod);
        this.memT.tagliaMod = new TagliaDto();
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
  chiudi() {
    this.state = "ricerca";
    this.memT.tagliaMod = new TagliaDto();
  }
  /*
     Questo metodo viene quando viene selezionato un oggetto nella tabella
     -->se lo state non è aggiungi 
        ritorna state2 visualizza 
        assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
  */
  visualizza(t: TagliaDto, n: number) {
    if (this.state != "aggiungi") {
      this.state2 = "visualizza";
      this.tagliaSelezionata = n; // serve a visualizzare l'oggetto selezionato da input
      this.memT.tagliaVis = Object.assign({}, t);
    }
  }
  /*
     Questo metodo viene chiamato dal bottone elimina 
     serve a prendere l'oggetto da eliminare 
     ritorna state elimina 
     assegna l'oggetto selezionato da input all'oggetto di lavorazione del service
  */
  canRemove(t: Taglia, n: number) {
    console.log("stai in canRemove()");

    this.state = "delete";
    this.state2 = "";
    this.tagliaSelezionata = n; // serve a visualizzare l'oggetto selezionato da input
    this.memT.tagliaMod.taglia = Object.assign({}, t);
    console.log("taglia da eliminare:", this.memT.tagliaMod.taglia);
  }
}
