/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Taglia;
import com.ai.ecom02.repository.RepTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ai.ecom02.service.TagliaService;

/**
 *
 * @author Francesco
 */
@Service
public class TagliaServiceImpl implements TagliaService {

    @Autowired
    RepTaglia repTaglia;

    @Override
    public Taglia add(Taglia t) {
        return repTaglia.save(t);
    }

    @Override
    public void delete(Taglia t) {
        repTaglia.delete(t);
    }

    @Override
    public List<Taglia> getAll() {
        return repTaglia.findAll();
    }

    @Override
    public Taglia findById(Taglia t) {
        Taglia z = repTaglia.getOne(t.getId());
        return z;
    }

    @Override
    public Taglia update(Taglia taglia) {
        return repTaglia.save(taglia);
    }

    public List<Taglia> findByDescrizione(Taglia taglia) {
        return repTaglia.findByDescrizioneLike(taglia.getDescrizione());
    }

    public List<Taglia> findBySigla(Taglia taglia) {
        return repTaglia.findBySiglaLike(taglia.getSigla());
    }

    public List<Taglia> findByDescrizioneLikeOrSiglaLike(String ricerca, String ricerca0) {
        return repTaglia.findByDescrizioneLikeOrSiglaLike("%" + ricerca + "%", "%" + ricerca0 + "%");
    }
    public List<Taglia> findByDescrizioneOrSigla(String ricerca, String ricerca0) {
        return repTaglia.trovaPerChiaveParziale("%" + ricerca + "%", "%" + ricerca0 + "%");
    }
}
