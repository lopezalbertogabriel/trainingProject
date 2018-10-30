package com.mercadolibre.training.choweb.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CreatePreferenceDTO {

    @JsonProperty("items")
    private ItemDTO[] items;

    @JsonProperty("payerEmail")
    private String payerEmail;

    @JsonProperty("clientId")
    private String clientid;

    @JsonProperty("clientSecret")
    private String clientSecret;

    public String getClientid() {
        return clientid;
    }

    public void setClientid(String clientid) {
        this.clientid = clientid;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public ItemDTO[] getItems() {
        return items;
    }

    public void setItems(ItemDTO[] items) {
        this.items = items;
    }

    public String getPayerEmail() {
        return payerEmail;
    }

    public void setPayerEmail(String payerEmail) {
        this.payerEmail = payerEmail;
    }
}
