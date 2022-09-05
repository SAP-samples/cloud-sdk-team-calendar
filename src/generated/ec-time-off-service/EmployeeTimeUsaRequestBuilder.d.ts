import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeUsa } from './EmployeeTimeUsa';
/**
 * Request builder class for operations supported on the [[EmployeeTimeUsa]] entity.
 */
export declare class EmployeeTimeUsaRequestBuilder extends RequestBuilder<EmployeeTimeUsa> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeUsa.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeUsa>;
    /**
     * Returns a request builder for querying all `EmployeeTimeUsa` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeUsa>;
}
//# sourceMappingURL=EmployeeTimeUsaRequestBuilder.d.ts.map