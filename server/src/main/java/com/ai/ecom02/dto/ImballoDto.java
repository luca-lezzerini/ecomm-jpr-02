package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;

/**
 *
 * @author Francesco
 */

public class ImballoDto {

    Imballo imballoDto;

    public ImballoDto(Imballo imballoDto) {
        this.imballoDto = imballoDto;
    }

    public ImballoDto() {
    }

    public Imballo getImballoDto() {
        return imballoDto;
    }

    public void setImballoDto(Imballo imballoDto) {
        this.imballoDto = imballoDto;
    }

}

