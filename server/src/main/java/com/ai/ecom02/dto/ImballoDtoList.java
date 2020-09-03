package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author Francesco
 */
public class ImballoDtoList implements Tokenizabile {

    private List<Imballo> imballi;
    private String descrizione;
    private Double costo;
    private Token token;

    public ImballoDtoList() {
    }

    public ImballoDtoList(List<Imballo> imballoDtoList, Token token) {
        this.imballi = imballoDtoList;
        this.token = token;
    }

    public ImballoDtoList(List<Imballo> imballoDtoList, String descrizione, Double costo) {
        this.imballi = imballoDtoList;
        this.descrizione = descrizione;
        this.costo = costo;
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

    public List<Imballo> getImballi() {
        return imballi;
    }

    public void setImballi(List<Imballo> imballi) {
        this.imballi = imballi;
    }

}
