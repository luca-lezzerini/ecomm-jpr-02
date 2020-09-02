package com.ai.ecom02.model;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Long token;

    @Column
    private LocalDateTime creazione;

    @Column
    private LocalDateTime scadenza;

    public Token() {
    }

    public Token(Long token, LocalDateTime creazione) {
        this.token = token;
        this.creazione = creazione;
        this.scadenza = creazione.plusMinutes(30L);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getToken() {
        return token;
    }

    public void setToken(Long token) {
        this.token = token;
    }

    public LocalDateTime getCreazione() {
        return creazione;
    }

    public void setCreazione(LocalDateTime creazione) {
        this.creazione = creazione;
    }

    public LocalDateTime getScadenza() {
        return scadenza;
    }

    public void setScadenza(LocalDateTime scadenza) {
        this.scadenza = scadenza;
    }

    @Override
    public String toString() {
        return "Token{" + "id=" + id + ", token=" + token + ", creazione=" + creazione + ", scadenza=" + scadenza + '}';
    }
    
    
    
    

}
