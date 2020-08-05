
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.repository.RepProdotto;
import com.ai.ecom02.service.ProdottoServiceCrud;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdottoServiceImpl implements ProdottoServiceCrud  {
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
    
}
