package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Francesco
 */

public class AssociaImballoDto implements Tokenizabile {

    private Imballo imballo;
    private Prodotto prodotto;
    private Token token;

    public AssociaImballoDto() {
    }

    public AssociaImballoDto(Imballo imballo, Prodotto prodotto) {
        this.imballo = imballo;
        this.prodotto = prodotto;
    }

    public Imballo getImballo() {
        return imballo;
    }

    public void setImballo(Imballo imballo) {
        this.imballo = imballo;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
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
