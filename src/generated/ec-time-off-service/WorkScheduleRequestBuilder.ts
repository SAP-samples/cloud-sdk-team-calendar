/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { WorkSchedule } from './WorkSchedule';

/**
 * Request builder class for operations supported on the {@link WorkSchedule} entity.
 */
export class WorkScheduleRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<WorkSchedule<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkSchedule` entity based on its keys.
   * @param externalCode Key property. See {@link WorkSchedule.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkSchedule` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<WorkSchedule<T>, T> {
    return new GetByKeyRequestBuilder<WorkSchedule<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `WorkSchedule` entities.
   * @returns A request builder for creating requests to retrieve all `WorkSchedule` entities.
   */
  getAll(): GetAllRequestBuilder<WorkSchedule<T>, T> {
    return new GetAllRequestBuilder<WorkSchedule<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkSchedule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkSchedule`.
   */
  create(entity: WorkSchedule<T>): CreateRequestBuilder<WorkSchedule<T>, T> {
    return new CreateRequestBuilder<WorkSchedule<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkSchedule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkSchedule`.
   */
  update(entity: WorkSchedule<T>): UpdateRequestBuilder<WorkSchedule<T>, T> {
    return new UpdateRequestBuilder<WorkSchedule<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkSchedule`.
   * @param externalCode Key property. See {@link WorkSchedule.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `WorkSchedule`.
   */
  delete(externalCode: string): DeleteRequestBuilder<WorkSchedule<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkSchedule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkSchedule` by taking the entity as a parameter.
   */
  delete(entity: WorkSchedule<T>): DeleteRequestBuilder<WorkSchedule<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<WorkSchedule<T>, T> {
    return new DeleteRequestBuilder<WorkSchedule<T>, T>(this.entityApi, externalCodeOrEntity instanceof WorkSchedule ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
