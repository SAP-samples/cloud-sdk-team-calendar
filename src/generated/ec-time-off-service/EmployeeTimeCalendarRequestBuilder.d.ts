import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeCalendar } from './EmployeeTimeCalendar';
/**
 * Request builder class for operations supported on the [[EmployeeTimeCalendar]] entity.
 */
export declare class EmployeeTimeCalendarRequestBuilder extends RequestBuilder<EmployeeTimeCalendar> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCalendar` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCalendar.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeCalendar.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCalendar` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeCalendar>;
    /**
     * Returns a request builder for querying all `EmployeeTimeCalendar` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCalendar` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeCalendar>;
}
//# sourceMappingURL=EmployeeTimeCalendarRequestBuilder.d.ts.map