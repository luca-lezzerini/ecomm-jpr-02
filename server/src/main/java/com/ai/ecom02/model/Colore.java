
package com.ai.ecom02.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

 

@Entity
@Table(name = "colore")
public class Colore implements Serializable{

 

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

 

    @Column(name = "descrizione")
    private String Descrizione;

 

    public Colore() {
    }

 

    public Colore(long id, String Descrizione) {
        this.id = id;
        this.Descrizione = Descrizione;
    }

 

    public long getId() {
        return id;
    }

 

    public void setId(long id) {
        this.id = id;
    }

 

    public String getDescrizione() {
        return Descrizione;
    }

 

    public void setDescrizione(String Descrizione) {
        this.Descrizione = Descrizione;
    }

 

}