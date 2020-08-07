package com.ai.ecom02.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Francesco
 */

@Entity
public class Taglia implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String descrizione;

    @Column
    private String sigla;

    public Taglia() {
    }

    public Taglia(Long id, String descrizione, String sigla) {
        this.id = id;
        this.descrizione = descrizione;
        this.sigla = sigla;
    }

    public Taglia(Long id) {
        this.id = id;
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

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    @Override
    public String toString() {
        return "Taglia{" + "id=" + id + ", descrizione=" + descrizione + ", sigla=" + sigla + '}';
    }

    

}

