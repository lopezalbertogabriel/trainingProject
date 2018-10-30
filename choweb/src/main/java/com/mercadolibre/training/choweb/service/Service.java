package com.mercadolibre.training.choweb.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mercadolibre.training.choweb.DTO.*;
import com.mercadolibre.training.choweb.HTTPExchangeHandler;
import com.mercadolibre.training.choweb.controller.dto.CreatePreference;
import com.mercadolibre.training.choweb.controller.dto.CreditCardType;
import com.mercadolibre.training.choweb.controller.dto.Installments;
import com.mercadolibre.training.choweb.controller.dto.PaymentMethod;
import com.mercadopago.MercadoPago;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Payment;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.BackUrls;
import com.mercadopago.resources.datastructures.preference.Item;
import com.mercadopago.resources.datastructures.preference.Payer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public enum Service {
    INSTANCE;

    /*//CREDENCIALES PARA PUNTOS 1, 2 Y 3
    private static String ACCESS_TOKEN = "TEST-8427081427249654-071014-f0b117a4c60d2e768183d99105acd416__LC_LB__-243966003";
    private static String PUBLIC_KEY = "TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd";
    private static String CLIENT_ID = "8427081427249654";
    private static String CLIENT_SECRET = "OfrmiT53p2u1fMQ36AJLk6aGLOtvIPSW";*/

    //CREDENCIALES PARA PUNTOS 4 y 5
    private static String PUBLIC_KEY = "APP_USR-51cc5c31-c758-433f-a218-34f629fa4d68";
    private static String ACCESS_TOKEN = "APP_USR-4996159670209732-102310-5469dcd60e3aaa789840ca68ee81b8ca-365332134";
    private static String CLIENT_ID = "4996159670209732";
    private static String CLIENT_SECRET = "YgNweVBeFcCSRklXhdkK0hpv0CuMMTgt";

    List<PaymentMethod> PAYMENT_METHODS;

    public void initialize() throws IOException, MPException {
        setUpSDKCredentials(CLIENT_ID, CLIENT_SECRET);
        initializePaymentMethods();
    }

    private void setUpSDKCredentials(String clientId, String clientSecret) throws MPException {
        MercadoPago.SDK.setClientId(clientId);
        MercadoPago.SDK.setClientSecret(clientSecret);
        MercadoPago.SDK.setAccessToken(ACCESS_TOKEN);
    }

    public CreatePreference createPreference(String req) throws MPException, IOException {
        CreatePreference response = new CreatePreference();
        ObjectMapper mapper = new ObjectMapper();
        CreatePreferenceDTO request = mapper.readValue(req, CreatePreferenceDTO.class);

        //setUpSDKCredentials(request.getClientid(), request.getClientSecret());
        Preference preference = new Preference();

        ArrayList<Item> list = new ArrayList<>();
        for (ItemDTO item : request.getItems()) {
            list.add(createItem(item));
        }

        preference.setItems(list);
        preference.setPayer(createPayer(request.getPayerEmail()));
        BackUrls backUrls = new BackUrls();
        backUrls.setFailure("http://localhost:8080/trainingProject/backUrls/backUrl.html");
        backUrls.setSuccess("http://localhost:8080/trainingProject/backUrls/backUrl.html");
        backUrls.setPending("http://localhost:8080/trainingProject/backUrls/backUrl.html");
        preference.setBackUrls(backUrls);
        preference.save();

        response.setInitPoint(preference.getInitPoint());
        response.setPreferenceId(preference.getId());

        return response;
    }

    private Item createItem(ItemDTO i) {
        Item item = new Item();
        item.setTitle(i.getTitle());
        item.setQuantity(i.getAmount());
        item.setPictureUrl(i.getPictureUrl());
        item.setUnitPrice(i.getPrice());

        return item;
    }

    private Payer createPayer(String email) {
        Payer payer = new Payer();
        payer.setEmail(email);

        return payer;

    }

    public synchronized void initializePaymentMethods() throws IOException {
        if (PAYMENT_METHODS == null) {
            String url = "https://api.mercadopago.com/v1/payment_methods?" +
                    "public_key=" + PUBLIC_KEY;
            String serviceResponse;
            serviceResponse = HTTPExchangeHandler.get(url);
            PAYMENT_METHODS = new ObjectMapper().readerFor(new TypeReference<List<PaymentMethod>>() {
            }).readValue(serviceResponse);
        }
    }

    public CreditCardType getCreditDardType(String number) {
        CreditCardType response = new CreditCardType();
        String pmName = getPaymentMethodId(number);
        response.setScheme(pmName);
        return response;
    }

    private String getPaymentMethodId(String number) {

        Function<PaymentMethod, Boolean> f = (pm) -> {
            try {
                Pattern r = Pattern.compile(pm.getSettings().get(0).getBin().getPattern());
                return r.matcher(number).find();
            } catch (Exception e) {
                return false;
            }
        };

        return PAYMENT_METHODS.stream()
                .filter(p -> f.apply(p))
                .map(p -> p.getId())
                .findAny().orElse("Faaaaaail");
    }

    public String getAmountFromPreferenceId(String prefId) throws MPException {
        Preference pref = Preference.findById(prefId);
        Double sum = pref.getItems().stream()
                .map(p -> p.getQuantity() * p.getUnitPrice())
                .mapToDouble(p -> p.doubleValue()).sum();

        return String.valueOf(sum);

    }

    public Installments getInstallments(String card_token, String payment_amount) throws IOException {
        String bin = getBinFromCardToken(card_token);
        String installemntsUrl = "https://api.mercadopago.com/v1/payment_methods/installments?" +
                "payment_method_id=" + getPaymentMethodId(bin) +
                "&amount=" + payment_amount +
                "&public_key=" + PUBLIC_KEY;

        Installments response = new Installments();

        List<InstallmentsDTO> installments = new ObjectMapper()
                .readerFor(new TypeReference<List<InstallmentsDTO>>() {
                }).readValue(HTTPExchangeHandler.get(installemntsUrl));

        List<CardIssuerDTO> issuers = getCardIssuerByBin(bin);

        InstallmentsDTO installmentsDTO = getInstallmentsByIssuer(installments, issuers);

        response.setIssuerName(installmentsDTO.getIssuerName());
        response.setInstallments(mapAndListStreamByMethod(installmentsDTO.getPayerCosts(), PayerCostsDTO::getInstallments));
        response.setRecommendedMessages(mapAndListStreamByMethod(installmentsDTO.getPayerCosts(), PayerCostsDTO::getRecommendedMessage));

        return response;
    }

    private InstallmentsDTO getInstallmentsByIssuer(List<InstallmentsDTO> installments, List<CardIssuerDTO> issuers) {
        return installments.stream()
                .filter(p -> p.getIssuerId().equalsIgnoreCase(issuers.stream().map(q -> q.getId()).findFirst().get()))
                .findFirst().get();
    }

    private List<CardIssuerDTO> getCardIssuerByBin(String bin) throws IOException {
        String cardIssuerUrl = "https://api.mercadopago.com/v1/payment_methods/card_issuers?" +
                "payment_method_id=" + getPaymentMethodId(bin) +
                "&bin=" + bin +
                "&public_key=" + PUBLIC_KEY;

        return new ObjectMapper()
                .readerFor(new TypeReference<List<CardIssuerDTO>>() {
                }).readValue(HTTPExchangeHandler.get(cardIssuerUrl));
    }

    private List<String> mapAndListStreamByMethod(List<PayerCostsDTO> list, Function<PayerCostsDTO, String> f) {
        return list.stream()
                .map(f)
                .collect(Collectors.toList());
    }


    private String getBinFromCardToken(String cardToken) throws IOException {
        String url = "https://api.mercadopago.com/v1/card_tokens/" + cardToken;
        String params = "?public_key=" + PUBLIC_KEY;
        CardTokensDTO response = new ObjectMapper()
                .readerFor(CardTokensDTO.class)
                .readValue(HTTPExchangeHandler.get(url + params));
        return response.getFirstSixDigits();
    }

    public String getIdTypes() throws IOException {
        String url = "https://api.mercadopago.com/v1/identification_types";
        String params = "?public_key=" + PUBLIC_KEY;
        // Public Key de Uruguay para prueba
        //String params = "?public_key=TEST-6d6abcc5-27ed-4e68-942f-22539893c073";

        List<IdTypesDTO> idTypes = new ObjectMapper()
                .readerFor(new TypeReference<List<IdTypesDTO>>() {
                })
                .readValue(HTTPExchangeHandler.get(url + params));

        String quote = "\"";
        String types = idTypes.stream()
                .map(p -> quote + p.getId() + quote + ":" + quote + p.getName() + quote)
                .collect(Collectors.joining(","));

        return "{" + types + "}";
    }

    public String makePayment(String installments, String amount, String card_token) throws MPException, IOException {
        MercadoPago.SDK.setAccessToken(ACCESS_TOKEN);

        Payment payment = new Payment();
        payment.setInstallments(Integer.valueOf(installments));
        payment.setPaymentMethodId(
                getPaymentMethodId(
                        getBinFromCardToken(card_token)));
        payment.setTransactionAmount(Float.valueOf(amount));
        payment.setToken(card_token);
        payment.setPayer(new com.mercadopago.resources.datastructures.payment.Payer().setEmail("titisimo@gmail.com"));
        payment.save();

        return payment.getId();
    }

    public String makePaymentFromTokenizeCheckout(String preference_id, String token, String installments) throws MPException, IOException {
        String amount = getAmountFromPreferenceId(preference_id);
        return makePayment(installments, amount, token);
    }
}
