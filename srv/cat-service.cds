using my.timesheet as timesheet from '../db/data-model';

service TimesheetService {
  entity Appointment as projection on timesheet.Appointment;
  entity Person  @readonly as projection on timesheet.Person;
  entity TeamCalendar  @readonly as projection on timesheet.TeamCalendar;
  entity Sanity {
    key ID: String;
  }
}
