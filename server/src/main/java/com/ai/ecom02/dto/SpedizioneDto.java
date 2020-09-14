/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.model.Token;

/**
 *
 * @author roberto
 */
public class SpedizioneDto implements Tokenizabile{
    
    private Spedizione spedizione;
    private Token token;
    private Integer paginaCorrente;

    public SpedizioneDto() {
    }

    public SpedizioneDto(Spedizione spedizioneDto, Token token) {
        this.spedizione = spedizioneDto;
        this.token = token;
    }

    public Spedizione getSpedizione() {
        return spedizione;
    }

    public void setSpedizione(Spedizione spedizione) {
        this.spedizione = spedizione;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

    public Integer getPaginaCorrente() {
        return paginaCorrente;
    }

    public void setPaginaCorrente(Integer paginaCorrente) {
        this.paginaCorrente = paginaCorrente;
    }
}
