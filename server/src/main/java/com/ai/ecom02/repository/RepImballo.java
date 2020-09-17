package com.ai.ecom02.repository;

import com.ai.ecom02.model.Imballo;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Francesco
 */
@Repository
public interface RepImballo extends JpaRepository<Imballo, Long> {

    List<Imballo> findByDescrizioneLike(String descrizione);

    Page<Imballo> findByDescrizioneLike(String descrizione, Pageable p);

    List<Imballo> findByDescrizioneLikeOrCostoLike(String ricerca, String ricerca0);

//    @Query("SELECT i FROM Imballo i WHERE descrizione LIKE :str")
//    List<Imballo> findByDescrizione(@Param("str") String str);
     
    @Query("SELECT i FROM Imballo i WHERE descrizione LIKE :str")
    Imballo findByDescrizione(@Param("str") String str);

}
