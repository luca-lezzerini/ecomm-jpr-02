/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Categoria;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author Roberto
 */

public interface CategoriaService {

    Categoria addCat(Categoria categoria);

    List<Categoria> getLista();
    
    Page<Categoria> getLista(Pageable p);

    List<Categoria> removeCat(Long id);

    List<Categoria> findCat(RicercaDto ricerca);
    
    List<Categoria> updateCat(Categoria categoria);
}
