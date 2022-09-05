import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountDetail } from './TimeAccountDetail';
/**
 * Request builder class for operations supported on the [[TimeAccountDetail]] entity.
 */
export declare class TimeAccountDetailRequestBuilder extends RequestBuilder<TimeAccountDetail> {
    /**
     * Returns a request builder for retrieving one `TimeAccountDetail` entity based on its keys.
     * @param timeAccountExternalCode Key property. See [[TimeAccountDetail.timeAccountExternalCode]].
     * @param externalCode Key property. See [[TimeAccountDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountDetail` entity based on its keys.
     */
    getByKey(timeAccountExternalCode: string, externalCode: string): GetByKeyRequestBuilder<TimeAccountDetail>;
    /**
     * Returns a request builder for querying all `TimeAccountDetail` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountDetail` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountDetail>;
    /**
     * Returns a request builder for creating a `TimeAccountDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeAccountDetail`.
     */
    create(entity: TimeAccountDetail): CreateRequestBuilder<TimeAccountDetail>;
    /**
     * Returns a request builder for updating an entity of type `TimeAccountDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeAccountDetail`.
     */
    update(entity: TimeAccountDetail): UpdateRequestBuilder<TimeAccountDetail>;
    /**
     * Returns a request builder for deleting an entity of type `TimeAccountDetail`.
     * @param timeAccountExternalCode Key property. See [[TimeAccountDetail.timeAccountExternalCode]].
     * @param externalCode Key property. See [[TimeAccountDetail.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `TimeAccountDetail`.
     */
    delete(timeAccountExternalCode: string, externalCode: string): DeleteRequestBuilder<TimeAccountDetail>;
    /**
     * Returns a request builder for deleting an entity of type `TimeAccountDetail`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TimeAccountDetail` by taking the entity as a parameter.
     */
    delete(entity: TimeAccountDetail): DeleteRequestBuilder<TimeAccountDetail>;
}
//# sourceMappingURL=TimeAccountDetailRequestBuilder.d.ts.map