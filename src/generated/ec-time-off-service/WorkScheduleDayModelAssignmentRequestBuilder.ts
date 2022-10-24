/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDayModelAssignment } from './WorkScheduleDayModelAssignment';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelAssignment} entity.
 */
export class WorkScheduleDayModelAssignmentRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelAssignment` entity based on its keys.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignment.workScheduleExternalCode}.
   * @param day Key property. See {@link WorkScheduleDayModelAssignment.day}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignment` entity based on its keys.
   */
  getByKey(workScheduleExternalCode: DeserializedType<T, 'Edm.String'>, day: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
    return new GetByKeyRequestBuilder<WorkScheduleDayModelAssignment<T>, T>(this.entityApi, {
      WorkSchedule_externalCode: workScheduleExternalCode,
      day: day
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModelAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
    return new GetAllRequestBuilder<WorkScheduleDayModelAssignment<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDayModelAssignment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignment`.
   */
  create(entity: WorkScheduleDayModelAssignment<T>): CreateRequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
    return new CreateRequestBuilder<WorkScheduleDayModelAssignment<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignment`.
   */
  update(entity: WorkScheduleDayModelAssignment<T>): UpdateRequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
    return new UpdateRequestBuilder<WorkScheduleDayModelAssignment<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignment`.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignment.workScheduleExternalCode}.
   * @param day Key property. See {@link WorkScheduleDayModelAssignment.day}.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignment`.
   */
  delete(workScheduleExternalCode: string, day: BigNumber): DeleteRequestBuilder<WorkScheduleDayModelAssignment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelAssignment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelAssignment` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDayModelAssignment<T>): DeleteRequestBuilder<WorkScheduleDayModelAssignment<T>, T>;
  delete(workScheduleExternalCodeOrEntity: any, day?: BigNumber): DeleteRequestBuilder<WorkScheduleDayModelAssignment<T>, T> {
    return new DeleteRequestBuilder<WorkScheduleDayModelAssignment<T>, T>(this.entityApi, workScheduleExternalCodeOrEntity instanceof WorkScheduleDayModelAssignment ? workScheduleExternalCodeOrEntity : {
      WorkSchedule_externalCode: workScheduleExternalCodeOrEntity!,
      day: day!
    });
  }
}
