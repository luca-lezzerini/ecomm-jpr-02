package com.ai.ecom02.repository;

import com.ai.ecom02.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

@Repository
public interface RepProdotto extends JpaRepository<Prodotto, Long> {

    Prodotto findByDescrizione(String descrizione);

    List<Prodotto> findByDescrizioneLike(String descrizione);

    Prodotto findByCodice(String codice);

    List<Prodotto> findByCodiceLike(String codice);

    List<Prodotto> findByPrezzoLike(String prezzo);

    @Query("SELECT p FROM Prodotto p WHERE codice LIKE :str OR descrizione LIKE :str ")
    List<Prodotto> trovaPerChiaveParziale(@Param("str") String str);

}
