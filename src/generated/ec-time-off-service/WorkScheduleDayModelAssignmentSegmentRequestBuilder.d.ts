import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkScheduleDayModelAssignmentSegment } from './WorkScheduleDayModelAssignmentSegment';
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelAssignmentSegment]] entity.
 */
export declare class WorkScheduleDayModelAssignmentSegmentRequestBuilder extends RequestBuilder<WorkScheduleDayModelAssignmentSegment> {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     * @param workScheduleDayModelAssignmentDay Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay]].
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode]].
     * @param externalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     */
    getByKey(workScheduleDayModelAssignmentDay: BigNumber, workScheduleExternalCode: string, externalCode: string): GetByKeyRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignmentSegment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignmentSegment` entities.
     */
    getAll(): GetAllRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignmentSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    create(entity: WorkScheduleDayModelAssignmentSegment): CreateRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignmentSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    update(entity: WorkScheduleDayModelAssignmentSegment): UpdateRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignmentSegment`.
     * @param workScheduleDayModelAssignmentDay Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay]].
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode]].
     * @param externalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    delete(workScheduleDayModelAssignmentDay: BigNumber, workScheduleExternalCode: string, externalCode: string): DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignmentSegment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignmentSegment` by taking the entity as a parameter.
     */
    delete(entity: WorkScheduleDayModelAssignmentSegment): DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment>;
}
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegmentRequestBuilder.d.ts.map