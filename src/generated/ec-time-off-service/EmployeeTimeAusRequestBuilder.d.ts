import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeAus } from './EmployeeTimeAus';
/**
 * Request builder class for operations supported on the [[EmployeeTimeAus]] entity.
 */
export declare class EmployeeTimeAusRequestBuilder extends RequestBuilder<EmployeeTimeAus> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeAus` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeAus.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeAus` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeAus>;
    /**
     * Returns a request builder for querying all `EmployeeTimeAus` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeAus` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeAus>;
}
//# sourceMappingURL=EmployeeTimeAusRequestBuilder.d.ts.map