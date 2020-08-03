/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Colore;
import com.ai.ecom02.repository.RepColore;
import com.ai.ecom02.service.ServiceCrud;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Gian Marco
 */
public class ServiceColore implements ServiceCrud<Colore> {

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

}
