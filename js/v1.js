var token = "";
var installments;
var installmentsMessages;
var issuerName;
var public_key = "TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd";

var currentTab = 0;

var selectedInstallments;
var amount;


function showTab(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 0) {
        $(".BUTTON_AGF").text("Tokenizar");
        getIdTypes();
    } else {
        $(".BUTTON_AGF").text("CHECKOUT");
    }
    x[n].style.display = "block";
}

function getIdTypes() {
    var url = "http://localhost:8089/getIdTypes"
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data, status, jqXHR) {
            var selector = $("#id_selector");
            var types = (JSON.parse(jqXHR.responseText));
            $.each(types, function (id, type) {
                selector.append($('<option value="' + id + '">' + type + '</option>'))
            });
        }
    });
}

function hideTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "none";
}

function tokenize() {
        var url = "https://api.mercadopago.com/v1/card_tokens"
        var params = "?" +
            "public_key=" + public_key;

        var obj = {
            card_number: $("#card_number :input").val(),
            security_code: $("#cvv :input").val(),
            expiration_month: $("#month").val(),
            expiration_year: 20 + $("#year").val(),
            cardholder: {
                name:"APRO",
                identification: {
                    number: $("#idNumber :input").val(),
                    type: $("#id_selector option:selected").val()
                }
            }
        };

        console.log(obj);

        $.ajax({
            type: "POST",
            url: url + params,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function (data, status, jqXHR) {
                token = JSON.parse(jqXHR.responseText).id;
                getInstallments();
            }
        });
}

function getInstallments() {
    alert("token when calling installments is = [" + token + "]");
    amount = $("#amount :input").val();
    var url = "http://localhost:8089/installments"
    var params = "?" +
        "card_token=" + token +
        "&payment_amount=" + amount;

    $.ajax({
        type: "GET",
        url: url + params,
        dataType: "json",
        success: function (data, status, jqXHR) {
            installments = JSON.parse(jqXHR.responseText).installments;
            installmentsMessages = JSON.parse(jqXHR.responseText).recommended_messages;
            issuerName = JSON.parse(jqXHR.responseText).issuer_name;
            updateInstallments();
            showTab(currentTab);
            hideTab(document.getElementsByClassName("tab").length - 1)
        },
        error: function (jqXHR, status) {
            console.log(jqXHR);
            alert('fail' + status.code);
            return;
        }
    });
}


function next() {
    var x = document.getElementsByClassName("tab")
    showTab(x.length - 1);
    if (currentTab === 0) {
        $("#loading_text").text("POR FAVOR ESPERA...");
        tokenize();
    } else if (currentTab === 1) {
        $("#loading_text").text("REALIZANDO PAGO, POR FAVOR ESPERA...");
        var index = $("#intallments_selector option:selected").val();
        selectedInstallments = installments[index];
        makePayment();
    }

    x[currentTab].style.display = "none";
    currentTab = currentTab + 1;
}

function updateInstallments() {
    var cuotas = $("#cuotas");
    var selector = $("#intallments_selector");
    $("#issuerName").append(issuerName);
    $.each(installmentsMessages, function (index, msj) {
        cuotas.append($('<p>' + msj + '</p>'));
        selector.append($('<option value="' + index + '">' + msj + '</option>'))
    });
}

function makePayment() {
    var url = "http://localhost:8089/makePayment"
    var params = "?" +
        "installments=" + selectedInstallments +
        "&amount=" + amount +
        "&card_token=" + token;

    $.ajax({
        type: "POST",
        url: url + params,
        crossDomain: true,
        dataType: "text",
        success: function (data, status, jqXHR) {
            hideTab(document.getElementsByClassName("tab").length - 1)
            alert("Pago confirmado!!");
        },
        error: function (data, status, jqXHR) {
            hideTab(document.getElementsByClassName("tab").length - 1)
            alert("Pago rechazado :( \nStatus: " + status);
        }
    });
}
