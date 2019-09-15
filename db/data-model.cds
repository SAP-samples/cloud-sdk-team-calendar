namespace my.timesheet;

entity Appointment {
  key ID: String;
  start_date: Date;
  start_time: Time;
  end_date: Date;
  end_time: Time;
  title: String;
  project: String;
  info: String;
  status: String;
  type: String;
  calendar: Association to TeamCalendar;
  person: Association to Person;
}

entity Person {
  key ID: String;
  name: String;
  role: String;
  s4ID: String;
  s4CompanyCode: String;
  sfsfID: String;
  appointments: Association to many Appointment on appointments.person = $self;
}

entity TeamCalendar {
  key year: Integer;
  appointments: Association to many Appointment on appointments.calendar = $self;
}
