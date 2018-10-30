package com.mercadolibre.training.choweb.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Bin {
    @JsonProperty("pattern")
    private String pattern;
    @JsonProperty("exclusion_pattern")
    private String exclusion_pattern;

    public String getPattern() {
        return pattern;
    }

    public void setPattern(String pattern) {
        this.pattern = pattern;
    }

    public String getExclusion_pattern() {
        return exclusion_pattern;
    }

    public void setExclusion_pattern(String exclusion_pattern) {
        this.exclusion_pattern = exclusion_pattern;
    }
}
