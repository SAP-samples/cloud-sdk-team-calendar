import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkScheduleDayModelAssignment } from './WorkScheduleDayModelAssignment';
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelAssignment]] entity.
 */
export declare class WorkScheduleDayModelAssignmentRequestBuilder extends RequestBuilder<WorkScheduleDayModelAssignment> {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignment` entity based on its keys.
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignment.workScheduleExternalCode]].
     * @param day Key property. See [[WorkScheduleDayModelAssignment.day]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignment` entity based on its keys.
     */
    getByKey(workScheduleExternalCode: string, day: BigNumber): GetByKeyRequestBuilder<WorkScheduleDayModelAssignment>;
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignment` entities.
     */
    getAll(): GetAllRequestBuilder<WorkScheduleDayModelAssignment>;
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignment`.
     */
    create(entity: WorkScheduleDayModelAssignment): CreateRequestBuilder<WorkScheduleDayModelAssignment>;
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignment`.
     */
    update(entity: WorkScheduleDayModelAssignment): UpdateRequestBuilder<WorkScheduleDayModelAssignment>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignment`.
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignment.workScheduleExternalCode]].
     * @param day Key property. See [[WorkScheduleDayModelAssignment.day]].
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignment`.
     */
    delete(workScheduleExternalCode: string, day: BigNumber): DeleteRequestBuilder<WorkScheduleDayModelAssignment>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignment` by taking the entity as a parameter.
     */
    delete(entity: WorkScheduleDayModelAssignment): DeleteRequestBuilder<WorkScheduleDayModelAssignment>;
}
//# sourceMappingURL=WorkScheduleDayModelAssignmentRequestBuilder.d.ts.map