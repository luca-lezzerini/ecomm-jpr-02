/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;

import com.ai.ecom02.model.Spedizione;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Roberto
 */
public interface RepSpedizione extends JpaRepository<Spedizione, Long> {

    Spedizione findByCodice(String codice);

    List<Spedizione> findByCodiceLike(String codice);
}
