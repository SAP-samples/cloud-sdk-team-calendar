/* eslint-disable spaced-comment */
/* eslint-disable import/order */
import { Appointment } from './model/appointment';
import { readAppointments } from './read-appointments';
import { splitAppointmentIntoDays } from './util/time-util';
import { buildTimeSheetEntry, writeTimeSheetEntry } from './write-appointments';
//useful for the backend unit test
import cds from '@sap/cds';
const { SELECT } = cds.ql;

export function serviceHandler(srv: any): void {
  srv.on('READ', 'TeamCalendar', req => {
    // enfore presence of key (for now)
    const year: number = req.data.year;

    if (!year) {
      req.reject(
        400,
        'No key found in the request URL! Please provide a key, e.g. by calling the endpoint like this: /TeamCalendar(2020).'
      );
    }

    return readAppointments(year, srv)
      .then(data => req.reply(data))
      .catch(error => {
        req.reject(
          500,
          'An error occured while trying to read appointments: ' + error.message
        );
      });
  });

  srv.after('UPDATE', 'Appointment', async (payload: Appointment, req) => {
    // the transaction joins the previous read request
    console.log(JSON.stringify(payload, null, 2));
    const tx = srv.transaction(req);
    const [appointment] = await tx.run(
      SELECT.from('Appointment').where({ ID: payload.ID })
    );
    console.log(JSON.stringify(appointment, null, 2));
    if (!appointment) {
      throw new Error(`No appointment found with ID ${payload.ID}`);
    }

    const [person] = await tx.run(
      SELECT.from('Person').where({ ID: appointment.person_ID })
    );
    if (!person) {
      throw new Error(`No person found with ID ${appointment.person_ID}`);
    }
    // split into multiple days and write in parallel
    return Promise.all(
      splitAppointmentIntoDays(appointment)
        .map(day => buildTimeSheetEntry(appointment, person, day))
        .map(writeTimeSheetEntry)
    )
      .then(() => appointment)
      .catch(error => {
        throw Error(`Failed to create appointment! ${error.message}`);
      });
  });
}
