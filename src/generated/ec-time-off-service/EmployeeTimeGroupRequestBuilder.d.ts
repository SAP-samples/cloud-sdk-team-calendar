import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeGroup } from './EmployeeTimeGroup';
/**
 * Request builder class for operations supported on the [[EmployeeTimeGroup]] entity.
 */
export declare class EmployeeTimeGroupRequestBuilder extends RequestBuilder<EmployeeTimeGroup> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeGroup` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTimeGroup.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroup` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeTimeGroup>;
    /**
     * Returns a request builder for querying all `EmployeeTimeGroup` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroup` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeGroup>;
}
//# sourceMappingURL=EmployeeTimeGroupRequestBuilder.d.ts.map