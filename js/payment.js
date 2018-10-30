var preferenceId = qs("preference_id");
$(document).ready(function () {
    //onDocumentLoad();
    buildCheckoutForm()
})

function onDocumentLoad(){
    getAmountFromPreferenceId(preferenceId);
    document.getElementById("tokenizeForm")
        .setAttribute('action', "http://localhost:8089/tokenize_checkout_v2?preference_id=" + preferenceId);
}

function buildTokenizeForm(amount){
    var s = document.createElement('script');
    s.setAttribute('src', "https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js");
    s.setAttribute('data-public-key', "TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd");
    s.setAttribute('data-transaction-amount', amount);
    document.getElementById("tokenizeForm").appendChild(s);

    return '<!--script\n' +
        '                    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"\n' +
        '                    data-public-key="TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd"\n' +
        '                    data-transaction-amount="' + amount + '">\n' +
        '            </script-->'
}

function buildCheckoutForm(){
    var s = document.createElement('script');
    s.setAttribute('src', "https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js");
    s.setAttribute('data-preference-id', preferenceId);
    document.getElementById("checkoutForm").appendChild(s);

    return '<script id="process_preference"\n' +
        '                    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"\n' +
        '                    data-preference-id="' + preferenceId + '">\n' +
        '            </script>'
}

function getAmountFromPreferenceId(preference_id) {
    var url = "http://localhost:8089/getAmountFromPreferenceId"
    var param = "?preference_id=" + preference_id;
    $.ajax({
        type: "GET",
        url: url + param,
        dataType: "text",
        success: function (data, status, jqXHR) {
            buildTokenizeForm(data);
        }
    });
}

function qs(search_for) {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i = 0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0 && search_for == parms[i].substring(0, pos)) {
            return parms[i].substring(pos + 1);
            ;
        }
    }
    return "";
}