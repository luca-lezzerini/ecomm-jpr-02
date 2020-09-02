/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

/**
 *
 * @author rcora
 */
public class RicercaDto implements Tokenizabile {

    private String ricerca;
    private Token token;

    public RicercaDto() {
    }

    public RicercaDto(String ricerca) {
        this.ricerca = ricerca;
    }

    public String getRicerca() {
        return ricerca;
    }

    public void setRicerca(String ricerca) {
        this.ricerca = ricerca;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

}
