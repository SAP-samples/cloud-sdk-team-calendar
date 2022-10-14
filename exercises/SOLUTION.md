# Create a read request to SAP S/4HANA

## Implement the read request to SAP S/4HANA

Solution to [this exercise](03-s4-read-request.md#implement-the-read-request)

```ts
export async function readS4AppointmentsByPerson(
  person: Person,
  year: number
): Promise<TimeSheetEntry[]> {
  const personId = person.s4ID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);

  const { timeSheetEntryApi } = workforceTimesheetService();
  return timeSheetEntryApi
    .requestBuilder()
    .getAll()
    .filter(
      timeSheetEntryApi.schema.PERSON_WORK_AGREEMENT_EXTERNAL_ID.equals(
        personId
      ),
      timeSheetEntryApi.schema.TIME_SHEET_DATE.greaterOrEqual(from),
      timeSheetEntryApi.schema.TIME_SHEET_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'S4HANA' });
}
```

# Create a write request to SAP S/4HANA

## Build a TimeSheetEntry

Solution to [this exercise](04-s4-write-request.md#build-a-timesheetentry)

```ts
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

  const { timeSheetEntryApi } = workforceTimesheetService();
  return timeSheetEntryApi
    .entityBuilder()
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

Solution to [this exercise](04-s4-write-request.md#write-a-timesheetentry)

```ts
export async function writeTimeSheetEntry(
  entry: TimeSheetEntry
): Promise<TimeSheetEntry> {
  const { timeSheetEntryApi } = workforceTimesheetService();
  return timeSheetEntryApi
    .requestBuilder()
    .create(entry)
    .execute({ destinationName: 'S4HANA' });
}
```

# Create a read request to SAP SuccessFactors

## Implement the read request to SAP SuccessFactors

Solution to [this exercise](05-sfsf-read-request.md#implement-the-request)

```ts
export async function readSfsfAppointmentsByPerson(
  person: Person,
  year: number
): Promise<EmployeeTime[]> {
  const timeType = 'VACATION';
  const personId = person.sfsfID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);

  const { employeeTimeApi } = ecTimeOffService();
  return employeeTimeApi
    .requestBuilder()
    .getAll()
    .select(
      employeeTimeApi.schema.EXTERNAL_CODE,
      employeeTimeApi.schema.START_TIME,
      employeeTimeApi.schema.START_DATE,
      employeeTimeApi.schema.END_TIME,
      employeeTimeApi.schema.END_DATE,
      employeeTimeApi.schema.APPROVAL_STATUS,
      employeeTimeApi.schema.USER_ID
    )
    .filter(
      employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      employeeTimeApi.schema.USER_ID.equals(personId),
      employeeTimeApi.schema.START_DATE.greaterOrEqual(from),
      employeeTimeApi.schema.END_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'SFSF' });
}
```
