package com.ai.ecom02.controller;

import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.service.impl.TagliaServiceImpl;
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
 * @author Francesco
 */

@CrossOrigin("*")
@RestController
public class TagliaController {

    @Autowired
    TagliaServiceImpl srvTaglia;

    @RequestMapping(value = {"/list-taglia"})
    @ResponseBody
    public List<Taglia> listaTaglie() {
        return srvTaglia.getAll();
    }

    @RequestMapping(value = {"/add-taglia"})
    @ResponseBody
    public List<Taglia> aggiungiTaglia(
            @RequestBody Taglia taglia
    ) {
        srvTaglia.add(taglia);
        return srvTaglia.getAll();
    }

    @RequestMapping(value = {"/delete-taglia/{id}"})
    @ResponseBody
    public Taglia cancellaTaglia(
            @PathVariable Long id
    ) {
        Taglia taglia = new Taglia(id);
        srvTaglia.delete(taglia);
        return taglia;
    }

    @RequestMapping(value = {"/update-taglia"})
    @ResponseBody
    public Taglia aggiornaTaglia(
            @RequestBody Taglia taglia
    ) {
        srvTaglia.update(taglia);
        return taglia;
    }

    @RequestMapping(value = {"/find-taglia"})
    @ResponseBody
    public Taglia ricercaTaglia(
            @RequestBody Taglia taglia
    ) {
        srvTaglia.findById(taglia);
        return taglia;
    }

    @RequestMapping(value = {"/find-taglia-by-sigla"})
    @ResponseBody
    public List<Taglia> ricercaBySiglaTaglia(
            @RequestBody Taglia taglia
    ) {
        return srvTaglia.findBySigla(taglia);
    }

    @RequestMapping(value = {"/find-by-descrizione-taglia"})
    @ResponseBody
    public List<Taglia> ricercaByDescrizioneTaglia(
            @RequestBody Taglia taglia
    ) {
        return srvTaglia.findByDescrizione(taglia);
    }
}
