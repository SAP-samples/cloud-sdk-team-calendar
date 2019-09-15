# Create a read request to SAP S/4HANA
## Implement the read request
Solution to [this exercise](02-create-read-request.md#implement-the-read-request)
```ts
export async function readS4AppointmentsByPerson(person: Person, year: number): Promise<TimeSheetEntry[]> {
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
    .execute({ destinationName: "S4HANA" });
}
```

# Create a write request to SAP S/4HANA

## Build a TimeSheetEntry
Solution to [this exercise](03-create-write-rewuest.md#build-a-timesheetentry)
```ts
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

  return TimeSheetEntry.builder()
    .personWorkAgreementExternalId(externalId)
    .timeSheetDataFields(timeSheetDataFields)
    .companyCode(companyCode)
    .timeSheetStatus(status)
    .timeSheetDate(day)
    .timeSheetIsReleasedOnSave(isReleasedOnSave)
    .timeSheetIsExecutedInTestRun(isExecutedInTestRun)
    .timeSheetOperation(operation)
    .build();
}
```

## Write a TimeSheetEntry
Solution to [this exercise](03-create-write-rewuest.md#write-a-timesheetentry)
```ts
export async function writeTimeSheetEntry(entry: TimeSheetEntry): Promise<TimeSheetEntry> {
  return TimeSheetEntry.requestBuilder()
    .create(entry)
    .execute({ destinationName: "S4HANA" });
}
```

# Create a request with your own OData client

Solution to [this exercise](06-use-odata-client.md#create-a-request-with-you-own-odata-client)
```ts
export async function readSfsfAppointmentsByPerson(person: Person, year: number): Promise<EmployeeTime[]> {
  const timeType = "VACATION";
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
    .execute({ destinationName: "SFSF" });
}
```
