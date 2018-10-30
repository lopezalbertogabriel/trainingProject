package com.mercadolibre.training.choweb.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class InstallmentsDTO {
    private String issuerName;
    private String issuerId;

    @JsonProperty("payer_costs")
    private List<PayerCostsDTO> payerCosts;

    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    public String getIssuerId() {
        return issuerId;
    }

    public void setIssuerId(String issuerId) {
        this.issuerId = issuerId;
    }

    public List<PayerCostsDTO> getPayerCosts() {
        return payerCosts;
    }

    public void setPayerCosts(List<PayerCostsDTO> payerCosts) {
        this.payerCosts = payerCosts;
    }

    @JsonProperty("issuer")
    private void unpackPropertiesFromNestedObject(Map<String, String> issuer) {
        issuerName = issuer.get("name");
        issuerId = issuer.get("id");
    }
}
