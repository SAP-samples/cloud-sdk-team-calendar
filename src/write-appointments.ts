/* eslint-disable unused-imports/no-unused-imports-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BigNumber } from 'bignumber.js';
import moment from 'moment';
import {
  TimeSheetEntry,
  workforceTimesheetService
} from './generated/workforce-timesheet-service';
import { Appointment } from './model/appointment';
import { Person } from './model/person';
import { S4AppointmentStatus } from './model/s4-appointment-status';

export async function writeTimeSheetEntry(
  entry: TimeSheetEntry
): Promise<TimeSheetEntry> {
  // TODO: Update the TimeSheetEntry in S/4HANA here.
  return entry;
}

export function buildTimeSheetEntry(
  appointment: Appointment,
  person: Person,
  day: moment.Moment
): TimeSheetEntry {
  const timeSheetDataFields = {
    activityType: 'T001',
    wbsElement: 'Teched',
    workItem: 'P002',
    recordedHours: new BigNumber(8),
    timeSheetNote: appointment.title
  };
  const externalId = person.s4ID;
  const companyCode = person.s4CompanyCode;
  const status = S4AppointmentStatus.APPROVED;
  const isReleasedOnSave = true;
  const isExecutedInTestRun = false;
  const operation = 'C';

  // TODO: Build a TimeSheetEntry here using the variables above.
  return null;
}
