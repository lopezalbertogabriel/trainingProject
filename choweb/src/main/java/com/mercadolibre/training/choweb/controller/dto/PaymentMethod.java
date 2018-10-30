package com.mercadolibre.training.choweb.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PaymentMethod {
    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("settings")
    private List<PaymentMethodSettings> settings;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<PaymentMethodSettings> getSettings() {
        return settings;
    }

    public void setSettings(List<PaymentMethodSettings> settings) {
        this.settings = settings;
    }
}
