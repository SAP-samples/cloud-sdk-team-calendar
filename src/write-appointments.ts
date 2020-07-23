import { TimeSheetEntry } from "@sap/cloud-sdk-vdm-workforce-timesheet-service";
import BigNumber from "bignumber.js";
import { Moment } from "moment";
import { Appointment } from "./model/appointment";
import { Person } from "./model/person";
import { S4AppointmentStatus } from "./model/s4-appointment-status";

export async function writeTimeSheetEntry(entry: TimeSheetEntry): Promise<TimeSheetEntry> {
  // TODO: Update the TimeSheetEntry in S/4HANA here.
  return entry;
}

export function buildTimeSheetEntry(appointment: Appointment, person: Person, day: Moment): TimeSheetEntry {
  const timeSheetDataFields = {
    activityType: "T001",
    wbsElement: "Teched2019.1.1",
    workItem: "P002",
    recordedHours: new BigNumber(8),
    timeSheetNote: appointment.title
  };
  const externalId = person.s4ID;
  const companyCode = person.s4CompanyCode;
  const status = S4AppointmentStatus.APPROVED;
  const isReleasedOnSave = true;
  const isExecutedInTestRun = false;
  const operation = "C";

  // TODO: Build a TimeSheetEntry here using the variables above.
  return null;
}
