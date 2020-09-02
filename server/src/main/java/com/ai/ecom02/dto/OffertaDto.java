/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Offerta;
import com.ai.ecom02.model.Token;

/**
 *
 * @author Gian Marco
 */
public class OffertaDto implements Tokenizabile {

    private Offerta offerta;

    private Token token;

    public OffertaDto() {
    }

    public OffertaDto(Offerta offerta, Token token) {
        this.offerta = offerta;
        this.token = token;
    }

    public Offerta getOfferta() {
        return offerta;
    }

    public void setOfferta(Offerta offerta) {
        this.offerta = offerta;
    }

    @Override
    public Token getToken() {
            return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = token;
    }

}
