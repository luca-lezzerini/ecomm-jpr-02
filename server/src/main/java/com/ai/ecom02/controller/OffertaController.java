/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.dto.ListaOfferteDto;
import com.ai.ecom02.dto.OffertaDto;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Offerta;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.impl.OffertaServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")                                                           // Accetta richieste da qualunque client 
@RestController                                                         // risponde a richieste rest 
public class OffertaController {

    @Autowired
    OffertaServiceImpl srvOfferta;

    @Autowired
    SecurityService securityService;

    @RequestMapping(value = ("/lista-offerte"))                                // tutte le volte che arriva una chiamata con quel url il controller rispondera con questo metodo                                                        
    @ResponseBody                                                               // la risposta passera direttamente al client invece ad una view nel server 
    public ListaOfferteDto listaProdotti(
            @RequestBody OffertaDto dto
    ) {
        Token t = dto.getToken();
        t = securityService.retrieveToken(t);
        List<Offerta> lista = srvOfferta.getAll();
        ListaOfferteDto listaDto = new ListaOfferteDto(lista, t);
        return listaDto;
    }

    @RequestMapping(value = ("/offerta-add"))
    @ResponseBody
    public void addProdotto(
            @RequestBody OffertaDto offerta // la richiesta arriva dal application client 
    ) {
        Token t = offerta.getToken();
        t = securityService.retrieveToken(t);
        srvOfferta.add(offerta.getOfferta());
    }

    @RequestMapping(value = ("/offerta-delete"))
    @ResponseBody
    public void deleteOfferta(@RequestBody OffertaDto offerta) {
        Token t = offerta.getToken();
        t = securityService.retrieveToken(t);
        srvOfferta.delete(offerta.getOfferta());

    }

    @RequestMapping(value = ("/offerta-update"))
    @ResponseBody
    public void updateOfferta(@RequestBody OffertaDto offerta) {
        Token t = offerta.getToken();
        t = securityService.retrieveToken(t);
        srvOfferta.update(offerta.getOfferta());
    }

    @RequestMapping(value = ("/offerta-find"))
    @ResponseBody
    public ListaOfferteDto findByCodiceLike(@RequestBody RicercaDto ricerca) {

        Token t = ricerca.getToken();
        t = securityService.retrieveToken(t);
        List<Offerta> lista = srvOfferta.findByDescrizioneOrCodiceLike(ricerca);
        ListaOfferteDto listaDto = new ListaOfferteDto(lista, t);
        return listaDto;

    }

}
