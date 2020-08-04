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

    @RequestMapping(value = ("/lista-colori"))
    @ResponseBody
    public List<Colore> listaColori() {
        System.out.println("lista-colori");
        return srvColore.getAll();
    }

    @RequestMapping(value = ("/colori-add"))
    @ResponseBody
    public void addColore(
            @RequestBody Colore colore
    ) {
        srvColore.add(colore);
    }

    @RequestMapping(value = ("/colori-delete"))
    @ResponseBody
    public void deleteColore(
            @RequestBody Colore colore
    ) {
        System.out.println("colori-delete");
        srvColore.delete(colore);
    }

    @RequestMapping(value = ("/colori-update"))
    @ResponseBody
    public void updateColore(
            @RequestBody Colore colore
    ) {
        srvColore.update(colore);
    }

    @RequestMapping(value = ("/colori-find"))
    @ResponseBody
    public List<Colore> findColori(
            @RequestBody Colore colore
    ) {
        System.out.println("find_colore");
        return srvColore.findByColoreLike(colore);
    }

}
