sap.ui.define(
  ['sap/ui/core/UIComponent', 'com/sap/team-calendar/model/models'],
  function (UIComponent, models) {
    return UIComponent.extend('com.sap.team-calendar.Component', {
      metadata: {
        manifest: 'json'
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), 'device');
      }
    });
  }
);
