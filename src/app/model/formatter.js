sap.ui.define([], function () {
  return {
    calculateHoursBetween (dDate1, dDate2, bSuccessFactors) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(
        Math.abs((dDate1.getTime() - dDate2.getTime()) / oneDay)
      );
      return diffDays * 8;
    }
  };
});
