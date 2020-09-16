package com.ai.ecom02.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Prodotto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String codice;

    @Column
    private String descrizione;

    @Column
    private Double peso;

    @Column
    private Double prezzo;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Taglia taglia;
            
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Imballo imballo;
            
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")        
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Colore colore;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Offerta offerta;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Spedizione spedizione;    
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotti", allowSetters = true)
    private Categoria categoria;   

    
    public Prodotto() {
    }

    public Prodotto(Long id) {
        this.id = id;
    }

    public Prodotto(Long id, String codice, String descrizione, Double peso, Double prezzo) {
        this.id = id;
        this.codice = codice;
        this.descrizione = descrizione;
        this.peso = peso;
        this.prezzo = prezzo;
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

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public Double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(Double prezzo) {
        this.prezzo = prezzo;
    }

    @Override
    public String toString() {
        return "Prodotto{" + "id=" + id + ", codice=" + codice + ", descrizione=" + descrizione + ", peso=" + peso + ", prezzo=" + prezzo + '}';
    }
   
    public Taglia getTaglia() {
        return taglia;
    }

    public void setTaglia(Taglia taglia) {
        this.taglia = taglia;
    }

    public Imballo getImballo() {
        return imballo;
    }

    public void setImballo(Imballo imballo) {
        this.imballo = imballo;
    }

    public Colore getColore() {
        return colore;
    }

    public void setColore(Colore colore) {
        this.colore = colore;
    }

    public Offerta getOfferta() {
        return offerta;
    }

    public void setOfferta(Offerta offerta) {
        this.offerta = offerta;
    }

    public Spedizione getSpedizione() {
        return spedizione;
    }

    public void setSpedizione(Spedizione spedizione) {
        this.spedizione = spedizione;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

}
