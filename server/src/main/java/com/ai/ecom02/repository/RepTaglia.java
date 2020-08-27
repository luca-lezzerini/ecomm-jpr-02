/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;

import com.ai.ecom02.model.Taglia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Francesco
 */
@Repository
public interface RepTaglia extends JpaRepository<Taglia, Long> {

    List<Taglia> findBySiglaLike(String sigla);

    List<Taglia> findByDescrizioneLike(String descrizione);

    List<Taglia> findByDescrizioneLikeOrSiglaLike(String ricerca, String ricerca0);

//    @Query("SELECT t FROM taglia t WHERE descrizione LIKE :str OR sigla LIKE :str")
//    List<Taglia> trovaPerChiaveParziale(@Param("str1") String str1);
}
