package com.ai.ecom02.repository;

import com.ai.ecom02.model.Taglia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
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

}
