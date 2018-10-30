package com.mercadolibre.training.choweb.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemDTO {
    @JsonProperty("title")
    private String title;
    @JsonProperty("amount")
    private Integer amount;
    @JsonProperty("pictureUrl")
    private String pictureUrl;
    @JsonProperty("price")
    private Float price;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}
