package com.ai.ecom02.controller;


import com.ai.ecom02.dto.RicercaDto;
import com.ai.ecom02.model.Prodotto;
import com.ai.ecom02.service.impl.ProdottoServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ProdottoController {

    @Autowired
    ProdottoServiceImpl srvProdotto;

    @RequestMapping(value = ("/lista-prodotti"))
    @ResponseBody
    public List<Prodotto> listaProdotti() {
        return srvProdotto.getAll();
    }

    @RequestMapping(value = ("/prodotti-add"))
    @ResponseBody
    public void addProdotto(
            @RequestBody Prodotto prodotto
    ) {
        srvProdotto.add(prodotto);
    }

    @RequestMapping(value = ("/prodotti-delete"))
    @ResponseBody
    public void deleteProdotto(
            @RequestBody Prodotto prodotto
    ) {
        srvProdotto.delete(prodotto);
    }

    @RequestMapping(value = ("/prodotti-update"))
    @ResponseBody
    public void updateProdotto(
            @RequestBody Prodotto prodotto
    ) {
        srvProdotto.update(prodotto);
    }

    @RequestMapping(value = ("/prodotti-find"))
    @ResponseBody
    public List<Prodotto> findProdottiByCodice(
            @RequestBody RicercaDto ricerca
    ) {
        return srvProdotto.findByDescrizioneOrCodiceLike(ricerca);
    }

}
