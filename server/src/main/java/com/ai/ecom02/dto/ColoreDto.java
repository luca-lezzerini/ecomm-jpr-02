/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

/**
 *
 * @author Narga
 */
public class ColoreDto implements Tokenizabile{
    
    
     private String colore;
    private Token token;

    public ColoreDto() {
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token t) {
        this.token = token;
    }
    
    
    

    
    
    
}
