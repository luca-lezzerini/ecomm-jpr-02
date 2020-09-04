/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Spedizione;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Roberto
 */
@Repository
public interface RepSpedizione extends JpaRepository<Spedizione, Long> {

    Spedizione findByCodice(String codice);

    List<Spedizione> findByCodiceLike(String codice);

//    @Query(value = "SELECT * FROM spedizione s WHERE s.codice like :codice or s.nome like :nome",
//            nativeQuery = true)
//    List<Spedizione> findByCodiceLikeOrNomeLike(
//            @Param("codice") String codice,
//            @Param("nome") String nome
//    );
    List<Spedizione> findByCodiceLikeOrNomeLike(String codice, String nome);

    @Query("SELECT s FROM Spedizione s WHERE s.codice like :codice or s.nome like :nome")
    List<Spedizione> ricercaPerChiaveParziale(
            @Param("codice") String codice,
            @Param("nome") String nome
    );
}
