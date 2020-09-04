/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author Gian Marco
 */
public class ColoriDto {
    List<Colore> listaColori;
    Token token;

    public ColoriDto() {
    }

    public ColoriDto(List<Colore> colori, Token token) {
        this.listaColori = colori;
        this.token = token;
    }

    public List<Colore> getListaColori() {
        return listaColori;
    }

    public void setListaColori(List<Colore> colori) {
        this.listaColori = colori;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
}
