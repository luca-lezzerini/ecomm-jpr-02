package com.ai.ecom02.controller;

import com.ai.ecom02.dto.AssociaTagliaDto;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.dto.TagliaDto;
import com.ai.ecom02.dto.TagliaDtoList;
import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.impl.TagliaServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    SecurityService securityService;

    @Autowired
    TagliaServiceImpl srvTaglia;

    @RequestMapping(value = {"/list-taglia"})
    @ResponseBody
    public TagliaDtoList listaTaglie(
            @RequestBody TagliaDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        List<Taglia> list = srvTaglia.getAll();
        TagliaDtoList dt = new TagliaDtoList(list, t);
        return dt;
    }

    @RequestMapping(value = {"/add-taglia"})
    @ResponseBody
    public TagliaDtoList aggiungiTaglia(
            @RequestBody TagliaDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvTaglia.add(dto.getTaglia());
        List<Taglia> list = srvTaglia.getAll();
        TagliaDtoList dy = new TagliaDtoList(list, t);
        return dy;
    }

    @RequestMapping(value = {"/delete-taglia"})
    @ResponseBody
    public TagliaDtoList cancellaTaglia(
            @RequestBody TagliaDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvTaglia.delete(dto.getTaglia());
        List<Taglia> list = srvTaglia.getAll();
        TagliaDtoList dy = new TagliaDtoList(list, t);
        return dy;
    }

    @RequestMapping(value = {"/update-taglia"})
    @ResponseBody
    public TagliaDtoList aggiornaTaglia(
            @RequestBody TagliaDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvTaglia.update(dto.getTaglia());
        List<Taglia> list = srvTaglia.getAll();
        TagliaDtoList dy = new TagliaDtoList(list, t);
        return dy;
    }

    @RequestMapping(value = {"/find-taglia"})
    @ResponseBody
    public TagliaDtoList ricercaTaglia(
            @RequestBody RicercaDto ricerca
    ) {
        Token t = ricerca.getToken();
        t = securityService.retrieveToken(t);
        List<Taglia> listaTaglia = srvTaglia.findByDescrizioneLikeOrSiglaLike(ricerca.getRicerca(), ricerca.getRicerca());
        TagliaDtoList dt = new TagliaDtoList(listaTaglia, t);
        return dt;
    }
    @RequestMapping(value = {"/associa-taglia"})
    @ResponseBody
    public void associaImballo(@RequestBody AssociaTagliaDto dto) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvTaglia.associaTaglia(dto.getProdotto(), dto.getTaglia());   
    }
}
