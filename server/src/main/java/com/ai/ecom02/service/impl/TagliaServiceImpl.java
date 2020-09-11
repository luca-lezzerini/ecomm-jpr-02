package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.repository.RepProdotto;
import com.ai.ecom02.repository.RepTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ai.ecom02.service.TagliaService;

/**
 *
 * @author Francesco
 */

@Service
public class TagliaServiceImpl implements TagliaService {

    @Autowired
    RepTaglia repTaglia;
    @Autowired
    RepProdotto repProdotto;

    @Override
    public Taglia add(Taglia t) {
        return repTaglia.save(t);
    }

    @Override
    public void delete(Taglia t) {
        repTaglia.delete(t);
    }

    @Override
    public List<Taglia> getAll() {
        return repTaglia.findAll();
    }

    @Override
    public Taglia findById(Taglia t) {
        Taglia z = repTaglia.getOne(t.getId());
        return z;
    }

    @Override
    public Taglia update(Taglia taglia) {
        return repTaglia.save(taglia);
    }

    public List<Taglia> findByDescrizioneLikeOrSiglaLike(String ricerca, String ricerca0) {
        return repTaglia.findByDescrizioneLikeOrSiglaLike("%" + ricerca + "%", "%" + ricerca0 + "%");
    }

    public void associaTaglia(Prodotto prodotto, Taglia taglia) {
        taglia = repTaglia.getOne(taglia.getId());
        prodotto = repProdotto.getOne(prodotto.getId());
        prodotto.setTaglia(taglia);
        List<Prodotto> listaP = taglia.getProdotti();
        listaP.add(prodotto);
        repTaglia.save(taglia);
        repProdotto.save(prodotto);
    }

}
