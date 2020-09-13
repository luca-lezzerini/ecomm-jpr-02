/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.model.Token;

/**
 *
 * @author roberto
 */
public class AssociaSpedizioneDto implements Tokenizabile{
    private Prodotto prodotto;
    private Token token;
    private Spedizione spedizione;

    public AssociaSpedizioneDto() {
    }

    public AssociaSpedizioneDto(Prodotto prodotto, Token token, Spedizione spedizione) {
        this.prodotto = prodotto;
        this.token = token;
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

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public Spedizione getSpedizione() {
        return spedizione;
    }

    public void setSpedizione(Spedizione spedizione) {
        this.spedizione = spedizione;
    }
    
    
    
    
}
