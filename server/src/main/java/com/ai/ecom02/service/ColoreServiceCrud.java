package com.ai.ecom02.service;

import com.ai.ecom02.model.Colore;
import java.util.List;

public interface ColoreServiceCrud {

    Colore add(Colore colore);

    void delete(Colore colore);

    Colore update(Colore colore);

    List<Colore> getAll();

    Colore findById(Colore colore);

    Colore findByColore(Colore colore);

    List<Colore> findByColoreLike(Colore colore);
}
