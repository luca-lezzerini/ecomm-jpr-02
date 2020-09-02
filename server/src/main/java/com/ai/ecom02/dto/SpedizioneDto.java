/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

/**
 *
 * @author roberto
 */
public class SpedizioneDto implements Tokenizabile{
    
    private SpedizioneDto spedizioneDto;
    private Token token;

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }
    
    
    
}
