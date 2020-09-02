package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

public class ProdottoDto {

    private String codice;
    private String descrizione;
    private Double peso;
    private Double prezzo;
    private Token token;

    public ProdottoDto() {
    }

    public ProdottoDto(String codice, String descrizione, Double peso, Double prezzo, Token token) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.peso = peso;
        this.prezzo = prezzo;
        this.token = token;
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

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "Prodotto{" + "token=" + token + ", codice=" + codice + ", descrizione=" + descrizione + ", peso=" + peso + ", prezzo=" + prezzo + '}';
    }

}
