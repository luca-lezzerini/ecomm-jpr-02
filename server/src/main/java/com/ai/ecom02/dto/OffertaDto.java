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
public class OffertaDto implements Tokenizabile {

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

    @Override
    public String toString() {
        return "OffertaDto{" + "codice=" + codice + ", descrizione=" + descrizione + ", scontoPercentuale=" + scontoPercentuale + ", token=" + token + '}';
    }

    @Override
    public Token getToken() {
            return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = token;
    }

}
