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

function getInitPoint() {
  return qs("init_point");
}

function modal_onreturn(json) {
  var x = readJsonOnReturn(json);
  setAlertMessage(x);
  setTimeout(function(){setAlertMessage("")}, 5000);
}

function setAlertMessage(v){
  document.getElementById("alertMessage").innerHTML = v;
}

function readJsonOnReturn(json){
  if (json.collection_status == 'approved') {
    return 'Pago acreditado';
  } else if (json.collection_status == 'pending') {
    return 'El usuario no completó el pago';
  } else if (json.collection_status == 'in_process') {
    return 'El pago está siendo revisado';
  } else if (json.collection_status == 'rejected') {
    return 'El pago fué rechazado, el usuario puede intentar nuevamente el pago';
  } else if (json.collection_status == null) {
    return 'El usuario no completó el proceso de pago, no se ha generado ningún pago';
  }
  return
}

(function () {
  function $MPC_load() {
    window.$MPC_loaded !== true && (function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://secure.mlstatic.com/mptools/render.js";
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      window.$MPC_loaded = true;
    })();
  }
  window.$MPC_loaded !== true ? (window.attachEvent ? window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;
})();
