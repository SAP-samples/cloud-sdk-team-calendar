/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDayModelAssignmentSegment } from './WorkScheduleDayModelAssignmentSegment';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelAssignmentSegment} entity.
 */
export class WorkScheduleDayModelAssignmentSegmentRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
   * @param workScheduleDayModelAssignmentDay Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay}.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode}.
   * @param externalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
   */
  getByKey(workScheduleDayModelAssignmentDay: DeserializedType<T, 'Edm.Int64'>, workScheduleExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
    return new GetByKeyRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>(this.entityApi, {
      WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDay,
      WorkSchedule_externalCode: workScheduleExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModelAssignmentSegment` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignmentSegment` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
    return new GetAllRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDayModelAssignmentSegment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignmentSegment`.
   */
  create(entity: WorkScheduleDayModelAssignmentSegment<T>): CreateRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
    return new CreateRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignmentSegment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignmentSegment`.
   */
  update(entity: WorkScheduleDayModelAssignmentSegment<T>): UpdateRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
    return new UpdateRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignmentSegment`.
   * @param workScheduleDayModelAssignmentDay Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay}.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode}.
   * @param externalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignmentSegment`.
   */
  delete(workScheduleDayModelAssignmentDay: BigNumber, workScheduleExternalCode: string, externalCode: string): DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignmentSegment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignmentSegment` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDayModelAssignmentSegment<T>): DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>;
  delete(workScheduleDayModelAssignmentDayOrEntity: any, workScheduleExternalCode?: string, externalCode?: string): DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T> {
    return new DeleteRequestBuilder<WorkScheduleDayModelAssignmentSegment<T>, T>(this.entityApi, workScheduleDayModelAssignmentDayOrEntity instanceof WorkScheduleDayModelAssignmentSegment ? workScheduleDayModelAssignmentDayOrEntity : {
      WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDayOrEntity!,
      WorkSchedule_externalCode: workScheduleExternalCode!,
      externalCode: externalCode!
    });
  }
}
