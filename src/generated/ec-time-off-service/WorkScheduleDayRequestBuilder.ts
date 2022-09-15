/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDay } from './WorkScheduleDay';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDay} entity.
 */
export class WorkScheduleDayRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<WorkScheduleDay<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDay` entity based on its keys.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDay.workScheduleExternalCode}.
   * @param day Key property. See {@link WorkScheduleDay.day}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDay` entity based on its keys.
   */
  getByKey(workScheduleExternalCode: DeserializedType<T, 'Edm.String'>, day: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<WorkScheduleDay<T>, T> {
    return new GetByKeyRequestBuilder<WorkScheduleDay<T>, T>(this.entityApi, {
      WorkSchedule_externalCode: workScheduleExternalCode,
      day: day
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDay` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDay` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDay<T>, T> {
    return new GetAllRequestBuilder<WorkScheduleDay<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDay` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDay`.
   */
  create(entity: WorkScheduleDay<T>): CreateRequestBuilder<WorkScheduleDay<T>, T> {
    return new CreateRequestBuilder<WorkScheduleDay<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDay`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDay`.
   */
  update(entity: WorkScheduleDay<T>): UpdateRequestBuilder<WorkScheduleDay<T>, T> {
    return new UpdateRequestBuilder<WorkScheduleDay<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDay`.
   * @param workScheduleExternalCode Key property. See {@link WorkScheduleDay.workScheduleExternalCode}.
   * @param day Key property. See {@link WorkScheduleDay.day}.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDay`.
   */
  delete(workScheduleExternalCode: string, day: BigNumber): DeleteRequestBuilder<WorkScheduleDay<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDay`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDay` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDay<T>): DeleteRequestBuilder<WorkScheduleDay<T>, T>;
  delete(workScheduleExternalCodeOrEntity: any, day?: BigNumber): DeleteRequestBuilder<WorkScheduleDay<T>, T> {
    return new DeleteRequestBuilder<WorkScheduleDay<T>, T>(this.entityApi, workScheduleExternalCodeOrEntity instanceof WorkScheduleDay ? workScheduleExternalCodeOrEntity : {
      WorkSchedule_externalCode: workScheduleExternalCodeOrEntity!,
      day: day!
    });
  }
}
