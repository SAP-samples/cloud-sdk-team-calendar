sap.ui.define([], function () {
  function getTime(isStartDate) {
    return isStartDate ? [0, 0, 0] : [23, 59, 59];
  }

  return {
    getResults (data) {
      return data && data.results ? data.results : [];
    },

    getValue (data) {
      return data && data.value ? data.value : [];
    },

    getD (data) {
      return data && data.d ? data.d : {};
    },

    serializeTime (isStartDate) {
      const timeParts = getTime(isStartDate).map(function (part) {
        return part < 10 ? '0' + part : part;
      });

      return timeParts.join(':');
    },

    serializeDate (date) {
      return new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      )
      .toISOString()
      .slice(0, 10);
    },

    deserializeDate (date, isStartDate) {
      if (date.indexOf('Date') >= 0) {
        const utcDateString = new Date(
          parseInt(date.replace('/Date(', '').replace(')/', ''))
        ).toISOString();
        return this.deserializeDate(utcDateString, isStartDate);
      }
      let dateParts = date
        .slice(0, 10)
        .split('-')
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
