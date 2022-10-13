sap.ui.define([
  'sap/ui/model/json/JSONModel',
  'sap/ui/Device'
], function (JSONModel, Device) {
  return {
    createDeviceModel () {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode('OneWay');
      return oModel;
    }
  };
});
