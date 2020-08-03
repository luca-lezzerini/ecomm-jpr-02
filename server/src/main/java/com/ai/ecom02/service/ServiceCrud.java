package com.ai.ecom02.service;

import com.ai.ecom02.model.Colore;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;
public interface ServiceCrud<T> {

    public void add(T o);

    public void delete(T o);

    public void update(T o);

    public List<T> getAll();
    
    public T findById(T o);
    
}
