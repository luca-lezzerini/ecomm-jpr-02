/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.dto.SpedizioneDto;
import com.ai.ecom02.dto.SpedizioneListaDto;
import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.SpedizioneService;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Roberto
 */
@CrossOrigin("*")
@RestController
public class SpedizioneController {

    @Autowired
    SecurityService securityService;

    @Autowired
    SpedizioneService spedizioneService;

    private static Logger log = LoggerFactory.getLogger(SpedizioneController.class);

    @RequestMapping(value = {"/aggiungi-spedizione"})
    @ResponseBody
    public SpedizioneListaDto aggiungiSpedizione(
            @RequestBody SpedizioneDto spedizioneDto
    ) {
        SpedizioneListaDto lista = new SpedizioneListaDto();
        log.info("Ricevuta richiesta di inserimento");
        if (spedizioneDto != null) {
            Token token = spedizioneDto.getToken();
            Token t = securityService.retrieveToken(token);
            spedizioneService.addSped(spedizioneDto.getSpedizione());
            lista = new SpedizioneListaDto(spedizioneService.getLista(), t);
            return lista;
        } else {
            log.error("Spedizione nulla");
            lista.setListaSpedizioneDto(spedizioneService.getLista());
            return lista;
        }
    }

    @RequestMapping(value = {"/lista-spedizioni"})
    @ResponseBody
    public SpedizioneListaDto listaSpedizioni(
            @RequestBody SpedizioneDto spedizioneDto
    ) {
        SpedizioneListaDto lista = new SpedizioneListaDto();
        log.info("Ricevuta richiesta lista");
        if (spedizioneDto != null) {
            Token token = spedizioneDto.getToken();
            Token t = securityService.retrieveToken(token);
            lista = new SpedizioneListaDto(spedizioneService.getLista(), t);
            return lista;
        } else {
            log.error("Lista non presente");
            lista.setListaSpedizioneDto(spedizioneService.getLista());
            lista.setToken(spedizioneDto.getToken());
            return lista;
        }
    }

    @RequestMapping(value = {"/rimuovi-spedizione"})
    @ResponseBody
    public SpedizioneListaDto rimuoviSpedizione(
            @RequestBody SpedizioneDto spedizioneDto
    ) {
        SpedizioneListaDto lista = new SpedizioneListaDto();
        log.info("Ricevuta richiesta di cancellazione");
        if (spedizioneDto != null) {
            Token token = spedizioneDto.getToken();
            Token t = securityService.retrieveToken(token);
            spedizioneService.removeSped(spedizioneDto.getSpedizione().getId());
            lista = new SpedizioneListaDto(spedizioneService.getLista(), t);
            return lista;
        } else {
            log.error("Spedizione nulla");
            lista.setListaSpedizioneDto(spedizioneService.getLista());
            lista.setToken(spedizioneDto.getToken());
            return lista;
        }
    }

    @RequestMapping(value = {"/cerca-spedizione"})
    @ResponseBody
    public SpedizioneListaDto cercaSpedizione(
            @RequestBody RicercaDto ricercaDto
    ) {
        SpedizioneListaDto lista = new SpedizioneListaDto();
        log.info("Ricevuta richiesta di ricerca spedizione");
        if (ricercaDto != null) {
            Token token = ricercaDto.getToken();
            Token t = securityService.retrieveToken(token);
            lista = new SpedizioneListaDto(spedizioneService.findSped(ricercaDto.getRicerca(), ricercaDto.getRicerca()), t);
            return lista;
        } else {
            log.error("Non ci sono spedizioni per la ricerca effettuata");
            lista.setListaSpedizioneDto(spedizioneService.getLista());
            lista.setToken(ricercaDto.getToken());
            return lista;
        }
    }

    @RequestMapping(value = {"/modifica-spedizione"})
    @ResponseBody
    public SpedizioneListaDto modificaCategoria(
            @RequestBody SpedizioneDto spedizioneDto
    ) {
        SpedizioneListaDto lista = new SpedizioneListaDto();
        log.info("Ricevuta richiesta di modifica");
        if (spedizioneDto != null) {
            Token token = spedizioneDto.getToken();
            Token t = securityService.retrieveToken(token);
            spedizioneService.updateSped(spedizioneDto.getSpedizione());
            lista = new SpedizioneListaDto(spedizioneService.getLista(), t);
            return lista;
        } else {
            log.error("Modifica spedizione annullata");
            lista.setListaSpedizioneDto(spedizioneService.getLista());
            lista.setToken(spedizioneDto.getToken());
            return lista;
        }
    }
}
