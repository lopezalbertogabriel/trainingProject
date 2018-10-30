package com.mercadolibre.training.choweb.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mercadolibre.training.choweb.controller.dto.CreatePreference;
import com.mercadolibre.training.choweb.controller.dto.CreditCardType;
import com.mercadolibre.training.choweb.controller.dto.Installments;
import com.mercadolibre.training.choweb.service.Service;
import com.mercadopago.exceptions.MPException;
import spark.Spark;

import java.io.IOException;

import static spark.Spark.after;

public enum Controller {
    INSTANCE;

    private Service service;

    public synchronized void run() throws IOException, MPException {
        service = Service.INSTANCE;
        service.initialize();
        Spark.port(8089);
        loadAfter();
        loadCreatePreference();
        loadGetCreditCardType();
        loadGetInstallments();
        loadGetIdTypes();
        loadMakePayment();
        loadGetAmountByPreferenceId();
        tokenizeCheckoutV2();
        checkoutV2();
    }

    private void loadAfter() {
        after((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "POST");
            response.header("Access-Control-Allow-Methods", "GET");
        });
    }

    private void loadGetAmountByPreferenceId(){
        Spark.get("/getAmountFromPreferenceId", (request, response) -> {
            String preferenceId = request.queryParams("preference_id");
            String amount = service.getAmountFromPreferenceId(preferenceId);
            return amount;
        });
    }

    private void loadGetCreditCardType() {
        Spark.get("/creditCardType/:number", (request, response) -> {
            String number = request.params("number");
            CreditCardType resp = service.getCreditDardType(number);
            return new ObjectMapper().writeValueAsString(resp);
        });
    }

    private void loadCreatePreference() {
        Spark.post("/createPreference", (req, res) -> {
            res.status(200);
            CreatePreference preference = service.createPreference(req.body());
            return new ObjectMapper().writeValueAsString(preference);
        });
    }

    private void loadGetInstallments() {
        Spark.get("/installments", (request, response) -> {
            String cardToken = request.queryParams("card_token");
            String payAmount = request.queryParams("payment_amount");
            Installments installments = service.getInstallments(cardToken, payAmount);
            return new ObjectMapper().writeValueAsString(installments);
        });
    }

    private void loadGetIdTypes() {
        Spark.get("/getIdTypes", (request, response) -> {
            String resp = service.getIdTypes();
            return resp;
        });

    }

    private void loadMakePayment() {
        Spark.post("/makePayment", (request, response) -> {
            System.out.println(request.body());
            String installments = request.queryParams("installments");
            String amount = request.queryParams("amount");
            String token = request.queryParams("card_token");
            String paymentId = service.makePayment(installments, amount, token);
            return paymentId;
        });
    }

    private void tokenizeCheckoutV2(){
        Spark.post("/tokenize_checkout_v2", (request, response) -> {
            String preference_id = request.queryParams("preference_id");
            String token = request.queryParams("token");
            String issuerId = request.queryParams("issuer_id");
            String installments = request.queryParams("installments");
            String paymentMethod = request.queryParams("payment_method_id");
            System.out.println(token + " " +
                    issuerId + " " +
                    installments + " " +
                    paymentMethod + " " +
                    preference_id);
            String paymentId = service.makePaymentFromTokenizeCheckout(preference_id, token, installments);
            return "Pago realizado!. Id: " + paymentId;
        });
    }

    private void checkoutV2(){
        Spark.post("/checkout_v2", (request, response) -> {
            return request.body();
        });
    }


}
