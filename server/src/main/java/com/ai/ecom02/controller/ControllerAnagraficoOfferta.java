/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.controller;

import com.ai.ecom02.model.Offerta;
import com.ai.ecom02.service.impl.OffertaServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")                                                           // Accetta richieste da qualunque client 
@RestController                                                         // risponde a richieste rest 
public class ControllerAnagraficoOfferta {

    @Autowired
    OffertaServiceImpl srvOfferta;

    @RequestMapping(value = ("/lista-offerte"))                                // tutte le volte che arriva una chiamata con quel url il controller rispondera con questo metodo                                                        
    @ResponseBody                                                               // la risposta passera direttamente al client invece ad una view nel server 
    public List<Offerta> listaProdotti() {
        return srvOfferta.getAll();
    }

    @RequestMapping(value = ("/offerta-add"))
    @ResponseBody
    public void addProdotto(
            @RequestBody Offerta offerta // la richiesta arriva dal application client 
    ) {
        srvOfferta.add(offerta);
    }

    @RequestMapping(value = ("/offerta-delete"))
    @ResponseBody
    public void deleteOfferta(@RequestBody Offerta offerta) {
        
        srvOfferta.delete(offerta);
    }

    @RequestMapping(value = ("/offerta-update"))
    @ResponseBody
    public void updateOfferta(@RequestBody Offerta offerta) {

        srvOfferta.update(offerta);

    }
    
    
    
    @RequestMapping(value=("/offerta-find"))
    @ResponseBody
    public List<Offerta> findByCodiceLike(@RequestBody Offerta offerta){
        
        return srvOfferta.findByCodiceLike(offerta);
        
    
}
    
    
    
    
    
    

}
