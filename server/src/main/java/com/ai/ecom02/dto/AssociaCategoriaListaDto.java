/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author Roberto
 */
public class AssociaCategoriaListaDto implements Tokenizabile{
    private Token token;
    private Prodotto prodotto;
    private List<Categoria> categorie;

    public AssociaCategoriaListaDto() {
    }

    public AssociaCategoriaListaDto(Token token, Prodotto prodotto, List<Categoria> categorie) {
        this.token = token;
        this.prodotto = prodotto;
        this.categorie = categorie;
    }

    
    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public List<Categoria> getCategorie() {
        return categorie;
    }

    public void setCategorie(List<Categoria> categorie) {
        this.categorie = categorie;
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
