
package com.ai.ecom02.service;


import com.ai.ecom02.model.Prodotto;
import java.util.List;


public interface ProdottoServiceCrud {
    Prodotto add(Prodotto prodotto);

    void delete(Prodotto prodotto);

    Prodotto update(Prodotto prodotto);

    List<Prodotto> getAll();
    
    Prodotto findById(Prodotto prodotto);
    
     Prodotto findByDescrizione(Prodotto prodotto);

    List<Prodotto> findByDescrizioneLike(Prodotto prodotto);
    
    Prodotto findByCodice(Prodotto prodotto);
    
    List<Prodotto> findByCodiceLike(Prodotto prodotto);
    
    List<Prodotto> findByPrezzoLike(Prodotto prodotto);
    
  //  List<Prodotto> findByCodiceLikeOrDescrizioneLike(Prodotto prodotto);
    
    
}

