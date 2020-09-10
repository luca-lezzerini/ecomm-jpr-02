/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.dto.AssociaCategoriaDto;
import com.ai.ecom02.dto.CategoriaDto;
import com.ai.ecom02.dto.CategoriaListaDto;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.CategoriaService;
import com.ai.ecom02.service.SecurityService;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
public class CategoriaController {

    private static Logger log = LoggerFactory.getLogger(CategoriaController.class);

    @Autowired
    SecurityService securityService;

    @Autowired
    CategoriaService categoriaService;

    @RequestMapping(value = {"/aggiungi-categoria"})
    @ResponseBody
    public CategoriaListaDto aggiungiCategoria(
            @RequestBody CategoriaDto categoriaDto
    ) {
        CategoriaListaDto lista = new CategoriaListaDto();
        log.info("ricevuta richiesta di aggiunta");
        if (categoriaDto != null) {
            Token token = categoriaDto.getToken();
            Token t = securityService.retrieveToken(token);
            categoriaService.addCat(categoriaDto.getCategoria());
            lista = new CategoriaListaDto(categoriaService.getLista(), t);
            return lista;
        } else {
            log.error("impossibile aggiungere");
            lista.setListaCategoriaDto(categoriaService.getLista());
            lista.setToken(categoriaDto.getToken());
            return lista;
        }
    }

    @RequestMapping(value = {"/lista-categorie"})
    @ResponseBody
    public CategoriaListaDto listaCategoria(
            @RequestBody CategoriaDto categoriaDto
    ) {
        CategoriaListaDto lista = new CategoriaListaDto();
        log.info("ricevuta richiesta lista");
        if (categoriaDto != null) {
            Token token = categoriaDto.getToken();
            Token t = securityService.retrieveToken(token);
            lista = new CategoriaListaDto(categoriaService.getLista(), t);
            return lista;
        }
        log.info("lista non trovata");
        lista.setListaCategoriaDto(categoriaService.getLista());
        lista.setToken(categoriaDto.getToken());
        return lista;
    }

    @RequestMapping(value = {"/rimuovi-categoria"})
    @ResponseBody
    public CategoriaListaDto rimuoviCategoria(
            @RequestBody CategoriaDto categoriaDto
    ) {
        CategoriaListaDto lista = new CategoriaListaDto();
        log.info("ricevuta richiesta di eliminazione");
        if (categoriaDto != null) {
            Token token = categoriaDto.getToken();
            Token t = securityService.retrieveToken(token);
            categoriaService.removeCat(categoriaDto.getCategoria().getId());
            lista = new CategoriaListaDto(categoriaService.getLista(), t);
            return lista;
        }
        log.info("categoria non trovata");
        lista.setListaCategoriaDto(categoriaService.getLista());
        lista.setToken(categoriaDto.getToken());
        return lista;
    }

    @RequestMapping(value = {"/cerca-categoria"})
    @ResponseBody
    public CategoriaListaDto cercaCategoria(
            @RequestBody RicercaDto ricercaDto
    ) {
        CategoriaListaDto lista = new CategoriaListaDto();
        log.info("ricevuta richiesta di ricerca categoria");
        if (ricercaDto != null) {
            Token token = ricercaDto.getToken();
            Token t = securityService.retrieveToken(token);
            lista = new CategoriaListaDto(categoriaService.findCat(ricercaDto), t);
            return lista;
        }
        log.error("ricerca non presente");
        lista.setListaCategoriaDto(categoriaService.getLista());
        lista.setToken(ricercaDto.getToken());
        return lista;
    }

    @RequestMapping(value = {"/modifica-categoria"})
    @ResponseBody
    public CategoriaListaDto modificaCategoria(
            @RequestBody CategoriaDto categoriaDto
    ) {
        CategoriaListaDto lista = new CategoriaListaDto();
        log.info("richiesta modifica categoria");
        if (categoriaDto != null) {
            Token token = categoriaDto.getToken();
            Token t = securityService.retrieveToken(token);
            categoriaService.updateCat(categoriaDto.getCategoria());
            lista = new CategoriaListaDto(categoriaService.getLista(), t);
            return lista;
        }
        log.error("impossibile modificare la categoria");
        lista.setListaCategoriaDto(categoriaService.getLista());
        lista.setToken(categoriaDto.getToken());
        return lista;
    }
    
    @RequestMapping(value = {"/associa-categorie"})
    @ResponseBody
    public AssociaCategoriaDto associaCategoria(@RequestBody AssociaCategoriaDto associaCategoriaDto){
        return associaCategoriaDto;
    }
}
