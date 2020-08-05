/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.service.CategoriaService;
import java.util.List;
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
public class ControllerCategoria {

    @Autowired
    CategoriaService categoriaService;

    @RequestMapping(value = {"/aggiungi-categoria"})
    @ResponseBody
    public List<Categoria> aggiungiCategoria(
            @RequestBody Categoria categoria
    ) {
        categoriaService.addCat(categoria);
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
            @PathVariable Long id
    ) {
        categoriaService.removeCat(id);
        return categoriaService.getLista();
    }

    @RequestMapping(value = {"/cerca-categoria/{descrizione}"})
    @ResponseBody
    public List<Categoria> cercaCategoria(
            @PathVariable String descrizione
    ) {
        return categoriaService.findCat(descrizione);
    }
    
    @RequestMapping(value={"/modifica-categoria"})
    @ResponseBody
    public List<Categoria> modificaCategoria(
            @RequestBody Categoria categoria
    ){
        categoriaService.updateCat(categoria);
        return categoriaService.getLista();
    }
}
