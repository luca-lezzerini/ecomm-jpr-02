/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;


import com.ai.ecom02.model.Offerta;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Narga
 */
@Repository                                                                 // equivalente del Dao: serve per comunicare con il database       
public interface RepOfferta extends JpaRepository<Offerta, Long> {       // vuole il tipo dell entita e il tipo della chiave primaria

    public Offerta findByCodice(String codice);

    public List<Offerta> findByCodiceLike(String codice);

    public Offerta FindByDescrizione(String descrizione);

    public List<Offerta> FindByDescrizioneLike(Offerta offerta);
    
}
