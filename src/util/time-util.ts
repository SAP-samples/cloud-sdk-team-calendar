import { Time } from '@sap-cloud-sdk/odata-v2';
import moment from 'moment';
import { Appointment } from '../model/appointment';

export function timeToString(time: Time): string | null {
  return time
    ? `${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`
    : null;
}

export function dateToString(date: moment.Moment): string | null {
  return date ? date.format('YYYY-MM-DD') : null;
}

export function splitAppointmentIntoDays(
  appointment: Appointment
): moment.Moment[] {
  if (!appointment.start_date || !appointment.end_date) {
    throw new Error(
      '"start_date" or "end_date" is not set, but both are necessary.'
    );
  } else {
    return enumerateDays(
      moment.utc(appointment.start_date),
      moment.utc(appointment.end_date)
    );
  }
}

function enumerateDays(
  start: moment.Moment,
  end: moment.Moment
): moment.Moment[] {
  const dates = [];
  for (let i = 0; i <= numberOfDays(start, end); i++) {
    dates.push(start.clone().add(i, 'd'));
  }

  return dates;
}

function numberOfDays(start: moment.Moment, end: moment.Moment): number {
  return moment.duration(end.diff(start)).asDays();
}
