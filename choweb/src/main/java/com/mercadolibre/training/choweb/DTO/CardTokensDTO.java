package com.mercadolibre.training.choweb.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class CardTokensDTO {
    @JsonProperty("id")
    private String id;
    @JsonProperty("first_six_digits")
    private String firstSixDigits;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstSixDigits() {
        return firstSixDigits;
    }

    public void setFirstSixDigits(String firstSixDigits) {
        this.firstSixDigits = firstSixDigits;
    }
}
