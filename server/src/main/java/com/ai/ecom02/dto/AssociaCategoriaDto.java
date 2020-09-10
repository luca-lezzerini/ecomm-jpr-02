package com.ai.ecom02.dto;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;

public class AssociaCategoriaDto implements Tokenizabile {

    private Token token;
    private Prodotto prodotto;
    private Categoria categoria;

    public AssociaCategoriaDto() {
    }

    public AssociaCategoriaDto(Token token, Prodotto prodotto, Categoria categoria) {
        this.token = token;
        this.prodotto = prodotto;
        this.categoria = categoria;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
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
        token = t;
    }

}
