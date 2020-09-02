/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Offerta;
import com.ai.ecom02.model.Token;
import java.util.List;

/**
 *
 * @author Gian Marco
 */
public class ListaOfferteDto {
    
    List<Offerta> listaOfferte;
    
    private Token token;

    public ListaOfferteDto() {
    }

    public ListaOfferteDto(List<Offerta> listaOfferte, Token token) {
        this.listaOfferte = listaOfferte;
        this.token = token;
    }

    public List<Offerta> getListaOfferte() {
        return listaOfferte;
    }

    public void setListaOfferte(List<Offerta> listaOfferte) {
        this.listaOfferte = listaOfferte;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
}
