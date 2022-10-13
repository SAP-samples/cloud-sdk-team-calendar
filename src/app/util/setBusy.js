sap.ui.define([], function () {
  function setBusy(control, promise) {
    control.setBusy(true);
    return promise
      .then(function () {
        control.setBusy(false);
      })
      .fail(function () {
        control.setBusy(false);
      });
  }

  return setBusy;
});
