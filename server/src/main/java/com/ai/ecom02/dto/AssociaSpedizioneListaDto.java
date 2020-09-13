/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author roberto
 */
public class AssociaSpedizioneListaDto implements Tokenizabile{
    private Prodotto prodotto;
    private List<Spedizione> spedizioni;
    private Token token;

    public AssociaSpedizioneListaDto() {
    }

    public AssociaSpedizioneListaDto(Prodotto prodotto, List<Spedizione> spedizioni, Token token) {
        this.prodotto = prodotto;
        this.spedizioni = spedizioni;
        this.token = token;
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

    public List<Spedizione> getSpedizioni() {
        return spedizioni;
    }

    public void setSpedizioni(List<Spedizione> spedizioni) {
        this.spedizioni = spedizioni;
    }
    
    
    
    
    
}
