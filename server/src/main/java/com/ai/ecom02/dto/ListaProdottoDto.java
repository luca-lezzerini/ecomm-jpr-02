package com.ai.ecom02.dto;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;
import java.util.List;

public class ListaProdottoDto {
    private List<Prodotto> listaProdotto;
    private Token token;

    public ListaProdottoDto() {
    }

    public ListaProdottoDto(List<Prodotto> listaProdotto, Token token) {
        this.listaProdotto = listaProdotto;
        this.token = token;
    }

    public List<Prodotto> getListaProdotto() {
        return listaProdotto;
    }

    public void setListaProdotto(List<Prodotto> listaProdotto) {
        this.listaProdotto = listaProdotto;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
    
    
}

