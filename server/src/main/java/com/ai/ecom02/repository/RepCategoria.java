/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.repository;

import com.ai.ecom02.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Roberto
 */
@Repository
public interface RepCategoria extends JpaRepository<Categoria, Long> {

    Categoria findByDescrizioneLike(String descrizione);
}
