sap.ui.define([], function () {
  "use strict";
  return {
    calculateHoursBetween: function (dDate1, dDate2, bSuccessFactors) {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var diffDays = Math.round(
        Math.abs((dDate1.getTime() - dDate2.getTime()) / oneDay)
      );
      return diffDays * 8;
    }
  };
});
