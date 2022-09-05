/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkSchedule } from './WorkSchedule';

/**
 * Request builder class for operations supported on the [[WorkSchedule]] entity.
 */
export class WorkScheduleRequestBuilder extends RequestBuilder<WorkSchedule> {
  /**
   * Returns a request builder for retrieving one `WorkSchedule` entity based on its keys.
   * @param externalCode Key property. See [[WorkSchedule.externalCode]].
   * @returns A request builder for creating requests to retrieve one `WorkSchedule` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<WorkSchedule> {
    return new GetByKeyRequestBuilder(WorkSchedule, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `WorkSchedule` entities.
   * @returns A request builder for creating requests to retrieve all `WorkSchedule` entities.
   */
  getAll(): GetAllRequestBuilder<WorkSchedule> {
    return new GetAllRequestBuilder(WorkSchedule);
  }

  /**
   * Returns a request builder for creating a `WorkSchedule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkSchedule`.
   */
  create(entity: WorkSchedule): CreateRequestBuilder<WorkSchedule> {
    return new CreateRequestBuilder(WorkSchedule, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkSchedule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkSchedule`.
   */
  update(entity: WorkSchedule): UpdateRequestBuilder<WorkSchedule> {
    return new UpdateRequestBuilder(WorkSchedule, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkSchedule`.
   * @param externalCode Key property. See [[WorkSchedule.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `WorkSchedule`.
   */
  delete(externalCode: string): DeleteRequestBuilder<WorkSchedule>;
  /**
   * Returns a request builder for deleting an entity of type `WorkSchedule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkSchedule` by taking the entity as a parameter.
   */
  delete(entity: WorkSchedule): DeleteRequestBuilder<WorkSchedule>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<WorkSchedule> {
    return new DeleteRequestBuilder(WorkSchedule, externalCodeOrEntity instanceof WorkSchedule ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
