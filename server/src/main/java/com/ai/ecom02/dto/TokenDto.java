package com.ai.ecom02.dto;

import com.ai.ecom02.model.Token;

public class TokenDto {

    private Token token;

    public TokenDto() {
    }

    public TokenDto(Token token) {
        this.token = token;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

}
