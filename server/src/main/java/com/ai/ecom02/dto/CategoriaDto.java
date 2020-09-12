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
    
    private Categoria categoria;
    private Token token;
    private Integer paginaCorrente;

    public CategoriaDto(Categoria categoriaDto, Token token) {
        this.categoria = categoriaDto;
        this.token = token;
    }

    public CategoriaDto() {
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    
    
    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

    public Integer getPaginaCorrente() {
        return paginaCorrente;
    }

    public void setPaginaCorrente(Integer paginaCorrente) {
        this.paginaCorrente = paginaCorrente;
    }
    
    
}
