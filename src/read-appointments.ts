import { TimeSheetEntry } from '@sap/cloud-sdk-vdm-workforce-timesheet-service';
import moment from 'moment';
import { EmployeeTime } from './generated/ec-time-off-service';
import { Appointment } from './model/appointment';
import { Person } from './model/person';
import { readPersons } from './read-persons';
import {
  transformS4Appointment,
  transformSfsfAppointment
} from './util/appointment-transformation';

export async function readAppointments(
  year: number,
  srv,
  readS4AppointmentsByPersonFn = readS4AppointmentsByPerson,
  readSfsfAppointmentsByPersonFn = readSfsfAppointmentsByPerson
): Promise<[{ year: number; appointments: Appointment[] }]> {
  return readPersons(srv)
    .then((persons) =>
      Promise.all([
        readLocalAppointments(srv),
        readRemoteAppointments(
          readS4AppointmentsByPersonFn,
          transformS4Appointment
        )(persons, year),
        readRemoteAppointments(
          readSfsfAppointmentsByPersonFn,
          transformSfsfAppointment
        )(persons, year)
      ])
    )
    .then(([localAppointments, s4Appointments, sfsfAppointments]) => [
      {
        year,
        appointments: [
          ...localAppointments,
          ...s4Appointments,
          ...sfsfAppointments
        ]
      }
    ]);
}

export async function readS4AppointmentsByPerson(
  person: Person,
  year: number
): Promise<TimeSheetEntry[]> {
  const personId = person.s4ID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);

  return TimeSheetEntry.requestBuilder()
    .getAll()
    .filter(
      TimeSheetEntry.PERSON_WORK_AGREEMENT_EXTERNAL_ID.equals(personId),
      TimeSheetEntry.TIME_SHEET_DATE.greaterOrEqual(from),
      TimeSheetEntry.TIME_SHEET_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'S4HANA' });
}

export async function readSfsfAppointmentsByPerson(
  person: Person,
  year: number
): Promise<EmployeeTime[]> {
  const timeType = 'VACATION';
  const personId = person.sfsfID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);

  return EmployeeTime.requestBuilder()
    .getAll()
    .select(
      EmployeeTime.EXTERNAL_CODE,
      EmployeeTime.START_TIME,
      EmployeeTime.START_DATE,
      EmployeeTime.END_TIME,
      EmployeeTime.END_DATE,
      EmployeeTime.APPROVAL_STATUS,
      EmployeeTime.USER_ID
    )
    .filter(
      EmployeeTime.TIME_TYPE.equals(timeType),
      EmployeeTime.USER_ID.equals(personId),
      EmployeeTime.START_DATE.greaterOrEqual(from),
      EmployeeTime.END_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'SFSF' });
}

export async function readLocalAppointments(srv): Promise<Appointment[]> {
  return srv
    .read('Appointment')
    .then((appointments: Appointment[]) =>
      appointments.filter((appointment) => appointment.status !== 'APPROVED')
    );
}

function readRemoteAppointments<T>(
  readFn: (person: Person, year: number) => Promise<T[]>,
  transformFn: (appointment: T, person: Person, year: number) => Appointment
): (persons: Person[], year: number) => Promise<Appointment[]> {
  return (persons: Person[], year: number) => {
    return Promise.all(
      persons.map((person) =>
        readFn(person, year).then((appointments: T[]) =>
          appointments.map((appointment) =>
            transformFn(appointment, person, year)
          )
        )
      )
    ).then((appointmentsByPerson: Appointment[][]) =>
      appointmentsByPerson.reduce(
        (allAppointments, appointmentsForOnePerson) => [
          ...allAppointments,
          ...appointmentsForOnePerson
        ],
        []
      )
    );
  };
}
