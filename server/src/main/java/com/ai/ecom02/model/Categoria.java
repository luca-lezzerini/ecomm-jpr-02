/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 *
 * @author Roberto
 */
@Entity
public class Categoria implements Serializable {

    @Id         //dico all'ID che è un identificativo, quindi che è PRIMARY KEY
    @GeneratedValue(strategy = GenerationType.AUTO)   //gli dico che l''ID primaryKey è AUTOINCREMENT
    private Long id;

    @Column(unique = true)                  //-> Creo le colonne della TABELLA (descrizione)
    private String descrizione;

    @OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "categoria", allowSetters = true)
    List<Prodotto> prodotti = new ArrayList<>();

    public Categoria() {
    }

    public Categoria(Long id, String descrizione) {
        this.id = id;
        this.descrizione = descrizione;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.id);
        hash = 41 * hash + Objects.hashCode(this.descrizione);
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
        final Categoria other = (Categoria) obj;
        return (!Objects.equals(this.descrizione, other.descrizione) || !Objects.equals(this.id, other.id));
    }

    @Override
    public String toString() {
        return "Categoria{" + "id=" + id + ", descrizione=" + descrizione + '}';
    }

}
