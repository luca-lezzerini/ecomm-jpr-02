/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 *
 * @author Narga
 */
@Entity                                                               // dice a java che questa diventerà una tabella 
public class Offerta implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)                  // dice all id di auto_incrementarsi
    private Long id;

    @Column
    private String codice;

    @Column
    private String descrizione;

    @Column
    private double scontoPercentuale;
    
    @OneToMany(mappedBy = "offerta")
    List<Prodotto> prodotti = new ArrayList<>();

    // cosstruttori 
    public Offerta() {
    }

    public Offerta(Long id, String codice, String descrizione, double scontoPercentuale) {
        this.id = id;
        this.codice = codice;
        this.descrizione = descrizione;
        this.scontoPercentuale = scontoPercentuale;
    }

    // get e set
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public double getScontoPercentuale() {
        return scontoPercentuale;
    }

    public void setScontoPercentuale(double scontoPercentuale) {
        this.scontoPercentuale = scontoPercentuale;
    }

    // toString
    @Override
    public String toString() {
        return "Offerta{" + id + " " + codice + " " + descrizione + " " + scontoPercentuale + '}';
    }

}
