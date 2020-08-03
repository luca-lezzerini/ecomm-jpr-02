package com.ai.ecom02.service;

import java.util.List;

public interface ServiceCrud<T> {

    public void add(T o);

    public void delete(T o);

    public void upDate(T o);

    public List<T> getAll();

}
