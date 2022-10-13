# Create a read request to SAP SuccessFactors

## Implement the request

Find the _TODO_ in the `readSfsfAppointmentsByPerson` function in [`src/read-appointments.ts`](../src/read-appointments.ts). Instead of returning an empty array implement a request to retrieve employee time from SAP SuccessFactors. You can try to implement this on your own using the following hints or peek at the [solution](SOLUTION.md#implement-the-read-request-to-sap-successfactors) and copy the implementation.

Use the `employeeTimeApi.requestBuilder()` to create a request to get all EmployeeTime. Create the request by using the predefined variables.

**Select** the following properties:

- `employeeTimeApi.schema.EXTERNAL_CODE`,
- `employeeTimeApi.schema.START_TIME`,
- `employeeTimeApi.schema.START_DATE`,
- `employeeTimeApi.schema.END_TIME`,
- `employeeTimeApi.schema.END_DATE`,
- `employeeTimeApi.schema.APPROVAL_STATUS`,
- `employeeTimeApi.schema.USER_ID`

Add the following **filters**:

- `employeeTimeApi.schema.TIME_TYPE` should equal `timeType`
- `employeeTimeApi.schema.USER_ID` should equal `personId`
- `employeeTimeApi.schema.START_DATE` should be greater or equal to `from`
- `employeeTimeApi.schema.END_DATE` should be less or equal to `to`

This time, execute this request against the destination with a `destinationName` - `SFSF`.

Reload your locally deployed application in the browser and check, whether there are new appointments, especially vacations.

![Read SFSF](images/read-sfsf.png)

## Next step: [Deploy your application to Cloud Foundry](06-deploy-to-cf.md)
