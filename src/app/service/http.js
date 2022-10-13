sap.ui.define(["jquery.sap.global"], function (jQuery) {
  "use strict";

  // function setCSRFPrefilter(baseUrl) {
  //   return jQuery.ajax({
  //     url: baseUrl + "/csrf",
  //     method: "GET",
  //     headers: { "X-CSRF-Token": "Fetch" }
  //   }).then(function (data, sStatus, jqXHR) {
  //     var csrfToken = jqXHR.getResponseHeader("X-CSRF-Token");
  //     jQuery.ajaxPrefilter(function (options, originalOptions, _jqXHR) {
  //       if (typeof csrfToken === "string") {
  //         if (["POST", "PUT", "DELETE", "PATCH"].indexOf(options.type) !== -1) {
  //           _jqXHR.setRequestHeader("X-CSRF-Token", csrfToken);
  //         }
  //       }
  //     });
  //   });
  // }

  return {
    get: function (url, data) {
      if (typeof data === "undefined") {
        data = {};
      }

      data = jQuery.extend({}, { $format: "json" }, data);
      return this.request(url, data, "GET");
    },

    post: function (url, data) {
      return this.request(url, data, "POST");
    },

    patch: function (url, data) {
      return this.request(url, data, "PATCH");
    },

    request: function (url, data, method) {
      return jQuery.ajax({
        url: url,
        method: method,
        data: method === "GET" ? data : JSON.stringify(data),
        contentType: "application/json"
      });
    }
  };
});
