package com.ai.ecom02.service;

import java.util.List;
import org.springframework.stereotype.Repository;
public interface ServiceCrud<T> {

    public void add(T o);

    public void delete(T o);

    public void update(T o);

    public List<T> getAll();

}
