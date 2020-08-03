/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.dto.ImballoDto;
import com.ai.ecom02.model.Imballo;

import com.ai.ecom02.repository.RepImballo;
import com.ai.ecom02.service.ServiceCrud;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Francesco
 */
@Service
public class ServiceImballo implements ServiceCrud<Imballo> {

    @Autowired
    RepImballo repImballo;

    @Override
    public void add(Imballo o) {
        repImballo.save(o);
    }

    @Override
    public void delete(Imballo o) {
        repImballo.delete(o);
    }

    @Override
    public void upDate(Object o) {
        if (o != null) {

        }
        repImballo.flush();

    }

    @Override
    public List getAll() {
        return null;
    }

    @Override
    public Imballo findById(Imballo o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
