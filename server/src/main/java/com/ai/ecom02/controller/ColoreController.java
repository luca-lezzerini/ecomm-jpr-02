package com.ai.ecom02.controller;

import com.ai.ecom02.dto.ColoreDto;
import com.ai.ecom02.dto.ColoriDto;
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
    public ColoriDto listaColori(
            @RequestBody ColoreDto coloreDto
    ) {
        Token t = coloreDto.getToken();
        t = securityService.retrieveToken(t);
        List<Colore> lista = srvColore.getAll();
        ColoriDto coloriDto = new ColoriDto(lista, t);
        return coloriDto;
    }

    @RequestMapping(value = ("/colori-add"))
    @ResponseBody
    public ColoreDto addColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.add(colore.getColore());
        colore.setToken(t);
        return colore;
    }

    @RequestMapping(value = ("/colori-delete"))
    @ResponseBody
    public ColoreDto deleteColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.delete(colore.getColore());
        colore.setToken(t);
        return colore;
    }

    @RequestMapping(value = ("/colori-update"))
    @ResponseBody
    public ColoreDto updateColore(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        srvColore.update(colore.getColore());
        colore.setToken(t);
        return colore;
    }

    @RequestMapping(value = ("/colori-find"))
    @ResponseBody
    public ColoriDto findColori(
            @RequestBody ColoreDto colore
    ) {
        Token t = colore.getToken();
        t = securityService.retrieveToken(t);
        List<Colore> lista = srvColore.findByColoreLike(colore.getColore());
        ColoriDto listaDto = new ColoriDto(lista, t);
        return listaDto;
    }

}
