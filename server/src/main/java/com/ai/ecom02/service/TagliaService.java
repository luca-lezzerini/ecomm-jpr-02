package com.ai.ecom02.service;

import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.model.Taglia;
import java.util.List;

public interface TagliaService {

    Taglia add(Taglia taglia);

    void delete(Taglia taglia);

    Taglia update(Taglia taglia);

    List<Taglia> getAll();

    Taglia findById(Taglia taglia);

    void associaTaglia(Prodotto prodotto, Taglia taglia);
    
    void dissociaTaglia(Prodotto prodotto);

}
