package com.ai.ecom02.service;

import com.ai.ecom02.model.Colore;
import java.util.List;

public interface ColoreServiceCrud {

    public Colore add(Colore colore);

    public void delete(Colore colore);

    public Colore update(Colore colore);

    public List<Colore> getAll();

    public Colore findById(Colore colore);

    public Colore findByColore(Colore colore);

}
