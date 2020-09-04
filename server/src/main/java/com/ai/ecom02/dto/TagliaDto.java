package com.ai.ecom02.dto;

import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Francesco
 */

public class TagliaDto implements Tokenizabile {

    private Taglia taglia;
    private Token token;
    private String descrizione;
    private String sigla;

    public TagliaDto(Taglia taglia, Token token, String descrizione, String sigla) {
        this.taglia = taglia;
        this.token = token;
        this.descrizione = descrizione;
        this.sigla = sigla;
    }

    public TagliaDto() {
    }

    public Taglia getTaglia() {
        return taglia;
    }

    public void setTaglia(Taglia taglia) {
        this.taglia = taglia;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = t;
    }

}
