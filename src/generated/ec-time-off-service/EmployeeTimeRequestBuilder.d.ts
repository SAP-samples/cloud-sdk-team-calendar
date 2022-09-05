import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTime } from './EmployeeTime';
/**
 * Request builder class for operations supported on the [[EmployeeTime]] entity.
 */
export declare class EmployeeTimeRequestBuilder extends RequestBuilder<EmployeeTime> {
    /**
     * Returns a request builder for retrieving one `EmployeeTime` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTime.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTime` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeTime>;
    /**
     * Returns a request builder for querying all `EmployeeTime` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTime` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTime>;
    /**
     * Returns a request builder for creating a `EmployeeTime` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTime`.
     */
    create(entity: EmployeeTime): CreateRequestBuilder<EmployeeTime>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeTime`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTime`.
     */
    update(entity: EmployeeTime): UpdateRequestBuilder<EmployeeTime>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTime`.
     * @param externalCode Key property. See [[EmployeeTime.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTime`.
     */
    delete(externalCode: string): DeleteRequestBuilder<EmployeeTime>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTime`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTime` by taking the entity as a parameter.
     */
    delete(entity: EmployeeTime): DeleteRequestBuilder<EmployeeTime>;
}
//# sourceMappingURL=EmployeeTimeRequestBuilder.d.ts.map