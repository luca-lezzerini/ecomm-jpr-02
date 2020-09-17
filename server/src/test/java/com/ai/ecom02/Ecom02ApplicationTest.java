package com.ai.ecom02;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.repository.RepCategoria;
import com.ai.ecom02.repository.RepImballo;
import com.ai.ecom02.service.CategoriaService;
import com.ai.ecom02.service.ImballoService;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class Ecom02ApplicationTest {

    @Autowired
    RepCategoria repCategoria;

    @Autowired
    CategoriaService srvCat;

    @Autowired
    RepImballo repImballo;

    @Autowired
    ImballoService srvImballo;

    @Test
    void contextLoads() {

        System.out.println("siamo qui!");
    }

    @Test
    @Transactional
    void testaInserimentoCategoria() {

        //Creo un oggetto Categoria jeans.
        Categoria jeans = new Categoria();
        jeans.setDescrizione("jeans");
        //Ricerco jeans sul DB e verifico che non esista,
        //se esiste lo cancello e verifico che sia stato cancellato.
        Categoria cx = repCategoria.findByDescrizione(jeans.getDescrizione());
        if (cx != null) {
            srvCat.removeCat(cx.getId());
//            assertThrows(EntityNotFoundException.class, () -> {
//                repCategoria.getOne(cx.getId());
//            }, "LA CATEGORIA DOVREBBE ESSER CANCELLATA!");
        }
        System.out.println(cx);
        System.out.println(jeans);
        //Chiamo il servizio di salvataggio passandogli la categoria jeans.
        jeans = srvCat.addCat(jeans);
        System.out.println("dopo il salvataggio " + jeans);
        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Categoria z = repCategoria.getOne(jeans.getId());
        System.out.println("dopo il recupero " + z);
        assertNotNull(z, "NON DEVE ESSERE NULL");
        Long a = z.getId();
        Long b = jeans.getId();
        String c = z.getDescrizione();
        String d = jeans.getDescrizione();
        assertTrue(a.equals(b) && c.equals(d));
    }

    @Test
    @Transactional
    void testaInserimentoImballo() {
        //Creo un oggetto Imballo standardBis.
        Imballo standardBis = new Imballo();
        standardBis.setDescrizione("standardBis");
        //Ricerco standardBis sul DB e verifico che non esista,
        //se esiste lo cancello e verifico che sia stato cancellato.
        Imballo ix = repImballo.findByDescrizione(standardBis.getDescrizione());
        if (ix != null) {
            srvImballo.delete(ix);
        }
        //Chiamo il servizio di salvataggio passandogli l`imballo standardBis.
        standardBis = srvImballo.add(standardBis);
        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Imballo i = repImballo.getOne(standardBis.getId());
        assertNotNull(i, "NON DEVE ESSERE NULL");
        //Verifico che l`oggetto aggiunto corrisponda
        Long a = i.getId();
        Long b = standardBis.getId();
        String c = i.getDescrizione();
        String d = standardBis.getDescrizione();
        assertTrue(a.equals(b) && c.equals(d));
        //transazione = Rollback finale che non fissa i dati a db, grazie alla annotazione transactional.
    }

    @Test
    @Transactional
    void testaModificaImballo() {
        //Creo un oggetto Imballo standardBis.
        Imballo standardBis = new Imballo();
        standardBis.setDescrizione("standardBis");
        //Ricerco standardBis sul DB e verifico che non esista,
        //se esiste lo cancello e verifico che sia stato cancellato.
        Imballo ix = repImballo.findByDescrizione(standardBis.getDescrizione());
        if (ix != null) {
            srvImballo.delete(ix);
        }
        //Chiamo il servizio di salvataggio passandogli l`imballo standardBis.
        standardBis = srvImballo.add(standardBis);
        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Imballo i = repImballo.getOne(standardBis.getId());
        assertNotNull(i, "NON DEVE ESSERE NULL");
        // modifico la descrizione dell`oggetto reperito dal db
        i.setDescrizione("standardBis22");
        // aggiorno il valore sul db
        Imballo im = srvImballo.update(i);
        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Imballo im2 = repImballo.getOne(im.getId());
        assertNotNull(im2, "NON DEVE ESSERE NULL");

        Long a = im2.getId();
        Long b = standardBis.getId();
        String c = im2.getDescrizione();
        String d = standardBis.getDescrizione();
        assertTrue(a.equals(b) && c.equals(d));
    }
}
