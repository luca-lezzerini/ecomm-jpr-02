package com.ai.ecom02.controller;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.service.impl.ServiceImballo;
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
public class ControllerAnagraficaImballo {

    @Autowired
    ServiceImballo srvImballo;

    @RequestMapping(value = {"/lista-imballi"})
    @ResponseBody
    public List<Imballo> listaImballi() {
        return srvImballo.getAll();
    }

    @RequestMapping(value = {"/addImballo"})
    @ResponseBody
    public void aggiungiImballo(
            @RequestBody Imballo imballo
    ) {
        srvImballo.add(imballo);
    }

    @RequestMapping(value = {"/deleteImballo/{id}"})
    @ResponseBody
    public Imballo cancellaImballo(
            @PathVariable Long id
    ) {
        Imballo imballo = new Imballo(id);
        srvImballo.delete(imballo);
        return imballo;
    }

    @RequestMapping(value = {"/updateImballo"})
    @ResponseBody
    public Imballo aggiornaImballo(
            @RequestBody Imballo imballo
    ) {
        srvImballo.update(imballo);
        return imballo;
    }

    @RequestMapping(value = {"/findImballo"})
    @ResponseBody
    public Imballo ricercaImballo(
            @RequestBody Imballo imballo
    ) {
        srvImballo.findById(imballo);
        return imballo;
    }
}
