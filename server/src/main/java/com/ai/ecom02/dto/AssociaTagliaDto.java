
package com.ai.ecom02.dto;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.model.Token;


public class AssociaTagliaDto implements Tokenizabile{
  
 private Taglia taglia;
 private Prodotto prodotto;
 private Token token;   

    public AssociaTagliaDto(Taglia taglia, Prodotto prodotto, Token token) {
        this.taglia = taglia;
        this.prodotto = prodotto;
        this.token = token;
    }

    public AssociaTagliaDto(Taglia taglia, Prodotto prodotto) {
        this.taglia = taglia;
        this.prodotto = prodotto;
    }

    public AssociaTagliaDto() {
    }

     @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        this.token = t;
    }

    public Taglia getTaglia() {
        return taglia;
    }

    public void setTaglia(Taglia taglia) {
        this.taglia = taglia;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }
    
    
    
    
    
    
}
