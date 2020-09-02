package com.ai.ecom02.controller;

import com.ai.ecom02.dto.ImballoDtoList;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Token;
import com.ai.ecom02.service.SecurityService;
import com.ai.ecom02.service.impl.ImballoServiceImpl;
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
public class ImballoController {

    @Autowired
    SecurityService securityService;
    
    @Autowired
    ImballoServiceImpl srvImballo;

    @RequestMapping(value = {"/list-imballo"})
    @ResponseBody
    public List<Imballo> listaImballi() {
        return srvImballo.getAll();
    }

    @RequestMapping(value = {"/add-imballo"})
    @ResponseBody
    public List<Imballo> aggiungiImballo(
            @RequestBody Imballo imballo
    ) {
        srvImballo.add(imballo);
        return srvImballo.getAll();
    }

    @RequestMapping(value = {"/delete-imballo/{id}"})
    @ResponseBody
    public List<Imballo> cancellaImballo(
            @PathVariable Long id
    ) {
        Imballo imballo = new Imballo(id);
        srvImballo.delete(imballo);
        return srvImballo.getAll();
    }

    @RequestMapping(value = {"/update-imballo"})
    @ResponseBody
    public Imballo aggiornaImballo(
            @RequestBody Imballo imballo
    ) {
        srvImballo.update(imballo);
        return imballo;
    }
   
    @RequestMapping(value = {"/find-by-descrizione-imballo"})
    @ResponseBody
    public ImballoDtoList ricercaByDescrizioneImballo(
            @RequestBody RicercaDto ricerca
    ) {
        Token t = ricerca.getToken();
        t = securityService.retrieveToken(t);
        List<Imballo> listaImballo = srvImballo.findByDescrizione(ricerca); 
        ImballoDtoList imbDtoList = new ImballoDtoList(listaImballo, t);
        return imbDtoList;
    }
    

}
