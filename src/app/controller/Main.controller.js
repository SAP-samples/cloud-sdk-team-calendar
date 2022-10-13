sap.ui.define(
  [
    'sap/m/Button',
    'sap/m/Dialog',
    'sap/m/Label',
    'sap/m/Popover',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'com/sap/team-calendar/model/formatter',
    'com/sap/team-calendar/util/converter',
    'com/sap/team-calendar/util/setBusy',
    'com/sap/team-calendar/service/time-sheet.service'
  ],
  function (
    Button,
    Dialog,
    Label,
    Popover,
    Controller,
    JSONModel,
    formatter,
    converter,
    setBusy,
    timeSheetService
  ) {
    return Controller.extend('com.sap.team-calendar.controller.Main', {
      formatter,

      onInit () {
        const that = this;
        setBusy(
          this.getView(),
          this.initModels().then(function () {
            that.setAppointmentsToApprove();
          })
        );
      },

      initModels () {
        const model = new JSONModel({
          startDate: new Date(),
          people: []
        });

        model.setSizeLimit(10000);

        this.getView().setModel(model);

        return jQuery.when(
          this.initPersons(model),
          this.initAppointments(model)
        );
      },

      initPersons (model) {
        const imageMapping = {
          1: '/images/rubenjohnson.jpg',
          2: '/images/janemiller.jpg',
          3: '/images/peterparker.jpg',
          4: '/images/carensmith.jpg'
        };

        return timeSheetService.getPersons().then(function (persons) {
          const modelData = persons.map(function (person) {
            const personData = {
              pic: imageMapping[person.ID],
              userid: person.ID,
              role: person.role,
              name: person.name
            };

            if (
              typeof model.getProperty(
                '/people/' + person.ID + '/appointments'
              ) === 'undefined'
            ) {
              personData.appointments = [];
            }

            return personData;
          });

          model.setData(
            {
              people: modelData.reduce(function (objectified, curr) {
                objectified[curr.userid] = curr;
                return objectified;
              }, {})
            },
            true
          );
        });
      },

      initAppointments (model) {
        return timeSheetService.getAppointments().then(function (appointments) {
          const modelData = appointments.reduce(function (
            groupedAppointments,
            appointment
          ) {
            if (!groupedAppointments[appointment.person_ID]) {
              groupedAppointments[appointment.person_ID] = { appointments: {} };
            }

            groupedAppointments[appointment.person_ID].appointments[
              appointment.ID
            ] = {
              appointmentid: appointment.ID,
              start: converter.deserializeDate(appointment.start_date, true),
              end: converter.deserializeDate(appointment.end_date, false),
              title: appointment.title,
              info: appointment.info,
              customer: appointment.project,
              type: appointment.type === 'Vacation' ? 'Type08' : 'Type06',
              tentative:
                appointment.type !== 'Vacation' &&
                appointment.status !== 'APPROVED'
            };

            return groupedAppointments;
          },
          {});

          model.setData({ people: modelData }, true);
        });
      },

      setAppointmentsToApprove () {
        const oCurModel = this.getView().getModel();
        const dataByPerson = oCurModel.getData().people;
        const aAppointmentsToApprove = [];
        if (Object.keys(dataByPerson)) {
          Object.keys(dataByPerson).forEach(function (userid) {
            const sPersonName = dataByPerson[userid].name;
            const appointmentsToApprove = Object.values(
              dataByPerson[userid].appointments
            ).filter(function (el) {
              return el.tentative;
            });

            appointmentsToApprove.forEach(function (appointment) {
              appointment.personName = sPersonName;
              appointment.personid = userid;
              aAppointmentsToApprove.push(appointment);
            });
          });
        }

        oCurModel.setProperty('/appointmentsToApprove', aAppointmentsToApprove);
      },

      handleAppointmentSelect (oEvent) {
        const oAppointment = oEvent.getParameter('appointment');

        if (oAppointment) {
          this._handleSingleAppointment(oAppointment);
        }
      },

      handleOkButton () {
        const that = this;
        const oFrag = sap.ui.core.Fragment;
        const oStartValue = oFrag
          .byId('myPopoverFrag', 'startDate')
          .getDateValue();
        const oEndValue = oFrag.byId('myPopoverFrag', 'endDate').getDateValue();
        const sInfoValue = oFrag.byId('myPopoverFrag', 'moreInfo').getText();
        const sAppointmentPath = this._oDetailsPopover.getBindingContext().sPath;
        const appointmentid = sAppointmentPath.split('/').pop();

        setBusy(
          this.getView(),
          timeSheetService
            .updateAppointment(appointmentid, {
              start: oStartValue,
              end: oEndValue,
              info: sInfoValue
            })
            .then(function () {
              that._oDetailsPopover
                .getModel()
                .setProperty(sAppointmentPath + '/start', oStartValue);
              that._oDetailsPopover
                .getModel()
                .setProperty(sAppointmentPath + '/end', oEndValue);
              that._oDetailsPopover
                .getModel()
                .setProperty(sAppointmentPath + '/info', sInfoValue);
              that._oDetailsPopover.close();
            })
        );
      },

      handleOKButton () {
        this._oDetailsPopover.close();
      },

      handleAppointmentCreate () {
        const oFrag = sap.ui.core.Fragment;
          let oDateTimePickerStart;
          let oDateTimePickerEnd;
          let oBeginButton;

        this._createDialog();

        oFrag
          .byId('myFrag', 'selectPerson')
          .setSelectedItem(oFrag.byId('myFrag', 'selectPerson').getItems()[0]);

        oDateTimePickerStart = oFrag.byId('myFrag', 'startDate');
        oDateTimePickerEnd = oFrag.byId('myFrag', 'endDate');
        oBeginButton = this.oNewAppointmentDialog.getBeginButton();

        oDateTimePickerStart.setValue('');
        oDateTimePickerEnd.setValue('');
        oDateTimePickerStart.setValueState('None');
        oDateTimePickerEnd.setValueState('None');

        this.updateButtonEnabledState(
          oDateTimePickerStart,
          oDateTimePickerEnd,
          oBeginButton
        );
        this.oNewAppointmentDialog.open();
      },

      handleAppointmentAddWithContext (oEvent) {
        const oFrag = sap.ui.core.Fragment;
          let currentRow;
          let sPersonName;
          let oSelect;
          let oSelectedItem;
          let oSelectedIntervalStart;
          let oStartDate;
          let oSelectedIntervalEnd;
          let oEndDate;
          let oDateTimePickerStart;
          let oDateTimePickerEnd;
          let oBeginButton;

        this._createDialog();

        currentRow = oEvent.getParameter('row');
        sPersonName = currentRow.getTitle();
        oSelect = this.oNewAppointmentDialog.getContent()[0].getContent()[1];
        oSelectedItem = oSelect.getItems().filter(function (oItem) {
          return oItem.getText() === sPersonName;
        })[0];
        oSelect.setSelectedItem(oSelectedItem);

        oSelectedIntervalStart = oEvent.getParameter('startDate');
        oStartDate = oFrag.byId('myFrag', 'startDate');
        oStartDate.setDateValue(oSelectedIntervalStart);

        oSelectedIntervalEnd = oEvent.getParameter('endDate');
        oEndDate = oFrag.byId('myFrag', 'endDate');
        oEndDate.setDateValue(oSelectedIntervalEnd);

        oDateTimePickerStart = oFrag.byId('myFrag', 'startDate');
        oDateTimePickerEnd = oFrag.byId('myFrag', 'endDate');
        oBeginButton = this.oNewAppointmentDialog.getBeginButton();

        oDateTimePickerStart.setValueState('None');
        oDateTimePickerEnd.setValueState('None');

        this.updateButtonEnabledState(
          oDateTimePickerStart,
          oDateTimePickerEnd,
          oBeginButton
        );
        this.oNewAppointmentDialog.open();
      },

      _validateDateTimePicker (sValue, oDateTimePicker) {
        if (sValue === '') {
          oDateTimePicker.setValueState('Error');
        } else {
          oDateTimePicker.setValueState('None');
        }
      },

      updateButtonEnabledState (
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oButton
      ) {
        const bEnabled =
          oDateTimePickerStart.getValueState() !== 'Error' &&
          oDateTimePickerStart.getValue() !== '' &&
          oDateTimePickerEnd.getValue() !== '' &&
          oDateTimePickerEnd.getValueState() !== 'Error';

        oButton.setEnabled(bEnabled);
      },

      handleDetailsChange (oEvent) {
        const oFrag = sap.ui.core.Fragment;
          const oDTPStart = oFrag.byId('myPopoverFrag', 'startDate');
          const oDTPEnd = oFrag.byId('myPopoverFrag', 'endDate');
          const oOKButton = oFrag.byId('myPopoverFrag', 'OKButton');

        this._validateDateTimePicker(
          oEvent.getParameter('value'),
          oEvent.getSource()
        );
        this.updateButtonEnabledState(oDTPStart, oDTPEnd, oOKButton);
      },

      handleCreateChange (oEvent) {
        const oFrag = sap.ui.core.Fragment;
          const oDateTimePickerStart = oFrag.byId('myFrag', 'startDate');
          const oDateTimePickerEnd = oFrag.byId('myFrag', 'endDate');
          const oBeginButton = this.oNewAppointmentDialog.getBeginButton();

        this._validateDateTimePicker(
          oEvent.getParameter('value'),
          oEvent.getSource()
        );

        this.updateButtonEnabledState(
          oDateTimePickerStart,
          oDateTimePickerEnd,
          oBeginButton
        );
      },

      _createDialog () {
        const oFrag = sap.ui.core.Fragment;
          const that = this;
          let oStartDate;
          let oEndDate;
          let sTitle;
          let sPersonID;
          let sInfoResponse;
          let oNewAppointment;
          let oModel;
          let sPath;
          let oPersonAppointments;

        if (!that.oNewAppointmentDialog) {
          that.oNewAppointmentDialog = new Dialog({
            title: 'Add a new appointment',
            content: [
              sap.ui.xmlfragment(
                'myFrag',
                'com.sap.team-calendar.fragments.Create',
                this
              )
            ],
            beginButton: new Button({
              text: 'Create',
              enabled: false,
              press () {
                oStartDate = oFrag.byId('myFrag', 'startDate').getDateValue();
                oEndDate = oFrag.byId('myFrag', 'endDate').getDateValue();
                oEndDate.setHours(23);
                oEndDate.setMinutes(59);
                oEndDate.setSeconds(59);
                sTitle = oFrag.byId('myFrag', 'inputTitle').getValue();
                sInfoResponse = oFrag.byId('myFrag', 'moreInfo').getValue();
                sPersonID = oFrag
                  .byId('myFrag', 'selectPerson')
                  .getSelectedKey();

                if (
                  oFrag.byId('myFrag', 'startDate').getValueState() !==
                    'Error' &&
                  oFrag.byId('myFrag', 'endDate').getValueState() !== 'Error'
                ) {
                  oNewAppointment = {
                    start: oStartDate,
                    end: oEndDate,
                    title: sTitle,
                    info: sInfoResponse,
                    type: 'Type06',
                    tentative: true
                  };

                  setBusy(
                    that.getView(),
                    timeSheetService
                      .createAppointment(oNewAppointment, sPersonID)
                      .then(function (appointment) {
                        oModel = that.getView().getModel();
                        sPath = '/people/' + sPersonID + '/appointments';
                        oPersonAppointments = oModel.getProperty(sPath);
                        oNewAppointment.appointmentid = appointment.ID;

                        oPersonAppointments[appointment.ID] = oNewAppointment;

                        oModel.setProperty(sPath, oPersonAppointments);
                        that.oNewAppointmentDialog.close();

                        that.setAppointmentsToApprove();
                      })
                  );
                }
              }
            }),
            endButton: new Button({
              text: 'Close',
              press () {
                that.oNewAppointmentDialog.close();
              }
            })
          });

          that.oNewAppointmentDialog.addStyleClass('sapUiContentPadding');
          this.getView().addDependent(that.oNewAppointmentDialog);
        }
      },

      _handleSingleAppointment (oAppointment) {
        const oFrag = sap.ui.core.Fragment;
          let oAppBC;
          let oDateTimePickerStart;
          let oDateTimePickerEnd;
          let oInfoInput;

        if (!this._oDetailsPopover) {
          this._oDetailsPopover = sap.ui.xmlfragment(
            'myPopoverFrag',
            'com.sap.team-calendar.fragments.Details',
            this
          );
          this.getView().addDependent(this._oDetailsPopover);
        }

        // the binding context is needed, because later when the OK button is clicked, the information must be updated
        oAppBC = oAppointment.getBindingContext();

        this._oDetailsPopover.setBindingContext(oAppBC);

        oDateTimePickerStart = oFrag.byId('myPopoverFrag', 'startDate');
        oDateTimePickerEnd = oFrag.byId('myPopoverFrag', 'endDate');
        oInfoInput = oFrag.byId('myPopoverFrag', 'moreInfo');

        oDateTimePickerStart.setDateValue(oAppointment.getStartDate());
        oDateTimePickerEnd.setDateValue(oAppointment.getEndDate());
        oInfoInput.setText(oAppointment.getText());

        oDateTimePickerStart.setValueState('None');
        oDateTimePickerEnd.setValueState('None');

        this._oDetailsPopover.openBy(oAppointment);
      },

      handleAppointmentDragEnter (oEvent) {
        // if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
        // 	oEvent.preventDefault();
        // }
      },

      handleAppointmentDrop (oEvent) {
        const that = this;
        const oAppointment = oEvent.getParameter('appointment');
        const oStartDate = oEvent.getParameter('startDate');
        const oEndDate = oEvent.getParameter('endDate');
        const oCalendarRow = oEvent.getParameter('calendarRow');
        const bCopy = oEvent.getParameter('copy');
        const oModel = this.getView().getModel();
        const oAppBindingContext = oAppointment.getBindingContext();
        const oRowBindingContext = oCalendarRow.getBindingContext();
        const person = oRowBindingContext.getObject();
        const appointment = oAppBindingContext.getObject();
        const aPath = oAppBindingContext.getPath().split('/');
        const sRowAppointmentsPath = aPath.join('/');

        // "copy" appointment
        if (bCopy) {
          const oProps = jQuery.extend({}, appointment);
          oProps.start = oStartDate;
          oProps.end = oEndDate;

          setBusy(
            this.getView(),
            timeSheetService
              .createAppointment(oProps, person.userid)
              .then(function (newAppointment) {
                person.appointments[oProps.ID] = oProps;
                person.appointments[oProps.ID].appointmentid =
                  newAppointment.ID;
              })
          );
        } else {
          // "move" appointment
          oModel.setProperty('start', oStartDate, oAppBindingContext);
          oModel.setProperty('end', oEndDate, oAppBindingContext);

          if (oAppointment.getParent() !== oCalendarRow) {
            appointment.personName = person.name;
            appointment.personid = person.userid;

            person.appointments[appointment.appointmentid] = appointment;

            delete oModel.getProperty(sRowAppointmentsPath)[
              appointment.appointmentid
            ];
          }

          setBusy(
            this.getView(),
            timeSheetService
              .updateAppointment(appointment.appointmentid, {
                start: oStartDate,
                end: oEndDate,
                person_ID: person.userid
              })
              .then(function () {
                that.setAppointmentsToApprove();
              })
          );
        }

        oModel.refresh(true);
      },

      handleAppointmentResize (oEvent) {
        const oAppointment = oEvent.getParameter('appointment');
          const oStartDate = oEvent.getParameter('startDate');
          const oEndDate = oEvent.getParameter('endDate');

        oAppointment.setStartDate(oStartDate).setEndDate(oEndDate);

        const bc = oAppointment.getBindingContext();

        setBusy(
          this.getView(),
          timeSheetService.updateAppointment(bc.getObject().appointmentid, {
            start: oStartDate,
            end: oEndDate
          })
        );
      },

      onApproveHours (oEvent) {
        const that = this;
        const bc = oEvent.getSource().getBindingContext();
        const appointment = bc.getObject();

        this.getView()
          .getModel()
          .setProperty(
            '/people/' +
              appointment.personid +
              '/appointments/' +
              appointment.appointmentid +
              '/tentative',
            false
          );
        setBusy(
          this.getView(),
          timeSheetService
            .approveTimeOff(appointment.appointmentid)
            .then(function () {
              that.setAppointmentsToApprove();
            })
        );
      }
    });
  }
);
