import { TimeSheetEntry } from "@sap/cloud-sdk-vdm-workforce-timesheet-service";
import moment from "moment";
import { EmployeeTime } from "../../src/generated/ec-time-off-service";
import { Appointment } from "../../src/model/appointment";

export const calendarYear = 2019;

export const person = {
  ID: "1",
  name: "Testo",
  role: "Tester",
  s4ID: "s4",
  s4CompanyCode: "1010",
  sfsfID: "sfsf"
};

export const localAppointment: Appointment = {
  ID: "1",
  start_date: calendarYear + "-02-18",
  start_time: "08:00:00",
  end_date: calendarYear + "-02-18",
  end_time: "12:00:00",
  title: "Quality Vacation",
  project: "Best project",
  info: "Best info",
  status: "LOCAL",
  calendar_year: calendarYear,
  person_ID: "1",
  type: "Project"
};

export const multiDayAppointment: Appointment = {
  ID: "1",
  start_date: calendarYear + "-01-01",
  start_time: "08:00:00",
  end_date: calendarYear + "-01-03",
  end_time: "12:00:00",
  title: "Quality Vacation",
  project: "Best project",
  info: "Best info",
  status: "LOCAL",
  calendar_year: calendarYear,
  person_ID: "1",
  type: "Project"
};

export const mockSrv = {
  read: (entity: string) => {
    if (entity === "Person") {
      return Promise.resolve([person]);
    } else if (entity === "Appointment") {
      return Promise.resolve([localAppointment]);
    }
    throw new Error(`No mock for ${entity}`);
  }
};

export const mockReadS4Appointments = () =>
  Promise.resolve([
    TimeSheetEntry.builder()
      .timeSheetRecord("1")
      .timeSheetDate(moment(calendarYear + "-08-01"))
      .timeSheetDataFields({
        timeSheetNote: "note",
        wbsElement: "wbs"
      })
      .timeSheetStatus("30")
      .build()
  ]);

export const s4Appointment = {
  ID: "1",
  start_date: calendarYear + "-08-01",
  start_time: null,
  end_date: calendarYear + "-08-01",
  end_time: null,
  title: "note",
  project: "wbs",
  info: "Retrieved from SAP S/4HANA",
  status: "APPROVED",
  person_ID: "1",
  calendar_year: calendarYear,
  type: "Project"
};

export const mockReadSfsfAppointments = () =>
  Promise.resolve([
    EmployeeTime.builder()
      .externalCode("code")
      .startDate(moment(calendarYear + "-08-01"))
      .startTime({ hours: 0, minutes: 0, seconds: 0 })
      .endDate(moment(calendarYear + "-08-02"))
      .endTime({ hours: 0, minutes: 0, seconds: 0 })
      .approvalStatus("30")
      .build()
  ]);

export const sfsfAppointment = {
  ID: "code",
  start_date: calendarYear + "-08-01",
  start_time: "00:00:00",
  end_date: calendarYear + "-08-02",
  end_time: "00:00:00",
  title: "Vacation",
  status: "APPROVED",
  info: "Retrieved from SAP SuccessFactors",
  person_ID: "1",
  calendar_year: calendarYear,
  type: "Vacation"
};
