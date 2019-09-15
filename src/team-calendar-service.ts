import { Appointment } from "./model/appointment";
import { readAppointments } from "./read-appointments";
import { personById } from "./read-persons";
import { splitAppointmentIntoDays } from "./util/time-util";
import { buildTimeSheetEntry, writeTimeSheetEntry } from "./write-appointments";

export function serviceHandler(srv) {
  srv.on("READ", "TeamCalendar", req => {
    // enfore presence of key (for now)
    const year: number = req.data.year;

    if (!year) {
      req.reject(
        400,
        "No key found in the request URL! Please provide a key, e.g. by calling the endpoint like this: /TeamCalendar(2019)."
      );
    }

    return readAppointments(year, srv)
      .then(req.reply)
      .catch(error => {
        req.reject(
          500,
          "An error occured while trying to read appointments: " + error.message
        );
      });
  });

  srv.after("UPDATE", "Appointment", async ([appointment]: [Appointment]) => {
    // split into multiple days and write in parallel
    const person = await personById(srv, appointment.person_ID);

    return Promise.all(
      splitAppointmentIntoDays(appointment)
        .map(day => buildTimeSheetEntry(appointment, person, day))
        .map(writeTimeSheetEntry)
    )
    .then(() => {
      return appointment;
    })
    .catch(error => {
      throw Error(`Failed to create appointment! ${error.message}`);
    });
  });
}
