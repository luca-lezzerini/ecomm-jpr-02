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
 * @author Francesco
 */

@Entity
public class Imballo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String descrizione;

    @Column
    private Double costo;
    
    @OneToMany(mappedBy = "Imballo")
    private List<Prodotto> prodotti = new ArrayList<>();

    public Imballo(Long id, String descrizione, Double costo) {
        this.id = id;
        this.descrizione = descrizione;
        this.costo = costo;
    }

    public Imballo(Long id) {
        this.id = id;
    }

    public Imballo() {
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

    public Double getCosto() {
        return costo;
    }

    public void setCosto(Double costo) {
        this.costo = costo;
    }

    @Override
    public String toString() {
        return "Imballo{" + "descrizione=" + descrizione + ", costo=" + costo + '}';
    }

    public List<Prodotto> getProdotti() {
        return prodotti;
    }

    public void setProdotti(List<Prodotto> prodotti) {
        this.prodotti = prodotti;
    }

}
