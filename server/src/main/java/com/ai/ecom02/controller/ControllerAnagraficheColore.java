package com.ai.ecom02.controller;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.service.impl.ServiceColore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ControllerAnagraficheColore {

    @Autowired
    ServiceColore srvColore;

    @RequestMapping(value = ("/Colori"))
    @ResponseBody
    public List<Colore> colori() {
        return srvColore.getAll();
    }

    @RequestMapping(value = ("/ColoriAdd"))
    @ResponseBody
    public void addColore(
            @RequestBody Colore colore
    ) {
        srvColore.add(colore);
    }

    @RequestMapping(value = ("/ColoriDelete"))
    @ResponseBody
    public void deleteColore(
            @RequestBody Colore colore
    ) {
         srvColore.delete(colore);
    }

    @RequestMapping(value = ("/ColoriUpdate"))
    @ResponseBody
    public void updateColore(
            @RequestBody Colore colore
    ) {
         srvColore.update(colore);
    }

    @RequestMapping(value = ("/ColoriFind"))
    @ResponseBody
    public List<Colore> findColori(
        @RequestBody Long id
    ) {
         srvColore.find(id);
    }

}
