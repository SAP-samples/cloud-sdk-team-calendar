sap.ui.define(
  [
    'com/sap/team-calendar/service/http',
    'com/sap/team-calendar/util/converter'
  ],
  function (http, converter) {
    const host = '';
    const servicePath = '/odata/v2/TimesheetService';
    const baseUrl = host + servicePath;

    // http.setCSRFPrefilter(baseUrl);

    return {
      getPersons () {
        return http.get(baseUrl + '/Person').then(function (response) {
          return response.hasOwnProperty('d')
            ? converter.getResults(converter.getD(response))
            : converter.getValue(response);
        });
      },

      getAppointments () {
        return http
          .get(baseUrl + '/TeamCalendar(' + new Date().getFullYear() + ')', {
            $expand: 'appointments',
            $select: 'year,appointments'
          })
          .then(function (response) {
            return response.hasOwnProperty('d')
              ? converter.getResults(converter.getD(response).appointments)
              : response.appointments;
          });
      },

      createAppointment (appointment, personid) {
        const startDate = converter.serializeDate(appointment.start);
        const endDate = converter.serializeDate(appointment.end);
        const appointmentData = {
          start_date: startDate,
          start_time: converter.serializeTime(true),
          end_date: endDate,
          end_time: converter.serializeTime(false),
          title: appointment.title,
          info: appointment.info,
          type: 'Project',
          calendar_year: appointment.start.getFullYear(),
          person_ID: personid,
          ID: Date.now() + ''
        };

        return http
          .post(baseUrl + '/Appointment', appointmentData)
          .then(function () {
            return appointmentData;
          });
      },

      updateAppointment (appointmentid, payload) {
        if (payload.start) {
          payload.start_date = converter.serializeDate(payload.start);
          delete payload.start;
        }
        if (payload.end) {
          payload.end_date = converter.serializeDate(payload.end);
          delete payload.end;
        }
        return http.patch(
          baseUrl + "/Appointment('" + appointmentid + "')",
          payload
        );
      },

      approveTimeOff (appointmentid) {
        return this.updateAppointment(appointmentid, { status: 'APPROVED' });
      }
    };
  }
);
