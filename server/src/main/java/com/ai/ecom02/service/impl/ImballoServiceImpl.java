package com.ai.ecom02.service.impl;

import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Imballo;
import com.ai.ecom02.repository.RepImballo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ai.ecom02.service.ImballoService;

/**
 *
 * @author Francesco
 */

@Service
public class ImballoServiceImpl implements ImballoService {

    @Autowired
    RepImballo repImballo;

    @Override
    public Imballo add(Imballo o) {
        return repImballo.save(o);
    }

    @Override
    public void delete(Imballo o) {
        repImballo.delete(o);
    }

    @Override
    public List<Imballo> getAll() {
        return repImballo.findAll();
    }

    @Override
    public Imballo findById(Imballo o) {
        Imballo i = repImballo.getOne(o.getId());
        return i;
    }

    @Override
    public Imballo update(Imballo imballo) {
        return repImballo.save(imballo);
    }

    public List<Imballo> findByDescrizione(RicercaDto ricerca) {
        return repImballo.findByDescrizione("%" + ricerca.getRicerca() + "%");
    }

}
