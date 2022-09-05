import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeEsp } from './EmployeeTimeEsp';
/**
 * Request builder class for operations supported on the [[EmployeeTimeEsp]] entity.
 */
export declare class EmployeeTimeEspRequestBuilder extends RequestBuilder<EmployeeTimeEsp> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeEsp` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeEsp.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeEsp.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeEsp` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeEsp>;
    /**
     * Returns a request builder for querying all `EmployeeTimeEsp` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeEsp` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeEsp>;
    /**
     * Returns a request builder for creating a `EmployeeTimeEsp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeEsp`.
     */
    create(entity: EmployeeTimeEsp): CreateRequestBuilder<EmployeeTimeEsp>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeEsp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeEsp`.
     */
    update(entity: EmployeeTimeEsp): UpdateRequestBuilder<EmployeeTimeEsp>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTimeEsp`.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeEsp.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeEsp.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeEsp`.
     */
    delete(employeeTimeExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<EmployeeTimeEsp>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTimeEsp`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeEsp` by taking the entity as a parameter.
     */
    delete(entity: EmployeeTimeEsp): DeleteRequestBuilder<EmployeeTimeEsp>;
}
//# sourceMappingURL=EmployeeTimeEspRequestBuilder.d.ts.map