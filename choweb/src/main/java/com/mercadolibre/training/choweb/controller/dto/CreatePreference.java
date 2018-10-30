package com.mercadolibre.training.choweb.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CreatePreference {
    @JsonProperty("initPoint")
    private String initPoint;
    @JsonProperty("preference_id")
    private String preferenceId;

    public String getInitPoint() {
        return initPoint;
    }

    public void setInitPoint(String initPoint) {
        this.initPoint = initPoint;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    @Override
    public String toString() {
        return "CreatePreference{" +
                "initPoint='" + initPoint + '\'' +
                ", preferenceId='" + preferenceId + '\'' +
                '}';
    }
}
