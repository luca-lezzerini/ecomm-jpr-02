/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.repository.RepCategoria;
import com.ai.ecom02.service.CategoriaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Roberto
 */
@Service
public class CategoriaServiceImpl implements CategoriaService{
    
    @Autowired
    RepCategoria repCategoria;

    @Override
    public Categoria addCategoria(Categoria categoria) {
           return repCategoria.save(categoria);
    }

    @Override
    public List<Categoria> getLista() {
        return repCategoria.findAll();
    }
      
}
