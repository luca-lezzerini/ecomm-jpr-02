package com.ai.ecom02;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.repository.RepCategoria;
import com.ai.ecom02.service.CategoriaService;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Ecom02ApplicationTest {

    @Autowired
    RepCategoria repCategoria;

    @Autowired
    CategoriaService srvCat;

    @Test
    void contextLoads() {

        System.out.println("siamo qui!");
    }

    @Test
    @Transactional
    void testaInserimento() {

        //Creo un oggetto Categoria jeans.
        Categoria jeans = new Categoria();
        jeans.setDescrizione("jeans");
        //Ricerco jeans sul DB e verifico che non esista,
        //se esiste lo cancello e verifico che sia stato cancellato.
        Categoria cx = repCategoria.findByDescrizione(jeans.getDescrizione());
        if (cx != null) {
            srvCat.removeCat(cx.getId());
            assertThrows(EntityNotFoundException.class, () -> {
                repCategoria.getOne(cx.getId());
            }, "LA CATEGORIA DOVREBBE ESSER CANCELLATA!");
        }
        System.out.println(cx);
        System.out.println(jeans);
        //Chiamo il servizio di salvataggio passandogli la categoria jeans.
        jeans = srvCat.addCat(jeans);

        //Utilizzo il metodo di ricerca per cercare
        //l’oggetto salvato sul DB e verifico che esista.
        Categoria z = repCategoria.getOne(jeans.getId());
        assertNotNull(z, "NON DEVE ESSERE NULL");
        Long a = z.getId();
        Long b = jeans.getId();
        String c = z.getDescrizione();
        String d = jeans.getDescrizione();
        assertTrue(a.equals(b) && c.equals(d));
    }
}
