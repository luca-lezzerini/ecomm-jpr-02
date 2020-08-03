package com.ai.ecom02.service;

import com.ai.ecom02.model.Imballo;
import java.util.List;
public interface ImballoServiceCrud {

    public void add(Imballo imballo);

    public void delete(Imballo imballo);

    public void update(Imballo imballo);

    public List<Imballo> getAll();
    
    public Imballo findById(Imballo imballo);
    
}
