import moment from "moment";
import { buildTimeSheetEntry } from "../../src/write-appointments";
import { calendarYear, localAppointment, person } from "../test-util/mock-data";

describe("writeAppointments", () => {
  it("builds time sheet entry", () => {
    const timeSheetEntry = buildTimeSheetEntry(localAppointment, person, moment.utc(calendarYear + "-01-01"));
  });
});
