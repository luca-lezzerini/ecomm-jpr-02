package com.ai.ecom02.dto;

import com.ai.ecom02.model.Taglia;

/**
 *
 * @author Francesco
 */

public class TagliaDto extends Taglia {

    private TagliaDto tagliaDto;

    public TagliaDto() {
    }

    public TagliaDto(TagliaDto tagliaDto) {
        this.tagliaDto = tagliaDto;
    }

    public TagliaDto getTagliaDto() {
        return tagliaDto;
    }

    public void setTagliaDto(TagliaDto tagliaDto) {
        this.tagliaDto = tagliaDto;
    }

}
