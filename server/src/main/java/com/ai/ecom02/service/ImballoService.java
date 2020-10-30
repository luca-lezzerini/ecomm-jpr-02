package com.ai.ecom02.service;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.model.Prodotto;
import java.util.List;

public interface ImballoService {

    Imballo add(Imballo imballo);

    void delete(Imballo imballo);

    Imballo update(Imballo imballo);
    
    List<Imballo> findByDescrizioneLike(RicercaDto ricerca);

    List<Imballo> getAll();

    Imballo findById(Imballo imballo);

    void associaImballo(Prodotto prodotto, Imballo imballo);

    //Metodo non implementato nell'UI poiché non funzionante e non richiesto nei requisiti
    void dissociaImballo(Prodotto prodotto);
}
