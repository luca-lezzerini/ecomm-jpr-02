package com.ai.ecom02.dto;

import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author Francesco
 */

public class TagliaDtoList implements Tokenizabile {

    private List<Taglia> taglie;
    private Token token;
    private String descrizione;
    private String sigla;

    public TagliaDtoList() {
    }

    public TagliaDtoList(List<Taglia> tagliaDtoList, String descrizione, String sigla) {
        this.taglie = tagliaDtoList;
        this.descrizione = descrizione;
        this.sigla = sigla;
    }

    public TagliaDtoList(List<Taglia> taglie, Token token) {
        this.taglie = taglie;
        this.token = token;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = t;
    }

    public List<Taglia> getTaglie() {
        return taglie;
    }

    public void setTaglie(List<Taglia> taglie) {
        this.taglie = taglie;
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

}
