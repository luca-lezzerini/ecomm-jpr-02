package com.ai.ecom02.service.impl;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.repository.RepImballo;
import com.ai.ecom02.repository.RepProdotto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ai.ecom02.service.ImballoService;

/**
 *
 * @author Francesco
 */

@Service
public class ImballoServiceImpl implements ImballoService {

    @Autowired
    RepImballo repImballo;

    @Autowired
    RepProdotto repProdotto;

    @Override
    public Imballo add(Imballo o) {
        return repImballo.save(o);
    }

    @Override
    public void delete(Imballo o) {
        repImballo.delete(o);
    }

    @Override
    public List<Imballo> getAll() {
        return repImballo.findAll();
    }

    @Override
    public Imballo findById(Imballo o) {
        Imballo i = repImballo.getOne(o.getId());
        return i;
    }

    @Override
    public Imballo update(Imballo imballo) {
        return repImballo.save(imballo);
    }

    public Imballo findByDescrizione(RicercaDto ricerca) {
        return repImballo.findByDescrizione("%" + ricerca.getRicerca() + "%");
    }
    
    public List<Imballo> findByDescrizioneLike(RicercaDto ricerca) {
        return repImballo.findByDescrizioneLike(ricerca.getRicerca());
    }

    @Override
    public void associaImballo(Prodotto prodotto, Imballo imballo) {
        // recuperiamo i record aggiornati dal database
        imballo = repImballo.getOne(imballo.getId());
        prodotto = repProdotto.getOne(prodotto.getId());
        // aggiorniamo l`associazione lato prodotto
        prodotto.setImballo(imballo);
        Prodotto pp= repProdotto.save(prodotto);
        // aggiorniamo l`associazione lato taglia
        List<Prodotto> listaP = imballo.getProdotti();
        listaP.removeIf(x -> (x.getId().equals(pp.getId())));
        listaP.add(prodotto);
        imballo = repImballo.save(imballo);
    }

    @Override
    public void dissociaImballo(Prodotto prodotto) {
        // recupero prodotto
        prodotto = repProdotto.getOne(prodotto.getId());
        Imballo i = prodotto.getImballo();
        // dissociamo lato prodotto
        prodotto.setTaglia(null);
        Prodotto pp = repProdotto.save(prodotto);
        // dissociamo lato imballo
        List<Prodotto> listaP = i.getProdotti();
        listaP.removeIf(p -> pp.getId().equals(p.getId()));
        i = repImballo.save(i);
    }
}
