import { expect } from "chai";
import { readAppointments } from "../../src/read-appointments";
import {
  calendarYear,
  localAppointment,
  mockReadS4Appointments,
  mockReadSfsfAppointments,
  mockSrv,
  s4Appointment,
  sfsfAppointment
} from "../test-util/mock-data";

describe("readAppointments", () => {
  it("gets appointments by person", done => {
    const expected = [
      {
        year: calendarYear,
        appointments: [localAppointment, s4Appointment, sfsfAppointment]
      }
    ];

    readAppointments(calendarYear, mockSrv, mockReadS4Appointments, mockReadSfsfAppointments)
      .then(result => {
        expect(result).to.deep.equal(expected);
        done();
      })
      .catch(done);
  });
});
