/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.service.CategoriaService;

import java.util.ArrayList;
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
public class CategoriaController {

    private static Logger log = LoggerFactory.getLogger(CategoriaController.class);

    @Autowired
    CategoriaService categoriaService;

    @RequestMapping(value = {"/aggiungi-categoria"})
    @ResponseBody
    public List<Categoria> aggiungiCategoria(
            @RequestBody Optional<Categoria> categoria
    ) {
        log.info("ricevuta richiesta di aggiunta");
        if (categoria.isPresent()) {
            categoriaService.addCat(categoria.get());
        } else {
            log.error("impossibile aggiungere");
        }      
        return categoriaService.getLista();
   
    }

    @RequestMapping(value = {"/lista-categorie"})
    @ResponseBody
    public List<Categoria> listaCategoria() {
        return categoriaService.getLista();
    }

    @RequestMapping(value = {"/rimuovi-categoria/{id}"})
    @ResponseBody
    public List<Categoria> rimuoviCategoria(
            @PathVariable Optional<Long> id
    ) {
        if(id.isPresent())
        categoriaService.removeCat(id.get());
        return categoriaService.getLista();
    }

    @RequestMapping(value = {"/cerca-categoria"})
    @ResponseBody
    public List<Categoria> cercaCategoria(
            @RequestBody Optional<RicercaDto> ricerca
    ) {
        if(! ricerca.isPresent()){
            log.error("Ricerca non presente");
            return new ArrayList<Categoria>();
        }
        return categoriaService.findCat(ricerca.get());
    }
    
    @RequestMapping(value={"/modifica-categoria"})
    @ResponseBody
    public List<Categoria> modificaCategoria(
            @RequestBody Optional<Categoria> categoria
    ){
        if(categoria.isPresent())
        categoriaService.updateCat(categoria.get());
        return categoriaService.getLista();
    }
}
