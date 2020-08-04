package com.ai.ecom02.service;

import com.ai.ecom02.model.Imballo;
import java.util.List;

public interface ImballoServiceCrud {

    public Imballo add(Imballo imballo);

    public void delete(Imballo imballo);

    public Imballo update(Imballo imballo);

    public List<Imballo> getAll();

    public Imballo findById(Imballo imballo);

}
