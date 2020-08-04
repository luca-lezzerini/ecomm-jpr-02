package com.ai.ecom02.dto;

import com.ai.ecom02.model.Imballo;

/**
 *
 * @author Francesco
 */
public class ImballoDto extends Imballo {

    private ImballoDto imballoDto;

    public ImballoDto() {
    }

    public ImballoDto(ImballoDto imballoDto) {
        this.imballoDto = imballoDto;
    }

    public ImballoDto getImballoDto() {
        return imballoDto;
    }

    public void setImballoDto(ImballoDto imballoDto) {
        this.imballoDto = imballoDto;
    }

}
