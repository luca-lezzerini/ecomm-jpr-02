/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Token;

/**
 *
 * @author roberto
 */
public class CategoriaDto implements Tokenizabile{
    
    private Categoria categoriaDto;
    private Token token;

    public CategoriaDto(Categoria categoriaDto, Token token) {
        this.categoriaDto = categoriaDto;
        this.token = token;
    }

    public CategoriaDto() {
    }

    public Categoria getCategoriaDto() {
        return categoriaDto;
    }

    public void setCategoriaDto(Categoria categoriaDto) {
        this.categoriaDto = categoriaDto;
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
