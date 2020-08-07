package com.ai.ecom02.service;

import com.ai.ecom02.model.Taglia;
import java.util.List;

public interface TagliaServiceCrud {

    public Taglia add(Taglia taglia);

    public void delete(Taglia taglia);

    public Taglia update(Taglia taglia);

    public List<Taglia> getAll();

    public Taglia findById(Taglia taglia);

}
