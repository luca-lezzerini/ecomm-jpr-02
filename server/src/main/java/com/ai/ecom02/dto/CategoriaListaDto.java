/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author roberto
 */
public class CategoriaListaDto implements Tokenizabile {

    private List<Categoria> listaCategoriaDto;
    private Token token;

    public CategoriaListaDto() {
    }

    public CategoriaListaDto(List<Categoria> listaCategoriaDto, Token token) {
        this.listaCategoriaDto = listaCategoriaDto;
        this.token = token;
    }

    public List<Categoria> getListaCategoriaDto() {
        return listaCategoriaDto;
    }

    public void setListaCategoriaDto(List<Categoria> listaCategoriaDto) {
        this.listaCategoriaDto = listaCategoriaDto;
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
