package com.ai.ecom02.repository;

import com.ai.ecom02.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

@Repository
public interface RepProdotto extends JpaRepository<Prodotto, Long> {

    Prodotto findByDescrizione(String descrizione);

    List<Prodotto> findByDescrizioneLike(String descrizione);

    Prodotto findByCodice(String codice);

    List<Prodotto> findByCodiceLike(String codice);

    List<Prodotto> findByPrezzoLike(String prezzo);

   /* @Query("select p.id, p.codice, p.descrizione, p.peso ,p.prezzo from Prodotto as p where p.descrizione like ?1 or p.codice Like ?1")
    quando viene chiamata da un erore di conversione
    java.lang.Long  con spring qualcolsa model.Prodotto: come se restituisce dei long. lascio per aprofondire la questione e imparare HQL che
    in questo caso forse non è proprio corretto. Un primo tenteativo su colori a funzionato ma ho perso le tracce
    */
  //  public List<Prodotto> findByCodiceLikeOrDescrizioneLike( String s);

   

}
