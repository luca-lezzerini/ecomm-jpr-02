package com.ai.ecom02.controller;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Colore;
import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.repository.RepCategoria;
import com.ai.ecom02.repository.RepColore;
import com.ai.ecom02.repository.RepSpedizione;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class TestDataGeneratorController {

    @Autowired
    RepCategoria repCategoria;
    @Autowired
    RepColore repColore;
    @Autowired
    RepSpedizione repSpedizione;

    @RequestMapping("/genera-dati")
    public void generaDati() {
        // cancellare categorie esistenti
        repCategoria.deleteAllInBatch();

        // genero 1000 categorie
        for (int i = 0; i < 1000; i++) {
            Categoria cx = new Categoria(null, "Categoria n. " + i);
            cx = repCategoria.save(cx);
        }

        repColore.deleteAllInBatch();

        for (int i = 0; i < 10_000; i++) {
            Colore cx = new Colore(null, "Colore n. " + i);
            cx = repColore.save(cx);
        }
        
        repSpedizione.deleteAllInBatch();
        
        for(int i = 0; i < 1000; i++){
            Spedizione sp = new Spedizione(null,"#", "Spedizione n. " + i, 0.0);
            sp = repSpedizione.save(sp);
        }
    }

}
