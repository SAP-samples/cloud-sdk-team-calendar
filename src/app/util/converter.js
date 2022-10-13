sap.ui.define([], function () {
  "use strict";

  function getTime(isStartDate) {
    return isStartDate ? [0, 0, 0] : [23, 59, 59];
  }

  return {
    getResults: function (data) {
      return data && data.results ? data.results : [];
    },

    getValue: function (data) {
      return data && data.value ? data.value : [];
    },

    getD: function (data) {
      return data && data.d ? data.d : {};
    },

    serializeTime: function (isStartDate) {
      var timeParts = getTime(isStartDate).map(function (part) {
        return part < 10 ? "0" + part : part;
      });

      return timeParts.join(":");
    },

    serializeDate: function (date) {
      return new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      )
      .toISOString()
      .slice(0, 10);
    },

    deserializeDate: function (date, isStartDate) {
      if (date.indexOf("Date") >= 0) {
        var utcDateString = new Date(
          parseInt(date.replace("/Date(", "").replace(")/", ""))
        ).toISOString();
        return this.deserializeDate(utcDateString, isStartDate);
      }
      var dateParts = date
        .slice(0, 10)
        .split("-")
        .map(p => parseInt(p));
      // month starts at 0
      dateParts[1] = dateParts[1] - 1;
      dateParts = dateParts.concat(getTime(isStartDate));
      return new Date(
        dateParts[0],
        dateParts[1],
        dateParts[2],
        dateParts[3],
        dateParts[4],
        dateParts[5]
      );
    }
  };
});
