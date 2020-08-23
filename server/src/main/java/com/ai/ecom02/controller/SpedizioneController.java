/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Spedizione;
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
    SpedizioneService spedizioneService;

    private static Logger log = LoggerFactory.getLogger(SpedizioneController.class);

    @RequestMapping(value = {"/aggiungi-spedizione"})
    @ResponseBody
    public List<Spedizione> aggiungiSpedizione(@RequestBody Optional<Spedizione> spedizione) {
        log.info("Ricevuta richiesta di inserimento");
        if (spedizione.isPresent()) {
            spedizioneService.addSped(spedizione.get());
        } else {
            log.error("Spedizione nulla");
        }
        return spedizioneService.getLista();
    }

    @RequestMapping(value = {"/lista-spedizioni"})
    @ResponseBody
    public List<Spedizione> listaSpedizioni() {
        return spedizioneService.getLista();
    }

    @RequestMapping(value = {"/rimuovi-spedizione/{id}"})
    @ResponseBody
    public List<Spedizione> rimuoviSpedizione(@PathVariable Optional<Long> id) {
        log.info("Ricevuta richiesta di cancellazione");
        if (id.isPresent()) {
            spedizioneService.removeSped(id.get());
        } else {
            log.error("Spedizione nulla");
        }
        return spedizioneService.getLista();
    }

    @RequestMapping(value = {"/cerca-spedizione"})
    @ResponseBody
    public List<Spedizione> cercaSpedizione(@RequestBody Optional<String> ricerca) {
        if (ricerca.isPresent()) {
            log.info("Ecco cosa ho trovato per questa ricerca");
        } else {
            log.error("Non ci sono spedizioni per la ricerca effettuata");
        }
        return spedizioneService.findSped(ricerca.get(), ricerca.get());
    }

    @RequestMapping(value = {"/modifica-spedizione"})
    @ResponseBody
    public List<Spedizione> modificaCategoria(@RequestBody Optional<Spedizione> spedizione) {
        log.info("Ricevuta richiesta di modifica");
        if (spedizione.isPresent()) {
            spedizioneService.updateSped(spedizione.get());
        } else {
            log.error("Spedizione nulla");
        }
        return spedizioneService.getLista();
    }
}
