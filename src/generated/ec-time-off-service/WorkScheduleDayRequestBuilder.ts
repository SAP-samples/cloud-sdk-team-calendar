/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkScheduleDay } from './WorkScheduleDay';

/**
 * Request builder class for operations supported on the [[WorkScheduleDay]] entity.
 */
export class WorkScheduleDayRequestBuilder extends RequestBuilder<WorkScheduleDay> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDay` entity based on its keys.
   * @param workScheduleExternalCode Key property. See [[WorkScheduleDay.workScheduleExternalCode]].
   * @param day Key property. See [[WorkScheduleDay.day]].
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDay` entity based on its keys.
   */
  getByKey(workScheduleExternalCode: string, day: BigNumber): GetByKeyRequestBuilder<WorkScheduleDay> {
    return new GetByKeyRequestBuilder(WorkScheduleDay, {
      WorkSchedule_externalCode: workScheduleExternalCode,
      day: day
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDay` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDay` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDay> {
    return new GetAllRequestBuilder(WorkScheduleDay);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDay` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDay`.
   */
  create(entity: WorkScheduleDay): CreateRequestBuilder<WorkScheduleDay> {
    return new CreateRequestBuilder(WorkScheduleDay, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDay`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDay`.
   */
  update(entity: WorkScheduleDay): UpdateRequestBuilder<WorkScheduleDay> {
    return new UpdateRequestBuilder(WorkScheduleDay, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDay`.
   * @param workScheduleExternalCode Key property. See [[WorkScheduleDay.workScheduleExternalCode]].
   * @param day Key property. See [[WorkScheduleDay.day]].
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDay`.
   */
  delete(workScheduleExternalCode: string, day: BigNumber): DeleteRequestBuilder<WorkScheduleDay>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDay`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDay` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDay): DeleteRequestBuilder<WorkScheduleDay>;
  delete(workScheduleExternalCodeOrEntity: any, day?: BigNumber): DeleteRequestBuilder<WorkScheduleDay> {
    return new DeleteRequestBuilder(WorkScheduleDay, workScheduleExternalCodeOrEntity instanceof WorkScheduleDay ? workScheduleExternalCodeOrEntity : {
      WorkSchedule_externalCode: workScheduleExternalCodeOrEntity!,
      day: day!
    });
  }
}
