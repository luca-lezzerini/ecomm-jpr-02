
package com.ai.ecom02.repository;

import com.ai.ecom02.model.Prodotto;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RepProdotto extends JpaRepository<Prodotto,Long> {
    
}
