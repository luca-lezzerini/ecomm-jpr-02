package com.ai.ecom02.controller;

import com.ai.ecom02.dto.ColoreDto;
import com.ai.ecom02.dto.ListaColoriDto;
import com.ai.ecom02.model.Colore;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.impl.ColoreServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ColoreController {

    @Autowired
    ColoreServiceImpl srvColore;

    @Autowired
    SecurityService securityService;

    @RequestMapping(value = ("/lista-colori"))
    @ResponseBody
    public ListaColoriDto listaColori(
    @RequestBody ColoreDto coloreDto
    ) {
        Token t = coloreDto.getToken();
        t = securityService.retrieveToken(t);
        List<Colore> lista = srvColore.getAll();
        ListaColoriDto listaDto = new ListaColoriDto(lista, t);
        return listaDto;
    }

    @RequestMapping(value = ("/colori-add"))
    @ResponseBody
    public void addColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.add(colore.getColore());
    }

    @RequestMapping(value = ("/colori-delete"))
    @ResponseBody
    public void deleteColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.delete(colore.getColore());
    }

    @RequestMapping(value = ("/colori-update"))
    @ResponseBody
    public void updateColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.update(colore.getColore());
    }

    @RequestMapping(value = ("/colori-find"))
    @ResponseBody
    public ListaColoriDto findColori(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        List<Colore> lista = srvColore.findByColoreLike(colore.getColore());
        ListaColoriDto listaDto = new ListaColoriDto(lista, t);
        return listaDto;
    }

}
