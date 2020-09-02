/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Narga
 */
public class ColoreDto implements Tokenizabile{
    
    
     private Colore colore;
    private Token token;

    public ColoreDto() {
    }

    public ColoreDto(Colore colore, Token token) {
        this.colore = colore;
        this.token = token;
    }
    

    public Colore getColore() {
        return colore;
    }

    public void setColore(Colore colore) {
        this.colore = colore;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token t) {
        this.token = token;
    }
    
    
    

    
    
    
}
