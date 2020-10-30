package com.ai.ecom02.controller;

import com.ai.ecom02.dto.AssociaImballoDto;
import com.ai.ecom02.dto.ImballoDto;
import com.ai.ecom02.dto.ImballoDtoList;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.impl.ImballoServiceImpl;
import com.ai.ecom02.service.impl.ProdottoServiceImpl;
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
public class ImballoController {

    @Autowired
    SecurityService securityService;

    @Autowired
    ImballoServiceImpl srvImballo;

    @Autowired
    ProdottoServiceImpl srvProdotto;

    @RequestMapping(value = {"/list-imballo"})
    @ResponseBody
    public ImballoDtoList listaImballo(@RequestBody ImballoDto dto) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        List<Imballo> list = srvImballo.getAll();
        ImballoDtoList dx = new ImballoDtoList(list, t);
        return dx;
    }

    @RequestMapping(value = {"/add-imballo"})
    @ResponseBody
    public ImballoDtoList addImballo(
            @RequestBody ImballoDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvImballo.add(dto.getImballo());
        List<Imballo> lista = srvImballo.getAll();
        ImballoDtoList dx = new ImballoDtoList(lista, t);
        return dx;
    }

    @RequestMapping(value = {"/delete-imballo"})
    @ResponseBody
    public ImballoDtoList cancellaImballo(
            @RequestBody ImballoDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvImballo.delete(dto.getImballo());
        List<Imballo> lista = srvImballo.getAll();
        ImballoDtoList dx = new ImballoDtoList(lista, t);
        return dx;

    }

    @RequestMapping(value = {"/update-imballo"})
    @ResponseBody
    public ImballoDtoList aggiornaImballo(
            @RequestBody ImballoDto dto
    ) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvImballo.update(dto.getImballo());
        List<Imballo> lista = srvImballo.getAll();
        ImballoDtoList dx = new ImballoDtoList(lista, t);
        return dx;
    }

    @RequestMapping(value = {"/find-by-descrizione-imballo"})
    @ResponseBody
    public ImballoDtoList ricercaByDescrizioneImballo(
            @RequestBody RicercaDto ricerca
    ) {
        Token t = ricerca.getToken();
        t = securityService.retrieveToken(t);
        List<Imballo> listaImballo = srvImballo.findByDescrizioneLike(ricerca);
        ImballoDtoList dx = new ImballoDtoList(listaImballo, t);
        return dx;
    }

    @RequestMapping(value = {"/associa-imballo"})
    @ResponseBody
    public ImballoDtoList associaImballo(@RequestBody AssociaImballoDto dto) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvImballo.associaImballo(dto.getProdotto(), dto.getImballo());
        List<Imballo> lista = srvImballo.getAll();
        ImballoDtoList dtl = new ImballoDtoList(lista, t);
        return dtl;
    }

    //Metodo non implementato nell'UI poiché non funzionante e non richiesto nei requisiti
    @RequestMapping(value = {"/dissocia-imballo"})
    @ResponseBody
    public ImballoDtoList dissociaImballo(@RequestBody AssociaImballoDto dto) {
        Token token = dto.getToken();
        Token t = securityService.retrieveToken(token);
        srvImballo.dissociaImballo(dto.getProdotto());
        List<Imballo> lista = srvImballo.getAll();
        ImballoDtoList dtl = new ImballoDtoList(lista, t);
        return dtl;
    }
}
