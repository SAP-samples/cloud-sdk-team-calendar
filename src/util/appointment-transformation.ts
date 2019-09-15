import { TimeSheetEntry } from "@sap/cloud-sdk-vdm-workforce-timesheet-service";
import { EmployeeTime } from "../generated/ec-time-off-service";
import { Appointment } from "../model/appointment";
import { Person } from "../model/person";
import { S4AppointmentStatus } from "../model/s4-appointment-status";
import { dateToString, timeToString } from "./time-util";

export function transformS4Appointment(timeSheetEntry: TimeSheetEntry, person: Person, year: number): Appointment {
  return {
    ID: timeSheetEntry.timeSheetRecord,
    start_date: dateToString(timeSheetEntry.timeSheetDate),
    start_time: null,
    end_date: dateToString(timeSheetEntry.timeSheetDate),
    end_time: null,
    title: timeSheetEntry.timeSheetDataFields.timeSheetNote,
    project: timeSheetEntry.timeSheetDataFields.wbsElement,
    info: "Retrieved from SAP S/4HANA",
    status: timeSheetEntry.timeSheetStatus === S4AppointmentStatus.APPROVED ? "APPROVED" : "LOCAL",
    person_ID: person.ID,
    calendar_year: year,
    type: "Project"
  };
}

export function transformSfsfAppointment(eymployeeTime: EmployeeTime, person: Person, year: number): Appointment {
  return {
    ID: eymployeeTime.externalCode,
    start_date: dateToString(eymployeeTime.startDate),
    start_time: timeToString(eymployeeTime.startTime),
    end_date: dateToString(eymployeeTime.endDate),
    end_time: timeToString(eymployeeTime.endTime),
    title: "Vacation",
    status: "APPROVED",
    info: "Retrieved from SAP SuccessFactors",
    person_ID: person.ID,
    calendar_year: year,
    type: "Vacation"
  };
}
