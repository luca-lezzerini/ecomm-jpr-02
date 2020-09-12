/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Categoria;
import com.ai.ecom02.repository.RepCategoria;
import com.ai.ecom02.service.CategoriaService;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author Roberto
 */
@Service
public class CategoriaServiceImpl implements CategoriaService {

    private static Logger log = LoggerFactory.getLogger(CategoriaServiceImpl.class);

    @Autowired
    RepCategoria repCategoria;

    @Override
    public Categoria addCat(Categoria categoria) {
        try {
            return repCategoria.save(categoria);
        } catch (Exception e) {
            log.error("Categoria già presente: {}", e.getMessage());
            return null;
        }
    }

    @Override
    public List<Categoria> getLista() {
        return repCategoria.findAll();
    }

    @Override
    public Page<Categoria> getLista(Pageable p) {
        return repCategoria.findAll(p);
    }

    @Override
    public List<Categoria> removeCat(Long id) {
        repCategoria.deleteById(id);
        return getLista();
    }

    @Override
    public List<Categoria> findCat(RicercaDto ricerca) {
        List<Categoria> c = repCategoria.findByDescrizioneLike("%" + ricerca.getRicerca() + "%");
        return c;
    }

    @Override
    public List<Categoria> updateCat(Categoria categoria) {
        try {
            repCategoria.save(categoria);
        } catch (Exception e) {
            log.error("Categoria già presente; {}", e.getMessage());
        }
        return getLista();
    }

    @Override
    public Page<Categoria> findCat(RicercaDto ricerca, Pageable p) {
        Page<Categoria> c = repCategoria.findByDescrizioneLike("%" + ricerca.getRicerca() + "%", p);
        return c;
    }

}
