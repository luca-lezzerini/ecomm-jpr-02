/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Offerta;
import java.util.List;

/**
 *
 * @author Narga
 */
public interface OffertaService {                                 // Sto dichiarando i metodi che poi utilizzeremo nel Service 

    Offerta add(Offerta offerta);

    void delete(Offerta offerta);

    Offerta update(Offerta offerta);

    List<Offerta> getAll();

    Offerta findById(Offerta offerta);

    Offerta findByCodice(Offerta offerta);

    List<Offerta> findByCodiceLike(Offerta offerta);

    Offerta findByDescrizione(Offerta offerta);

    List<Offerta> findByDescrizioneLike(Offerta offerta);
    
    List<Offerta> findByDescrizioneOrCodiceLike(RicercaDto ricerca);
}
