package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Token;
import com.ai.ecom02.repository.TokenRepository;
import com.ai.ecom02.service.SecurityService;
import java.time.LocalDateTime;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService {

    @Autowired
    TokenRepository tokenRepository;

    /**
     * Cerca il token ricevuto e se non esiste o è scaduto ne crea uno nuovo.
     * Alla fine ritorna il token trovato o generato. Se chiamato con null
     * genera un nuovo token.
     *
     * @param t il token da cercare (può valere null)
     * @return il token trovato o generato
     */
    @Override
    public Token retrieveToken(Token t) {
        if (t == null) {
            return generaNuovoToken();
        } else {
            // cerco su DB
            t = tokenRepository.findByToken(t.getToken());
            if (t == null) {
                return generaNuovoToken();
            } else {
                // vedo se è scaduto
                if (t.getScadenza().compareTo(LocalDateTime.now()) < 0) {
                    return generaNuovoToken();
                } else {
                    return t;
                }
            }
        }
    }

    /**
     * Restituisce un nuovo token creandolo
     *
     * @return un nuovo token
     */
    private Token generaNuovoToken() {
        Random r = new Random();
        long tx = r.nextLong();
        Token t = new Token(tx, LocalDateTime.now());
        t = tokenRepository.save(t);
        return t;
    }

}
