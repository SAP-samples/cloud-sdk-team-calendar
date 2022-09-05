import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkScheduleDayModel } from './WorkScheduleDayModel';
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModel]] entity.
 */
export declare class WorkScheduleDayModelRequestBuilder extends RequestBuilder<WorkScheduleDayModel> {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModel` entity based on its keys.
     * @param externalCode Key property. See [[WorkScheduleDayModel.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModel` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<WorkScheduleDayModel>;
    /**
     * Returns a request builder for querying all `WorkScheduleDayModel` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModel` entities.
     */
    getAll(): GetAllRequestBuilder<WorkScheduleDayModel>;
    /**
     * Returns a request builder for creating a `WorkScheduleDayModel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModel`.
     */
    create(entity: WorkScheduleDayModel): CreateRequestBuilder<WorkScheduleDayModel>;
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModel`.
     */
    update(entity: WorkScheduleDayModel): UpdateRequestBuilder<WorkScheduleDayModel>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModel`.
     * @param externalCode Key property. See [[WorkScheduleDayModel.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModel`.
     */
    delete(externalCode: string): DeleteRequestBuilder<WorkScheduleDayModel>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModel`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModel` by taking the entity as a parameter.
     */
    delete(entity: WorkScheduleDayModel): DeleteRequestBuilder<WorkScheduleDayModel>;
}
//# sourceMappingURL=WorkScheduleDayModelRequestBuilder.d.ts.map