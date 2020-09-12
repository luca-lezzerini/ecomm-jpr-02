package com.ai.ecom02.controller;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.repository.RepCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class TestDataGeneratorController {

    @Autowired
    RepCategoria repCategoria;

    @RequestMapping("/genera-dati")
    public void generaDati() {
        // cancellare categorie esistenti
        repCategoria.deleteAllInBatch();

        // genero 1000 categorie
        for (int i = 0; i < 1000; i++) {
            Categoria cx = new Categoria(null, "Categoria n. " + i);
            cx = repCategoria.save(cx);
        }
    }

}
