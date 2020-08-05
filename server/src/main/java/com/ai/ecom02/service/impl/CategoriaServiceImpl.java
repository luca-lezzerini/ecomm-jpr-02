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
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    RepCategoria repCategoria;

    @Override
    public void addCat(Categoria categoria) {
        if (!categoria.getDescrizione().equals(repCategoria.findByDescrizione(categoria.getDescrizione()).getDescrizione())) {
            repCategoria.save(categoria);
        }
    }

    @Override
    public List<Categoria> getLista() {
        return repCategoria.findAll();
    }

    @Override
    public List<Categoria> removeCat(Long id) {
        repCategoria.deleteById(id);
        return getLista();
    }

    @Override
    public List<Categoria> findCat(String descrizione) {
        return repCategoria.findByDescrizioneLike(descrizione);
    }

    @Override
    public List<Categoria> updateCat(Categoria categoria) {
        if (!categoria.getDescrizione().equals(repCategoria.findByDescrizione(categoria.getDescrizione()).getDescrizione())) {
            repCategoria.save(categoria);
        }
        return getLista();
    }
    
    

}
