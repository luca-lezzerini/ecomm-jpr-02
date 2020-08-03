/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.repository.RepColore;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.ai.ecom02.service.ColoreServiceCrud;

/**
 *
 * @author Gian Marco
 */
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

    public List<Colore> findByDescrizione(String descrizione) {
//        List<Colore> lista = new ArrayList<>();
        if (descrizione.length() > 0) {
            return repColore.findByDescrizione(descrizione);
        } else {
            return repColore.findAll();
        }
    }

    @Override
    public Colore findById(Colore colore) {
      Optional s = repColore.findById(colore.getId());
      Colore c = (Colore) s.get();
      return c;
        
    }
}