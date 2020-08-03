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

    @RequestMapping(value = ("/Colori/Add"))
    @ResponseBody
    public void addColore(
            @RequestBody Colore colore
    ) {
        srvColore.add(colore);
    }

    @RequestMapping(value = ("/Colori/Delete"))
    @ResponseBody
    public void deleteColore(
            @RequestBody Colore colore
    ) {
        srvColore.delete(colore);
    }

    @RequestMapping(value = ("/Colori/Update"))
    @ResponseBody
    public void updateColore(
            @RequestBody Colore colore
    ) {
        srvColore.update(colore);
    }

    @RequestMapping(value = ("/Colori/Find"))
    @ResponseBody
    public Colore findColori(
            @RequestBody Colore colore
    ) {
        return srvColore.findById(colore);
    }

}
