!function () {
  !function () {
    if ("undefined" != typeof window.XMLHttpRequest.open) {
      var e = new XMLHttpRequest;
      e.open("GET", "https://api.mercadopago.com/preconnect", !0), e.send()
    }
  }(), window.mobilecheck = function () {
    var e = !1;
    return function (t) {
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
  }, String.prototype.trim || !function () {
    var e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(e, "")
    }
  }();
  var JSON = JSON || {};
  JSON.parse || !function () {
    JSON.parse = function (obj) {
      "use strict";
      return eval("(" + obj + ")")
    }
  }(), JSON.stringify || !function () {
    JSON.stringify = function (e) {
      var t = typeof e;
      if ("object" != t || null === e) return "string" == t && (e = '"' + e + '"'), String(e);
      var n, r, o = [], i = e && e.constructor == Array;
      for (n in e) r = e[n], t = typeof r, "string" == t ? r = '"' + r + '"' : "object" == t && null !== r && (r = JSON.stringify(r)), "function" !== t && o.push((i ? "" : '"' + n + '":') + String(r));
      return (i ? "[" : "{") + String(o) + (i ? "]" : "}")
    }
  }(), Array.prototype.filter || !function () {
    Array.prototype.filter = function (e) {
      "use strict";
      if (void 0 === this || null === this) throw new TypeError;
      var t = Object(this), n = t.length >>> 0;
      if ("function" != typeof e) throw new TypeError;
      for (var r = [], o = arguments.length >= 2 ? arguments[1] : void 0, i = 0; n > i; i++) if (i in t) {
        var a = t[i];
        e.call(o, a, i, t) && r.push(a)
      }
      return r
    }
  }(), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
    "use strict";
    var n, r;
    if (null == this) throw new TypeError("this is null or not defined");
    var o, i = Object(this), a = i.length >>> 0;
    if ("[object Function]" !== {}.toString.call(e)) throw new TypeError(e + " is not a function");
    for (arguments.length >= 2 && (n = t), r = 0; a > r;) r in i && (o = i[r], e.call(n, o, r, i)), r++
  }), document.querySelectorAll || !function () {
    document.querySelectorAll = function (e) {
      var t, n = document.createElement("style"), r = [];
      for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) t = document._qsa.shift(), t.style.removeAttribute("x-qsa"), r.push(t);
      return document._qsa = null, r
    }
  }(), document.querySelector || !function () {
    document.querySelector = function (e) {
      var t = document.querySelectorAll(e);
      return t.length ? t[0] : null
    }
  }()
}(), function () {
  var e = {version: "1.6.15", initialized: !1, key: null, deviceProfileId: null, tokenId: null, sessionId: null},
    t = {utils: {}, card: {}, request: {}, trackErrors: {}, paymentMethods: {}};
  e.referer = function () {
    var e = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    return e
  }(), e.setPublishableKey = function (t) {
    e.key = t, e.initMercadopago()
  }, function (e) {
    "use strict";
    var t = {baseUrl: "https://api.mercadopago.com/v1"};
    t.clear = function (e) {
      return ("" + e).trim().replace(/\s+|-/g, "")
    }, t.paramsForm = function (e) {
      var t = {}, n = e.querySelectorAll("[data-checkout]");
      return Array.prototype.forEach.call(n, function (e) {
        var n = e.getAttribute("data-checkout"), r = e.selectedIndex;
        t[n] = "SELECT" === e.nodeName && null !== r && -1 !== r ? e.options[r].value : e.value
      }), t
    }, t.isEmpty = function (e) {
      var t = Object.prototype.hasOwnProperty;
      if (null == e) return !0;
      if (e.length > 0) return !1;
      if (0 === e.length) return !0;
      for (var n in e) if (t.call(e, n)) return !1;
      return !0
    }, e.utils = t
  }(t), function (e, t) {
    function n(e) {
      return (new Date).getTime() - e
    }

    function r(r) {
      function o() {
        var t, s = a ? new XDomainRequest : new XMLHttpRequest, u = (new Date).getTime();
        return s.open(r.method, r.url, !0), s.timeout = r.timeout || 1e3, window.XDomainRequest ? (s.onload = function () {
          t = JSON.parse(s.responseText), "function" == typeof r.success && r.success("POST" === r.requestedMethod ? 201 : 200, t), "function" == typeof r.complete && r.complete("POST" === r.requestedMethod ? 201 : 200, t)
        }, s.onerror = s.ontimeout = function () {
          return c > 0 ? (i({
            type: r.id + "_retry",
            status: "UNKNOWN",
            method: r.requestedMethod,
            url: r.url
          }), c--, d++, setTimeout(o, 500)) : ("function" == typeof r.error && r.error(400, {
            user_agent: window.navigator.userAgent,
            error: "bad_request",
            cause: []
          }), void("function" == typeof r.complete && r.complete(400, {
            user_agent: window.navigator.userAgent,
            error: "bad_request",
            cause: []
          })))
        }, s.onprogress = function () {
        }) : (s.setRequestHeader("Accept", "application/json"), -1 !== r.url.indexOf("https://api.mercadopago.com/v1/card_tokens") && (window.mobilecheck() ? s.setRequestHeader("X-Product-Id", "BCLQ07IBVKH001FP9VCG") : s.setRequestHeader("X-Product-Id", "BCHJ1GABVKH001FP9V4G")), r.contentType ? s.setRequestHeader("Content-Type", r.contentType) : s.setRequestHeader("Content-Type", "application/json"), s.onreadystatechange = function () {
          if (4 === this.readyState) {
            var a = "undefined" != typeof performance ? performance.timing : null, s = null, l = null;
            null != a && (s = a ? a.domainLookupEnd - a.domainLookupStart : null, l = a.secureConnectionStart > 0 ? a.connectEnd - a.secureConnectionStart : null);
            var p = 0 == d ? r.id : r.id + "_retry";
            if (this.status >= 200 && this.status < 400) t = JSON.parse(this.responseText), "cardForm" == r.id && i({
              type: 0 == d ? "cardForm_success" : "cardForm_retry_success",
              status: this.status,
              method: r.requestedMethod,
              url: r.url,
              token_id: t.id,
              data: this.responseText,
              retryCount: d,
              request_time_ms: n(u),
              request_time_dns_ms: s,
              request_time_ssl_ms: l
            }), "function" == typeof r.success && r.success(this.status, t), "function" == typeof r.complete && r.complete(this.status, t); else if (this.status >= 400 && this.status < 500) t = JSON.parse(this.responseText), "function" == typeof r.error && r.error(this.status, t), "function" == typeof r.complete && r.complete(this.status, t); else if (this.status >= 500) {
              if (c > 0) return i({
                type: p,
                status: this.status,
                method: r.requestedMethod,
                url: r.url,
                retryCount: d,
                token_id: e.tokenId,
                request_time_ms: n(u),
                request_time_dns_ms: s,
                request_time_ssl_ms: l
              }), c--, d++, setTimeout(o, 500);
              t = JSON.parse(this.responseText), "function" == typeof r.error && r.error(this.status, t), "function" == typeof r.complete && r.complete(this.status, t)
            } else {
              if (c > 0) return i({
                type: p,
                status: 4499,
                method: r.requestedMethod,
                url: r.url,
                token_id: e.tokenId,
                retryCount: d,
                request_time_ms: n(u),
                request_time_dns_ms: s,
                request_time_ssl_ms: l
              }), c--, d++, setTimeout(o, 500);
              "function" == typeof r.error && r.error(503, {}), "function" == typeof r.complete && r.complete(503, {})
            }
          }
        }), 0 == c && d > 0 ? (s.abort(), !1) : void("GET" === r.method || null == r.data || void 0 == r.data ? s.send() : s.send(JSON.stringify(r.data)))
      }

      var i = t.trackErrors, a = !!window.XDomainRequest, c = parseInt(r.retries, 10);
      c = isNaN(c) || 1 > c ? 2 : c, c++;
      var d = 0;
      r.url += (r.url.indexOf("?") >= 0 ? "&" : "?") + "referer=" + escape(e.referer), r.requestedMethod = r.method, a && "PUT" == r.method && (r.method = "POST", r.url += "&_method=PUT"), r.id = r.id || "ajax", o()
    }

    t.request.AJAX = r, e.AJAX = r
  }(e, t), function (e, t) {
    function n(t) {
      if (-1 !== t.type.indexOf("trackError") || -1 !== t.type.indexOf("ajax")) return !1;
      var n = JSON.parse(JSON.stringify(t)), i = {}, a = window.navigator.connection;
      if (a) for (var c in a) "function" != typeof a[c] && (i[c] = a[c]);
      n.sessionId = e.sessionId, n.connection = JSON.stringify(i), n.referer = window.location.host, n.user_agent = window.navigator.userAgent, n.working_connection = window.navigator.onLine, n.public_key = e.key, n.version = e.version;
      var d = {
        id: "trackError",
        url: "https://sdkmetrics.mercadopago.com.br",
        method: "POST",
        data: n,
        timeout: 5e3,
        retries: 1
      };
      r.AJAX(d);
      var s = o.baseUrl + "/payment_methods/track_error?public_key=" + e.key + "&js_version=" + e.version;
      r.AJAX({id: "trackError", url: s, method: "POST", data: t, timeout: 5e3, retries: 1})
    }

    var r = t.request, o = t.utils;
    t.trackErrors = n
  }(e, t), function (e, t) {
    function n(e, t) {
      function n(n) {
        if (e.bin) {
          r = [];
          for (pm in n) if (!e.payment_type_id || e.payment_type_id && e.payment_type_id == n[pm].payment_type_id) for (c in n[pm].settings) l.validateBinPattern(e.bin, n[pm].settings[c]) && (r[d++] = n[pm])
        } else e.payment_method_id && (r = n.filter(function (t) {
          return t.id == e.payment_method_id
        }));
        r && r.length > 0 && (a[s] = r), r && 0 == r.length ? (u = 400, o = {
          message: "payment method not found",
          error: "bad_request",
          status: 400,
          cause: []
        }) : o = r, "function" == typeof t ? t(u, o) : null
      }

      var r, o, i = l.getPaymentMethods(), d = 0, s = e.bin || e.payment_method_id, u = 200;
      i.length > 0 ? n(i) : l.getAllPaymentMethods(function (e, r) {
        200 === e ? n(r) : "function" == typeof t ? t(e, r) : null
      })
    }

    var r = t.utils, o = t.trackErrors, i = t.request, a = {}, d = {}, s = [], u = {}, l = {};
    l.validateBinPattern = function (e, t) {
      var n = e.slice(0, 6);
      return !(!t || !t.bin || (n.match(t.bin.pattern) ? 0 : 1) || t.bin.exclusion_pattern && n.match(t.bin.exclusion_pattern))
    }, l.setPaymentMethods = function (e) {
      s = e
    }, l.getPaymentMethods = function () {
      return s
    }, l.getPaymentMethod = function (e, t) {
      var o = e.bin || e.payment_method_id;
      return o ? (e.bin && (e.bin = r.clear(e.bin).replace(/[^0-9]/g, "").slice(0, 6)), a && a[o] ? "function" == typeof t ? t(200, a[o]) : null : n(e, t)) : "function" == typeof t ? t(400, {
        status: 400,
        error: "bad_request",
        cause: {code: "2000", description: "the payment_method_id or bin are required"}
      }, e) : null
    }, l.getAllPaymentMethods = function (t) {
      var n = r.baseUrl + "/payment_methods?public_key=" + e.key + "&js_version=" + e.version;
      document.querySelector("html").getAttribute("lang") && (n += "&locale=" + document.querySelector("html").getAttribute("lang")), i.AJAX({
        id: "getAllPaymentMethods",
        method: "GET",
        url: n,
        timeout: 1e4,
        success: function (e, n) {
          l.setPaymentMethods(n), "function" == typeof t ? t(e, n) : null
        },
        error: function (e, n) {
          o({status: e, type: "getAllPaymentMethods", data: n}), "function" == typeof t ? t(e, n) : null
        }
      })
    }, l.getInstallments = function (t, n) {
      var a = r.baseUrl + "/payment_methods/installments?public_key=" + e.key + "&js_version=" + e.version,
        c = t.bin || t.payment_method_id, s = "";
      return t.bin && (s += "&bin=" + t.bin), t.payment_method_id && (s += "&payment_method_id=" + t.payment_method_id), t.issuer_id && (s += "&issuer.id=" + t.issuer_id), t.payment_type_id && (s += "&payment_type_id=" + t.payment_type_id), t.amount && (s += "&amount=" + t.amount), t.differential_pricing_id && (s += "&differential_pricing_id=" + t.differential_pricing_id), document.querySelector("html").getAttribute("lang") && (s += "&locale=" + document.querySelector("html").getAttribute("lang")), a += s, d && d[s] ? "function" == typeof n ? n(200, d[s]) : null : void i.AJAX({
        id: "getInstallments",
        method: "GET",
        url: a,
        timeout: 1e4,
        error: function (e, r) {
          o({status: e, type: "getInstallments", data: r}), "function" == typeof n ? n(e, r, t) : null
        },
        success: function (e, r) {
          200 === e && r.length > 0 && (c && (d[c] = r), s && (d[s] = r)), "function" == typeof n ? n(e, r, t) : null
        }
      })
    }, l.getIssuers = function (t, n) {
      var a = r.baseUrl + "/payment_methods/card_issuers?public_key=" + e.key + "&js_version=" + e.version;
      return (null !== t || void 0 !== t) && (a += "&payment_method_id=" + t), u[t] ? "function" == typeof n ? n(200, u[t]) : null : void i.AJAX({
        id: "cardIssuers",
        method: "GET",
        url: a,
        timeout: 1e4,
        error: function (e, t) {
          o({status: e, type: "cardIssuers", data: t}), "function" == typeof n ? n(e, t) : null
        },
        success: function (e, r) {
          200 === e && (u[t] = r), "function" == typeof n ? n(e, r) : null
        }
      })
    }, t.paymentMethods = l;
    for (exports in l) e[exports] = l[exports]
  }(e, t), function (e, t) {
    function n() {
      var t = '{"type":"formClosed","sessionId": "' + e.sessionId + '"}';
      if ("sendBeacon" in navigator) navigator.sendBeacon("https://sdkmetrics.mercadopago.com.br?data=" + t); else {
        var n = new XMLHttpRequest;
        n.open("POST", "https://sdkmetrics.mercadopago.com.br?data=" + t, !1), n.send()
      }
    }

    function r(t) {
      function n(e, n) {
        if ("function" == typeof t) t(e, n); else if (200 == e) {
          var r = document.querySelector("select[data-checkout=docType]");
          if (r) {
            r.options.length = 0;
            for (var o = 0; o < n.length; o++) {
              var i = n[o], a = new Option(i.name, i.id);
              r.options.add(a)
            }
          }
        }
      }

      v.identificationTypes.length >= 1 ? n(200, v.identificationTypes) : y.AJAX({
        id: "getIdentificationTypes",
        method: "GET",
        timeout: 5e3,
        url: m.baseUrl + "/identification_types?public_key=" + e.key,
        success: function (e, t) {
          200 == e && (v.identificationTypes = t), n(e, t)
        },
        error: function (e, n) {
          if (404 !== e) f({status: e, type: "getIdentificationTypes", data: n}); else {
            var r = [document.querySelector("select[data-checkout=docType]"), document.querySelector("input[data-checkout=docNumber]"), document.querySelector("label[for=docType]"), document.querySelector("label[for=docNumber]")];
            for (i in r) r[i] && (r[i].style.display = "none")
          }
          "function" == typeof t ? t(e, n) : null
        }
      })
    }

    function o(e) {
      var t, n, r, o, i, a;
      for (r = !0, o = 0, n = (e + "").split("").reverse(), i = 0, a = n.length; a > i; i++) t = n[i], t = parseInt(t, 10), (r = !r) && (t *= 2), t > 9 && (t -= 9), o += t;
      return o % 10 === 0
    }

    function a(e, t, n) {
      e = m.clear(e), void 0 == n && "function" == typeof t && (n = t);
      var r = {bin: e, internal_validate: !0};
      "function" != typeof t && (r.payment_method_id = t), h.getPaymentMethod(r, function (t, r) {
        var i = !1;
        if (200 == t) for (var a = 0; a < r.length && !i; a++) {
          config = r[a].settings;
          for (var c = 0; config && c < config.length && !i; c++) i = e.length == config[c].card_number.length && h.validateBinPattern(e, config[c]) && ("none" == config[c].card_number.validation || o(e))
        }
        "function" == typeof n ? n(t, i) : null
      })
    }

    function c(e, t, n) {
      return e = m.clear(e), e && !/^\d+$/.test(e) ? "function" == typeof n ? n(200, !1) : null : void h.getPaymentMethod({
        bin: t,
        internal_validate: !0
      }, function (t, r) {
        var o = !0;
        if (200 == t) for (var i = r[0] ? r[0].settings : [], a = 0; i && a < i.length && o; a++) o = !i[a].security_code.length || e.length == i[a].security_code.length || "optional" == i[a].security_code.mode && !e.length;
        return "function" == typeof n ? n(t, o) : null
      })
    }

    function d(e, t, n) {
      var r = t.length;
      h.getPaymentMethod({bin: e.cardNumber, internal_validate: !0}, function (o, i) {
        if (200 == o) for (var a = i[0] ? i[0].additional_info_needed : [], c = 0; c < a.length; c++) switch (a[c]) {
          case"cardholder_name":
            e.cardholderName && "" !== e.cardholderName ? s(e.cardholderName) || (t[r++] = v.invalidParamsCode.cardholderName) : t[r++] = v.requiredParamsCodes.cardholderName;
            break;
          case"cardholder_identification_type":
            e.docType && "" !== e.docType ? v.identificationTypes && !v.identificationTypes.filter(function (t) {
              return t.id == e.docType
            }) && (t[r++] = v.invalidParamsCode.docType) : t[r++] = v.requiredParamsCodes.docType;
            break;
          case"cardholder_identification_number":
            e.docNumber && "" !== e.docNumber ? u(e.docType, e.docNumber) || (t[r++] = v.invalidParamsCode.docNumber) : t[r++] = v.requiredParamsCodes.docNumber
        }
        "function" == typeof n ? n(o, t) : null
      })
    }

    function s(e) {
      var t = "^[a-zA-ZÃ£ÃƒÃ¡ÃÃ Ã€Ã¢Ã‚Ã¤Ã„áº½áº¼Ã©Ã‰Ã¨ÃˆÃªÃŠÃ«Ã‹Ä©Ä¨Ã­ÃÃ¬ÃŒÃ®ÃŽÃ¯ÃÃµÃ•Ã³Ã“Ã²Ã’Ã´Ã”Ã¶Ã–Å©Å¨ÃºÃšÃ¹Ã™Ã»Ã›Ã¼ÃœÃ§Ã‡â€™Ã±Ã‘ .']*$";
      return e.match(t) ? !0 : !1
    }

    function u(e, t) {
      if (0 === v.identificationTypes.length) return !0;
      t = m.clear(t);
      var n = 0 === v.identificationTypes.length ? null : v.identificationTypes.filter(function (t) {
        return t.id == e
      })[0];
      return n = n || null, t = t || null, null !== n && null !== t && n.min_length <= t.length && t.length <= n.max_length
    }

    function l(e, t) {
      var n, r;
      if (e = ("" + e).trim(), void 0 == t) {
        if (1 == e.split("/").length) return !1;
        t = e.split("/")[1], e = e.split("/")[0]
      }
      return t = ("" + t).trim(), 2 == t.length && (t = "20" + t), /^\d+$/.test(e) && /^\d+$/.test(t) && parseInt(e, 10) <= 12 ? (r = new Date(t, e), n = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > n) : !1
    }

    function p(t, n) {
      var r, o = 0, i = [];
      if (t.cardId && "" !== t.cardId && "-1" !== t.cardId) return void n(i);
      !t.cardExpiration || t.cardExpirationMonth && t.cardExpirationYear ? t.cardExpiration = t.cardExpirationMonth + "/" + t.cardExpirationYear : (t.cardExpirationMonth = t.cardExpiration.split("/")[0], t.cardExpirationYear = t.cardExpiration.split("/")[1]), t.cardExpirationYear && 2 == t.cardExpirationYear.length && (t.cardExpirationYear = "20" + t.cardExpirationYear), t.docNumber = m.clear(t.docNumber);
      for (var s = 0; s < v.whitelistedAttrs.length; s++) r = v.whitelistedAttrs[s], ("cardNumber" == r || "securityCode" == r) && (t[r] = m.clear(t[r])), t[r] && "" !== t[r] || "cardIssuerId" === r || "securityCode" === r || (i[o++] = v.requiredParamsCodes[r]);
      e.validateExpiryDate(t.cardExpirationMonth, t.cardExpirationYear) || (i[o++] = v.invalidParamsCode.cardExpirationMonth, i[o++] = v.invalidParamsCode.cardExpirationYear), a(t.cardNumber, function (e, r) {
        r || (i[o++] = v.invalidParamsCode.cardNumber), c(t.securityCode, t.cardNumber, function (e, r) {
          r || (i[o++] = v.invalidParamsCode.securityCode), d(t, i, function (e, t) {
            n(t)
          })
        })
      })
    }

    var m = t.utils, f = t.trackErrors, y = t.request, h = t.paymentMethods, v = {
      tokenName: "card",
      whitelistedAttrs: ["cardNumber", "securityCode", "cardExpirationMonth", "cardExpirationYear", "cardExpiration", "cardIssuerId"],
      identificationTypes: [],
      requiredParamsCodes: {
        cardholderName: {
          code: "221",
          description: "parameter cardholderName can not be null/empty"
        },
        docNumber: {code: "214", description: "parameter docNumber can not be null/empty"},
        docType: {code: "212", description: "parameter docType can not be null/empty"},
        cardNumber: {code: "205", description: "parameter cardNumber can not be null/empty"},
        securityCode: {code: "224", description: "parameter securityCode can not be null/empty"},
        cardExpirationMonth: {code: "208", description: "parameter cardExpirationMonth can not be null/empty"},
        cardExpirationYear: {code: "209", description: "parameter cardExpirationYear can not be null/empty"},
        cardIssuerId: {code: "220", description: "parameter cardIssuerId can not be null/empty"}
      },
      invalidParamsCode: {
        cardholderName: {code: "316", description: "invalid parameter cardholderName"},
        docNumber: {code: "324", description: "invalid parameter docNumber"},
        docType: {code: "322", description: "invalid parameter docType"},
        cardNumber: {code: "E301", description: "invalid parameter cardNumber"},
        securityCode: {code: "E302", description: "invalid parameter securityCode"},
        cardExpirationMonth: {code: "325", description: "invalid parameter cardExpirationMonth"},
        cardExpirationYear: {code: "326", description: "invalid parameter cardExpirationYear"}
      }
    };
    window.addEventListener("unload", n, !1), e.validateLuhn = o, e.validateCardNumber = a, e.validateSecurityCode = c, e.validateCardholderName = s, e.validateIdentification = u, e.validateExpiryDate = l, e.getIdentificationTypes = r, v.validate = p, t.card = v
  }(e, t), function (e, t) {
    function n(t) {
      var n = {};
      return e.deviceProfileId && (n.device = {meli: {session_id: e.deviceProfileId}}), t.cardId && "" !== t.cardId && "-1" !== t.cardId ? (n.card_id = t.cardId, n.security_code = t.securityCode, n) : (n.card_number = t.cardNumber, n.security_code = t.securityCode, n.expiration_month = parseInt(t.cardExpirationMonth, 10), n.expiration_year = parseInt(t.cardExpirationYear, 10), n.cardholder = {name: t.cardholderName}, n.cardholder.identification = {
        type: "" === t.docType || void 0 === t.docType ? null : t.docType,
        number: "" === t.docNumber || void 0 === t.docNumber ? null : t.docNumber
      }, n)
    }

    function r(n, r) {
      e.tokenId ? t.CardToken.update(n, r) : t.CardToken.create(n, r)
    }

    function o(e, t, n) {
      e && e.jquery && (e = e[0]), (e instanceof HTMLFormElement || void 0 !== e.nodeType && e.nodeType === document.ELEMENT_NODE) && (e = c.paramsForm(e)), c.isEmpty(e) ? n(e) : d.validate(e, function (t) {
        t.length && (e = t, s({status: 400, type: "validateForm", data: e})), n(e)
      })
    }

    function i(t, n) {
      function o() {
        for (var t = 0, n = [], r = 0; i && r < i.length; r++) {
          var o = i[r];
          null === o.name || void 0 === o.name || "" === o.name || "cardNumber" != o.getAttribute("data-checkout") && "securityCode" != o.getAttribute("data-checkout") || (n[t++] = o.getAttribute("data-checkout"))
        }
        n.length > 0 && s({
          status: 200,
          type: "DSS-" + window.location.host,
          data: {inputNames: n, user_agent: window.navigator.userAgent, public_key: e.key}
        })
      }

      if (!e.key || "string" != typeof e.key) throw new Error("You did not set a valid publishable key. Call Mercadopago.setPublishableKey() with your public_key.");
      if (/\s/g.test(e.key)) throw new Error("Your key is invalid, as it contains whitespaces.");
      var i = document.querySelectorAll("[data-checkout]");
      if ("file:" != window.location.protocol && "https:" != window.location.protocol && i && i.length > 0 && !/^TEST/.test(e.key)) throw s({
        status: 200,
        type: "validateReferer",
        data: JSON.stringify({referer: window.location.host, user_agent: window.navigator.userAgent, public_key: e.key})
      }), new Error("Your payment cannot be processed because the website contains credit card data and is not using a secure connection.SSL certificate is required to operate.");
      o(), t.card.public_key = e.key, r(t, n)
    }

    function a(e, t) {
      function n(e) {
        return r[d.tokenName] = e, r[d.tokenName][0] ? t(400, {
          error: "bad_request",
          message: "invalid parameters",
          cause: r[d.tokenName]
        }) : i(r, t)
      }

      var r = {};
      o(e, d.whitelistedAttrs, n)
    }

    var c = t.utils, d = t.card, s = t.trackErrors, u = t.request, l = {};
    l.request = function (t, r, o) {
      var i = c.baseUrl + "/card_tokens", a = r.card ? n(r.card) : {};
      if (o = "function" == typeof o ? o : function () {
      }, "POST" != t && "PUT" != t) throw new Error("Method not allowed.");
      "PUT" == t && (i += "/" + e.tokenId), i += "?public_key=" + e.key + "&js_version=" + e.version, u.AJAX({
        id: "cardForm",
        method: t,
        url: i,
        data: a,
        timeout: 35e3,
        retries: 3,
        success: function (t, n) {
          e.tokenId = n.id
        },
        complete: o
      })
    }, l["new"] = function (t) {
      l.request("POST", {}, function () {
        return function (n, r) {
          201 == n ? e.createDeviceProfile(t) : t(n, r)
        }
      }())
    }, l.update = function (t, n) {
      e.tokenId ? l.request("PUT", t, n) : l.create(t, n)
    }, l.create = function (e, t) {
      l["new"](function () {
        return function () {
          l.update(e, t)
        }
      }())
    }, t.CardToken = l, e.createToken = a
  }(e, t), function (e, t) {
    function n(n) {
      if ("https://mldp.mercadopago.com" == n.origin) {
        clearTimeout(a);
        var r = null;
        try {
          r = JSON.parse(n.data)
        } catch (c) {
        }
        r.session_id != e.deviceProfileId && (e.deviceProfileId = r.session_id, t.creatingDevice = !1, i && i(), o(r.session_id))
      }
    }

    function r(r) {
      if (e.tokenId) {
        t.creatingDevice = !0;
        var o = document.querySelector("iframe#device_profile");
        if (o) {
          var c = o.parentElement.removeChild(o);
          try {
            delete c
          } catch (d) {
          }
        } else window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent && window.attachEvent("onmessage", n);
        var s = document.createElement("iframe");
        s.id = "device_profile", i = "function" == typeof r ? r : null, i && (a = setTimeout(function () {
          t.creatingDevice = !1, i()
        }, 3e3)), s.style.display = "none", s.src = "https://mldp.mercadopago.com/device_profile/widget?public_key=" + e.key + "&session_id=" + e.tokenId, document.body.appendChild(s)
      }
    }

    function o(e) {
      var t = document.querySelector("iframe#thm_mp_cntnr");
      if (t) {
        var n = t.parentElement.removeChild(t);
        try {
          delete n
        } catch (r) {
        }
      }
      var o = document.createElement("iframe");
      o.id = "thm_mp_cntnr", o.setAttribute("width", "0"), o.setAttribute("height", "0"), o.setAttribute("frameborder", "0"), o.style.visibility = "hidden", document.querySelector("body").appendChild(o), o.contentDocument.open(), o.contentDocument.write("<!doctype html><html><body></body></html>"), o.contentDocument.close();
      var i = document.createElement("script");
      i.id = "thm_loader", i.setAttribute("type", "text/javascript"), i.setAttribute("src", "https://content.mercadopago.com/fp/check.js?org_id=jk96mpy0&session_id=" + e), o.contentDocument.body.appendChild(i)
    }

    var i = null, a = null;
    t.creatingDevice = !1, e.createDeviceProfile = r
  }(e, t), function (e, t) {
    function n() {
      var e = window.crypto || window.msCrypto;
      if ("undefined" == typeof e || "undefined" == typeof window.Uint32Array) return null;
      var t = new Uint32Array(8);
      e.getRandomValues(t);
      for (var n = "", r = 0; r < t.length; r++) n += (2 > r || r > 5 ? "" : "-") + t[r].toString(16).slice(-4);
      return n
    }

    function r() {
      e.initialized !== !0 && (t.CardToken["new"](), 0 === e.getPaymentMethods().length && e.getAllPaymentMethods(), e.initialized = !0, e.sessionId = n())
    }

    function o() {
      e.tokenId = null, e.deviceProfileId = null
    }

    e.clearSession = o, e.initMercadopago = r
  }(e, t), this.Mercadopago = e
}.call();
