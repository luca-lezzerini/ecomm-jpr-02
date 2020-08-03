/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ai.ecom02.service.impl;

import com.ai.ecom02.repository.RepColore;
import com.ai.ecom02.service.ServiceCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Gian Marco
 */
public class ServiceColore implements ServiceCrud<Colore>{
    @Autowired
    RepColore repColore;
    
    public void add(){
        repColore.save(Colore colore);
    }
   public void delete(){
       repColore.delete(Colore colore);
   }
   public void update(){
        repColore.save(Colore colore);
   }
    @Override
   public List<Colore> getAll(){
       return repColore.findAll();
   }
           
           }
