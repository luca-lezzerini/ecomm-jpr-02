
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.repository.RepColore;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.ai.ecom02.service.ColoreServiceCrud;
import org.springframework.stereotype.Service;

@Service
public class ServiceColore implements ColoreServiceCrud {

    @Autowired
    RepColore repColore;

    @Override
    public void add(Colore o) {
        repColore.save(o);
    }

    @Override
    public void delete(Colore o) {
        repColore.delete(o);
    }

    @Override
    public void update(Colore o) {
        repColore.save(o);
    }

    @Override
    public List<Colore> getAll() {
        return repColore.findAll();
    }

    @Override
    public Colore findByColore(Colore colore) {
        return repColore.findByColore(colore.getColore());
    }

    @Override
    public Colore findById(Colore colore) {
        Optional<Colore> s = repColore.findById(colore.getId());
        Colore c = s.get();
        return c;

    }
}
