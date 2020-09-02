package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Francesco
 */
public class ImballoDto implements Tokenizabile {

    private ImballoDto imballoDto;
    private String descrizione;
    private Double costo;
    private Token token;

    public ImballoDto() {
    }

    public ImballoDto(ImballoDto imballoDto, String descrizione, Double costo) {
        this.imballoDto = imballoDto;
        this.descrizione = descrizione;
        this.costo = costo;
    }

    public ImballoDto getImballoDto() {
        return imballoDto;
    }

    public void setImballoDto(ImballoDto imballoDto) {
        this.imballoDto = imballoDto;
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
