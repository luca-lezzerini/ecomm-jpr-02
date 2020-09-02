/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service;

import com.ai.ecom02.dto.Tokenizabile;
import com.ai.ecom02.model.Colore;
import com.ai.ecom02.model.Token;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Narga
 */
public class ColoriDto implements Tokenizabile {
    
    private List<Colore> lista=new ArrayList();
    private Token token;

    public List<Colore> getLista() {
        return lista;
    }

    public void setLista(List<Colore> lista) {
        this.lista = lista;
    }

    @Override
    public Token getToken() {
       return this.token;
    }

    @Override
    public void setToken(Token t) {
        token=t;
    }

   
    
    
}
