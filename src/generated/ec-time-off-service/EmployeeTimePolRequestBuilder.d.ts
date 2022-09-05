import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimePol } from './EmployeeTimePol';
/**
 * Request builder class for operations supported on the [[EmployeeTimePol]] entity.
 */
export declare class EmployeeTimePolRequestBuilder extends RequestBuilder<EmployeeTimePol> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimePol.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimePol.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimePol>;
    /**
     * Returns a request builder for querying all `EmployeeTimePol` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimePol>;
}
//# sourceMappingURL=EmployeeTimePolRequestBuilder.d.ts.map