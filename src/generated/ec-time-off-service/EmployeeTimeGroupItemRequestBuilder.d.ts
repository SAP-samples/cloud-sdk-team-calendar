import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeGroupItem } from './EmployeeTimeGroupItem';
/**
 * Request builder class for operations supported on the [[EmployeeTimeGroupItem]] entity.
 */
export declare class EmployeeTimeGroupItemRequestBuilder extends RequestBuilder<EmployeeTimeGroupItem> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeGroupItem` entity based on its keys.
     * @param employeeTimeGroupExternalCode Key property. See [[EmployeeTimeGroupItem.employeeTimeGroupExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeGroupItem.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroupItem` entity based on its keys.
     */
    getByKey(employeeTimeGroupExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeGroupItem>;
    /**
     * Returns a request builder for querying all `EmployeeTimeGroupItem` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroupItem` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeGroupItem>;
}
//# sourceMappingURL=EmployeeTimeGroupItemRequestBuilder.d.ts.map