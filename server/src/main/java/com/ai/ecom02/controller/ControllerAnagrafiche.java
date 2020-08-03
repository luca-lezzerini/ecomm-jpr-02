package com.ai.ecom02.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

    @CrossOrigin("*")
    @RestController
    public class ControllerAnagrafiche {

<<<<<<< HEAD

=======
        @Autowired
        ServiceColore srvColore;
>>>>>>> c975d4a6b70a49faecaf9da0d6c5021201fe3b04
        @RequestMapping(value = ("/Colori"))
        @ResponseBody
        public List<Colore> colori() {
            return srvColore.listaColori();
        }

    }
