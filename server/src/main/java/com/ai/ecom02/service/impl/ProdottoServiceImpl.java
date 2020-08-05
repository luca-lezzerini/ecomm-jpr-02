package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.repository.RepProdotto;
import com.ai.ecom02.service.ProdottoServiceCrud;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdottoServiceImpl implements ProdottoServiceCrud {

    @Autowired
    RepProdotto repProdotto;

    @Override
    public Prodotto add(Prodotto o) {
        return repProdotto.save(o);
    }

    @Override
    public void delete(Prodotto o) {
        repProdotto.delete(o);
    }

    @Override
    public Prodotto update(Prodotto o) {
        return repProdotto.save(o);
    }

    @Override
    public List<Prodotto> getAll() {
        return repProdotto.findAll();
    }

    @Override
    public Prodotto findById(Prodotto prodotto) {
        Prodotto p = repProdotto.getOne(prodotto.getId());
        return p;
    }

    @Override
    public Prodotto findByDescrizione(Prodotto prodotto) {
        return repProdotto.findByDescrizione(prodotto.getDescrizione());
    }

    @Override
    public List<Prodotto> findByDescrizioneLike(Prodotto prodotto) {
        return repProdotto.findByDescrizioneLike(prodotto.getDescrizione());
    }

    @Override
    public Prodotto findByCodice(Prodotto prodotto) {
        return repProdotto.findByCodice(prodotto.getCodice());
    }

    @Override
    public List<Prodotto> findByCodiceLike(Prodotto prodotto) {
        return repProdotto.findByCodiceLike(prodotto.getCodice());
    }

    @Override
    public List<Prodotto> findByPrezzoLike(Prodotto prodotto) {
    return repProdotto.findByPrezzoLike(prodotto.getPrezzo().toString());
    }
    
}
