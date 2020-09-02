/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

/**
 *
 * @author Gian Marco
 */
public class OffertaDto {

    private String codice;

    private String descrizione;

    private double scontoPercentuale;

    private Token token;

    public OffertaDto() {
    }

    public OffertaDto(String codice, String descrizione, double scontoPercentuale) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.scontoPercentuale = scontoPercentuale;
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

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "OffertaDto{" + "codice=" + codice + ", descrizione=" + descrizione + ", scontoPercentuale=" + scontoPercentuale + ", token=" + token + '}';
    }

}
