/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;

import com.ai.ecom02.model.Categoria;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Roberto
 */
@Repository
public interface RepCategoria extends JpaRepository<Categoria, Long> {

    @Query("SELECT c FROM Categoria c WHERE c.descrizione = :descrizione")
    Categoria findByDescrizione(
            @Param("descrizione") String descrizione
    );

    List<Categoria> findByDescrizioneLike(String descrizione);

    Page<Categoria> findByDescrizioneLike(String descrizione, Pageable p);

}
