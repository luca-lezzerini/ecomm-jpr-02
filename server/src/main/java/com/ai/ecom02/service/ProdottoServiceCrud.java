
package com.ai.ecom02.service;

import com.ai.ecom02.model.Prodotto;
import java.util.List;


public interface ProdottoServiceCrud {
    Prodotto add(Prodotto prodotto);

    void delete(Prodotto prodotto);

    Prodotto update(Prodotto prodotto);

    List<Prodotto> getAll();
    
}
