
package com.ai.ecom02.service;


import com.ai.ecom02.dto.ListaProdottoDto;
import com.ai.ecom02.dto.ProdottoDto;
import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Token;
import java.util.List;


public interface ProdottoService {
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
    
    List<Prodotto> findByCodiceLikeOrDescrizioneLike(RicercaDto ricerca);
    
    public ListaProdottoDto creaListaProdottoDto(List<Prodotto> listaProdotto, Token t);
    
    public ProdottoDto creaListaProdottoDto(Prodotto prodotto, Token t);
    
    
}

