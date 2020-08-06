/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.model.Offerta;
import com.ai.ecom02.repository.RepOfferta;
import com.ai.ecom02.service.OffertaServiceCrud;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Narga
 */
@Service
public class OffertaServiceImpl implements OffertaServiceCrud {
    @Autowired 
    RepOfferta repOfferta ;                                         // stiamo dicendo di autoinstanziare questa casse con tipo+ nome 

    @Override
    public Offerta add(Offerta offerta) {
       return  repOfferta.save(offerta);
        
    }

    @Override
    public void delete(Offerta offerta) {
       
        repOfferta.delete(offerta);
    }

    @Override
    public Offerta update(Offerta offerta) {
       return repOfferta.save(offerta);
    }

    @Override
    public List<Offerta> getAll() {
       return repOfferta.findAll();
    }

    @Override
    public Offerta findById(Offerta offerta) {
        
//       Optional<Offerta> o = repOfferta.findById(offerta.getId());
//       Offerta off= o.get();

        return repOfferta.getOne(offerta.getId());                      // restituisce oggetto 
    }

    @Override
    public Offerta findByCodice(Offerta offerta) {
       return repOfferta.findByCodice(offerta.getCodice());
    }

    @Override
    public List<Offerta> findByCodiceLike(Offerta offerta) {
       return repOfferta.findByCodiceLike(offerta.getCodice());
    }

    @Override
    public Offerta findByDescrizione(Offerta offerta) { 
       return repOfferta.findByDescrizione(offerta.getDescrizione());
    }

    @Override
    public List<Offerta> findByDescrizioneLike(Offerta offerta) {
        
        return repOfferta.findByDescrizioneLike(offerta);
    }
    
    
    
    
}
