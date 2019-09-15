sap.ui.define([
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Label",
	"sap/m/Popover",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/sap/timesheet/model/formatter",
	"com/sap/timesheet/util/converter",
	"com/sap/timesheet/util/setBusy",
	"com/sap/timesheet/service/time-sheet.service"
], function (Button, Dialog, Label, Popover, Controller, JSONModel, formatter, converter, setBusy, timeSheetService) {
	"use strict";

	return Controller.extend("com.sap.timesheet.controller.Main", {
		formatter: formatter,

		onInit: function () {
			var that = this;
			setBusy(
				this.getView(),
				this.initModels().then(function () {
					that.setAppointmentsToApprove();
				})
			);
		},

		initModels: function () {
			var model = new JSONModel({
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

		initPersons: function (model) {
			var imageMapping = {
				1: "/images/rubenjohnson.jpg",
				2: "/images/janemiller.jpg",
				3: "/images/peterparker.jpg",
				4: "/images/carensmith.jpg"
			};

			return timeSheetService.getPersons().then(function (persons) {
				var modelData = persons.map(function (person) {
					var personData = {
						pic: imageMapping[person.ID],
						userid: person.ID,
						role: person.role,
						name: person.name
					};

					if (typeof model.getProperty("/people/" + person.ID + "/appointments") === "undefined") {
						personData.appointments = [];
					}

					return personData;
				});

				model.setData({
					people: modelData.reduce(function (objectified, curr) {
						objectified[curr.userid] = curr;
						return objectified;
					}, {})
				}, true);
			});
		},

		initAppointments: function (model) {
			return timeSheetService.getAppointments().then(function (appointments) {
				var modelData = appointments.reduce(function (groupedAppointments, appointment) {
					if (!groupedAppointments[appointment.person_ID]) {
						groupedAppointments[appointment.person_ID] = { appointments: {} };
					}

					groupedAppointments[appointment.person_ID].appointments[appointment.ID] = {
						appointmentid: appointment.ID,
						start: converter.deserializeDate(appointment.start_date, true),
						end: converter.deserializeDate(appointment.end_date, false),
						title: appointment.title,
						info: appointment.info,
						customer: appointment.project,
						type: appointment.type === "Vacation" ? "Type08" : "Type06",
						tentative: appointment.type !== "Vacation" && appointment.status !== "APPROVED"
					};

					return groupedAppointments;
				}, {});

				model.setData({ people: modelData }, true);
			});
		},

		setAppointmentsToApprove: function () {
			var oCurModel = this.getView().getModel();
			var dataByPerson = oCurModel.getData().people;
			var aAppointmentsToApprove = [];
			if (Object.keys(dataByPerson)) {
				Object.keys(dataByPerson).forEach(function (userid) {
					var sPersonName = dataByPerson[userid].name;
					var appointmentsToApprove = Object.values(
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

			oCurModel.setProperty("/appointmentsToApprove", aAppointmentsToApprove);
		},

		handleAppointmentSelect: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment");

			if (oAppointment) {
				this._handleSingleAppointment(oAppointment);
			}
		},

		handleOkButton: function () {
			var that = this;
			var oFrag = sap.ui.core.Fragment;
			var oStartValue = oFrag
				.byId("myPopoverFrag", "startDate")
				.getDateValue();
			var oEndValue = oFrag.byId("myPopoverFrag", "endDate").getDateValue();
			var sInfoValue = oFrag.byId("myPopoverFrag", "moreInfo").getText();
			var sAppointmentPath = this._oDetailsPopover.getBindingContext().sPath;
			var appointmentid = sAppointmentPath.split("/").pop();

			setBusy(
				this.getView(),
				timeSheetService.updateAppointment(appointmentid, {
					start: oStartValue,
					end: oEndValue,
					info: sInfoValue
				})
				.then(function () {
					that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/start", oStartValue);
					that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/end", oEndValue);
					that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/info", sInfoValue);
					that._oDetailsPopover.close();
				})
			);
		},

		handleOKButton: function () {
			this._oDetailsPopover.close();
		},

		handleAppointmentCreate: function () {
			var oFrag = sap.ui.core.Fragment,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton;

			this._createDialog();

			oFrag
				.byId("myFrag", "selectPerson")
				.setSelectedItem(oFrag.byId("myFrag", "selectPerson").getItems()[0]);

			oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
			oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			oDateTimePickerStart.setValue("");
			oDateTimePickerEnd.setValue("");
			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this.updateButtonEnabledState(
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton
			);
			this.oNewAppointmentDialog.open();
		},

		handleAppointmentAddWithContext: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				currentRow,
				sPersonName,
				oSelect,
				oSelectedItem,
				oSelectedIntervalStart,
				oStartDate,
				oSelectedIntervalEnd,
				oEndDate,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton;

			this._createDialog();

			currentRow = oEvent.getParameter("row");
			sPersonName = currentRow.getTitle();
			oSelect = this.oNewAppointmentDialog.getContent()[0].getContent()[1];
			oSelectedItem = oSelect.getItems().filter(function (oItem) {
				return oItem.getText() === sPersonName;
			})[0];
			oSelect.setSelectedItem(oSelectedItem);

			oSelectedIntervalStart = oEvent.getParameter("startDate");
			oStartDate = oFrag.byId("myFrag", "startDate");
			oStartDate.setDateValue(oSelectedIntervalStart);

			oSelectedIntervalEnd = oEvent.getParameter("endDate");
			oEndDate = oFrag.byId("myFrag", "endDate");
			oEndDate.setDateValue(oSelectedIntervalEnd);

			oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
			oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this.updateButtonEnabledState(
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton
			);
			this.oNewAppointmentDialog.open();
		},

		_validateDateTimePicker: function (sValue, oDateTimePicker) {
			if (sValue === "") {
				oDateTimePicker.setValueState("Error");
			} else {
				oDateTimePicker.setValueState("None");
			}
		},

		updateButtonEnabledState: function (
			oDateTimePickerStart,
			oDateTimePickerEnd,
			oButton
		) {
			var bEnabled =
				oDateTimePickerStart.getValueState() !== "Error" &&
				oDateTimePickerStart.getValue() !== "" &&
				oDateTimePickerEnd.getValue() !== "" &&
				oDateTimePickerEnd.getValueState() !== "Error";

			oButton.setEnabled(bEnabled);
		},

		handleDetailsChange: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oDTPStart = oFrag.byId("myPopoverFrag", "startDate"),
				oDTPEnd = oFrag.byId("myPopoverFrag", "endDate"),
				oOKButton = oFrag.byId("myPopoverFrag", "OKButton");

			this._validateDateTimePicker(
				oEvent.getParameter("value"),
				oEvent.getSource()
			);
			this.updateButtonEnabledState(oDTPStart, oDTPEnd, oOKButton);
		},

		handleCreateChange: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oDateTimePickerStart = oFrag.byId("myFrag", "startDate"),
				oDateTimePickerEnd = oFrag.byId("myFrag", "endDate"),
				oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			this._validateDateTimePicker(
				oEvent.getParameter("value"),
				oEvent.getSource()
			);

			this.updateButtonEnabledState(
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton
			);
		},

		_createDialog: function () {
			var oFrag = sap.ui.core.Fragment,
				that = this,
				oStartDate,
				oEndDate,
				sTitle,
				sPersonID,
				sInfoResponse,
				oNewAppointment,
				oModel,
				sPath,
				oPersonAppointments;

			if (!that.oNewAppointmentDialog) {
				that.oNewAppointmentDialog = new Dialog({
					title: "Add a new appointment",
					content: [
						sap.ui.xmlfragment("myFrag", "com.sap.timesheet.fragments.Create", this)
					],
					beginButton: new Button({
						text: "Create",
						enabled: false,
						press: function () {
							oStartDate = oFrag.byId("myFrag", "startDate").getDateValue();
							oEndDate = oFrag.byId("myFrag", "endDate").getDateValue();
							oEndDate.setHours(23);
							oEndDate.setMinutes(59);
							oEndDate.setSeconds(59);
							sTitle = oFrag.byId("myFrag", "inputTitle").getValue();
							sInfoResponse = oFrag.byId("myFrag", "moreInfo").getValue();
							sPersonID = oFrag.byId("myFrag", "selectPerson").getSelectedKey();

							if (
								oFrag.byId("myFrag", "startDate").getValueState() !== "Error" &&
								oFrag.byId("myFrag", "endDate").getValueState() !== "Error"
							) {
								oNewAppointment = {
									start: oStartDate,
									end: oEndDate,
									title: sTitle,
									info: sInfoResponse,
									type: "Type06",
									tentative: true
								};

								setBusy(
									that.getView(),
									timeSheetService
										.createAppointment(oNewAppointment, sPersonID)
										.then(function (appointment) {
											oModel = that.getView().getModel();
											sPath = "/people/" + sPersonID + "/appointments";
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
						text: "Close",
						press: function () {
							that.oNewAppointmentDialog.close();
						}
					})
				});

				that.oNewAppointmentDialog.addStyleClass("sapUiContentPadding");
				this.getView().addDependent(that.oNewAppointmentDialog);
			}
		},

		_handleSingleAppointment: function (oAppointment) {
			var oFrag = sap.ui.core.Fragment,
				oAppBC,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oInfoInput;

			if (!this._oDetailsPopover) {
				this._oDetailsPopover = sap.ui.xmlfragment("myPopoverFrag", "com.sap.timesheet.fragments.Details", this);
				this.getView().addDependent(this._oDetailsPopover);
			}

			// the binding context is needed, because later when the OK button is clicked, the information must be updated
			oAppBC = oAppointment.getBindingContext();

			this._oDetailsPopover.setBindingContext(oAppBC);

			oDateTimePickerStart = oFrag.byId("myPopoverFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myPopoverFrag", "endDate");
			oInfoInput = oFrag.byId("myPopoverFrag", "moreInfo");

			oDateTimePickerStart.setDateValue(oAppointment.getStartDate());
			oDateTimePickerEnd.setDateValue(oAppointment.getEndDate());
			oInfoInput.setText(oAppointment.getText());

			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this._oDetailsPopover.openBy(oAppointment);
		},

		handleAppointmentDragEnter: function (oEvent) {
			// if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
			// 	oEvent.preventDefault();
			// }
		},

		handleAppointmentDrop: function (oEvent) {
			var that = this;
			var oAppointment = oEvent.getParameter("appointment");
			var oStartDate = oEvent.getParameter("startDate");
			var oEndDate = oEvent.getParameter("endDate");
			var oCalendarRow = oEvent.getParameter("calendarRow");
			var bCopy = oEvent.getParameter("copy");
			var oModel = this.getView().getModel();
			var oAppBindingContext = oAppointment.getBindingContext();
			var oRowBindingContext = oCalendarRow.getBindingContext();
			var person = oRowBindingContext.getObject();
			var appointment = oAppBindingContext.getObject();
			var aPath = oAppBindingContext.getPath().split("/");
			var sRowAppointmentsPath = aPath.join("/");

			// "copy" appointment
			if (bCopy) {
				var oProps = jQuery.extend({}, appointment);
				oProps.start = oStartDate;
				oProps.end = oEndDate;

				setBusy(
					this.getView(),
					timeSheetService
						.createAppointment(oProps, person.userid)
						.then(function (newAppointment) {
							person.appointments[oProps.ID] = oProps;
							person.appointments[oProps.ID].appointmentid = newAppointment.ID;
						})
				);
			} else {
				// "move" appointment
				oModel.setProperty("start", oStartDate, oAppBindingContext);
				oModel.setProperty("end", oEndDate, oAppBindingContext);

				if (oAppointment.getParent() !== oCalendarRow) {
					appointment.personName = person.name;
					appointment.personid = person.userid;

					person.appointments[appointment.appointmentid] = appointment;

					delete oModel.getProperty(sRowAppointmentsPath)[appointment.appointmentid];
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

		handleAppointmentResize: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate");

			oAppointment
				.setStartDate(oStartDate)
				.setEndDate(oEndDate);

			var bc = oAppointment.getBindingContext();

			setBusy(
				this.getView(),
				timeSheetService.updateAppointment(bc.getObject().appointmentid, {
					start: oStartDate,
					end: oEndDate
				})
			);
		},

		onApproveHours: function (oEvent) {
			var that = this;
			var bc = oEvent.getSource().getBindingContext();
			var appointment = bc.getObject();

			this.getView()
				.getModel()
				.setProperty(
					"/people/" + appointment.personid + "/appointments/" + appointment.appointmentid + "/tentative",
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
});
