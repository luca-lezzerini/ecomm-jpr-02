/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Spedizione;
import com.ai.ecom02.repository.RepSpedizione;
import com.ai.ecom02.service.SpedizioneService;
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
public class SpedizioneServiceImpl implements SpedizioneService {

    private static Logger log = LoggerFactory.getLogger(SpedizioneServiceImpl.class);

    @Autowired
    RepSpedizione repSpedizione;

    @Override
    public void addSped(Spedizione spedizione) {

        try {
            repSpedizione.save(spedizione);
        } catch (Exception ex) {
            log.error("Spedizione già presente {}", ex.getMessage());

        }
    }

    @Override
    public List<Spedizione> getLista() {
        return repSpedizione.findAll();
    }

    @Override
    public Page<Spedizione> getLista(Pageable p) {
        return repSpedizione.findAll(p);
    }

    @Override
    public Page<Spedizione> findSped(String ricerca, Pageable p) {
        return repSpedizione.findByCodiceLikeOrNomeLike("%" + ricerca + "%", "%" + ricerca + "%", p);
    }
    
    @Override
    public List<Spedizione> removeSped(Long id) {
        repSpedizione.deleteById(id);
        return getLista();
    }

    @Override
    public List<Spedizione> findSped(String ricerca) {
        return repSpedizione.findByCodiceLikeOrNomeLike("%" + ricerca + "%", "%" + ricerca + "%");
    }

    @Override
    public List<Spedizione> updateSped(Spedizione spedizione) {

        try {
            repSpedizione.save(spedizione);
        } catch (Exception e) {
            log.error("Spedizione già presente {}", e.getMessage());
        }
        return getLista();
    }

}
