package com.mercadolibre.training.choweb.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreditCardType {
    @JsonProperty("scheme")
    private String scheme;

    public String getScheme() {
        return scheme;
    }

    public void setScheme(String scheme) {
        this.scheme = scheme;
    }
}
