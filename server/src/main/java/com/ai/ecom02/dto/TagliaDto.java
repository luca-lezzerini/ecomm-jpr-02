package com.ai.ecom02.dto;

import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Francesco
 */
public class TagliaDto implements Tokenizabile {

    private TagliaDto tagliaDto;
    private Token token;
    private String descrizione;
    private String sigla;

    public TagliaDto() {
    }

    public TagliaDto(TagliaDto tagliaDto, String descrizione, String sigla) {
        this.tagliaDto = tagliaDto;
        this.descrizione = descrizione;
        this.sigla = sigla;
    }

    public TagliaDto getTagliaDto() {
        return tagliaDto;
    }

    public void setTagliaDto(TagliaDto tagliaDto) {
        this.tagliaDto = tagliaDto;
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
