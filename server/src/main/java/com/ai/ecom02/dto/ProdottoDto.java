package com.ai.ecom02.dto;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;

public class ProdottoDto implements Tokenizabile {

    private Prodotto prodotto;
    private Token token;

    public ProdottoDto() {
    }

    public ProdottoDto(Prodotto prodotto, Token token) {
        this.prodotto = prodotto;
        this.token = token;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    
    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "ProdottoDto{" + "prodotto=" + prodotto + ", token=" + token + '}';
    }

}
