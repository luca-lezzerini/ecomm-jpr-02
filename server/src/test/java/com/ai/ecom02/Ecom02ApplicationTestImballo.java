package com.ai.ecom02;

import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.repository.RepImballo;
import com.ai.ecom02.service.ImballoService;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class Ecom02ApplicationTestImballo {

    @Autowired
    RepImballo repImballo;

    @Autowired
    ImballoService srvImballo;

    @Test
    void contextLoads() {

        System.out.println("siamo qui bis!");
    }

    @Test
    @Transactional
    void testaInserimento() {

        //Creo un oggetto Imballo standardBis.
        Imballo standardBis = new Imballo();
        standardBis.setDescrizione("standardBis");
        //Ricerco standardBis sul DB e verifico che non esista,
        //se esiste lo cancello e verifico che sia stato cancellato.
        Imballo ix = repImballo.findByDescrizione(standardBis.getDescrizione());
        if (ix != null) {
            srvImballo.delete(ix);
        }
        //Chiamo il servizio di salvataggio passandogli la categoria jeans.
        standardBis = srvImballo.add(standardBis);
        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Imballo i = repImballo.getOne(standardBis.getId());
        assertNotNull(i, "NON DEVE ESSERE NULL");
        Long a = i.getId();
        Long b = standardBis.getId();
        String c = i.getDescrizione();
        String d = standardBis.getDescrizione();
        assertTrue(a.equals(b) && c.equals(d));
    }
}
