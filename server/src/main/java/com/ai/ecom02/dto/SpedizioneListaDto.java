/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.model.Token;
import java.util.List;
/**
 *
 * @author roberto
 */
public class SpedizioneListaDto implements Tokenizabile{
    
    private List<Spedizione> listaSpedizioneDto;
    private Token token;
    private Long numeroTotaleElementi;
    private Integer numeroTotalePagine;
    private Integer paginaCorrente;

    public SpedizioneListaDto() {
    }

    public SpedizioneListaDto(List<Spedizione> listaSpedizioneDto, Token token) {
        this.listaSpedizioneDto = listaSpedizioneDto;
        this.token = token;
    }

    public List<Spedizione> getListaSpedizioneDto() {
        return listaSpedizioneDto;
    }

    public void setListaSpedizioneDto(List<Spedizione> listaSpedizioneDto) {
        this.listaSpedizioneDto = listaSpedizioneDto;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = t;
    }

    public Long getNumeroTotaleElementi() {
        return numeroTotaleElementi;
    }

    public void setNumeroTotaleElementi(Long numeroTotaleElementi) {
        this.numeroTotaleElementi = numeroTotaleElementi;
    }

    public Integer getNumeroTotalePagine() {
        return numeroTotalePagine;
    }

    public void setNumeroTotalePagine(Integer numeroTotalePagine) {
        this.numeroTotalePagine = numeroTotalePagine;
    }

    public Integer getPaginaCorrente() {
        return paginaCorrente;
    }

    public void setPaginaCorrente(Integer paginaCorrente) {
        this.paginaCorrente = paginaCorrente;
    }
}
