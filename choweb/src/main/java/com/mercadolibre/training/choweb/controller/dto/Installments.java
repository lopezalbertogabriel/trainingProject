package com.mercadolibre.training.choweb.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Installments {
    @JsonProperty("installments")
    private List<String> installments;
    @JsonProperty("recommended_messages")
    private List<String> recommendedMessages;
    @JsonProperty("issuer_name")
    private String issuerName;

    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    public List<String> getInstallments() {
        return installments;
    }

    public void setInstallments(List<String> installments) {
        this.installments = installments;
    }

    public List<String> getRecommendedMessages() {
        return recommendedMessages;
    }

    public void setRecommendedMessages(List<String> recommendedMessages) {
        this.recommendedMessages = recommendedMessages;
    }
}
