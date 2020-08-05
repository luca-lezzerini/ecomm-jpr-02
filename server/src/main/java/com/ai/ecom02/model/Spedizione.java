/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.model;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Roberto
 */
@Entity
public class Spedizione implements Serializable {

    @Id         //dico all'ID che è un identificativo, quindi che è PRIMARY KEY

    @GeneratedValue(strategy = GenerationType.IDENTITY)   //gli dico che l''ID primaryKey è AUTOINCREMENT
    private Long id;

    @Column                   //-> Creo le colonne della TABELLA (descrizione)
    private String codice;

    @Column
    private String nome;

    @Column
    private Double prezzoKg;

    public Spedizione() {
    }

    public Spedizione(Long id, String codice, String nome, Double prezzoKg) {
        this.id = id;
        this.codice = codice;
        this.nome = nome;
        this.prezzoKg = prezzoKg;
    }

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

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPrezzoKg() {
        return prezzoKg;
    }

    public void setPrezzoKg(Double prezzoKg) {
        this.prezzoKg = prezzoKg;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.codice);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Spedizione other = (Spedizione) obj;
        if (!Objects.equals(this.codice, other.codice)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Spedizione{" + "id=" + id + ", codice=" + codice + ", nome=" + nome + ", prezzoKg=" + prezzoKg + '}';
    }
    
    
}
