package com.ai.ecom02.model;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Colore implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String colore;
    
    @OneToMany(mappedBy = "colore")
    List<Prodotto> prodotto = new ArrayList<>();

    public Colore() {
    }

    public Colore(Long id, String colore) {
        this.id = id;
        this.colore = colore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColore() {
        return colore;
    }

    public void setDescrizione(String colore) {
        this.colore = colore;
    }

    @Override
    public String toString() {
        return  "colore: " +id + " " + colore;
    }

}
