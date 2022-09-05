import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeDeu } from './EmployeeTimeDeu';
/**
 * Request builder class for operations supported on the [[EmployeeTimeDeu]] entity.
 */
export declare class EmployeeTimeDeuRequestBuilder extends RequestBuilder<EmployeeTimeDeu> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeDeu.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeDeu.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeDeu>;
    /**
     * Returns a request builder for querying all `EmployeeTimeDeu` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeDeu>;
}
//# sourceMappingURL=EmployeeTimeDeuRequestBuilder.d.ts.map