package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Francesco
 */

public class ImballoDto implements Tokenizabile {

    private Imballo imballo;
    private String descrizione;
    private Double costo;
    private Token token;

    public ImballoDto() {
    }

    public ImballoDto(Imballo imballo, String descrizione, Double costo, Token token) {
        this.imballo = imballo;
        this.descrizione = descrizione;
        this.costo = costo;
        this.token = token;
    }

    public Imballo getImballo() {
        return imballo;
    }

    public void setImballo(Imballo imballo) {
        this.imballo = imballo;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = t;
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

}
