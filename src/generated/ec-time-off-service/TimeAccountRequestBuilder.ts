/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccount } from './TimeAccount';

/**
 * Request builder class for operations supported on the {@link TimeAccount} entity.
 */
export class TimeAccountRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccount<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccount` entity based on its keys.
   * @param externalCode Key property. See {@link TimeAccount.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccount` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccount<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccount<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccount` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccount` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccount<T>, T> {
    return new GetAllRequestBuilder<TimeAccount<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAccount` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAccount`.
   */
  create(entity: TimeAccount<T>): CreateRequestBuilder<TimeAccount<T>, T> {
    return new CreateRequestBuilder<TimeAccount<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAccount`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAccount`.
   */
  update(entity: TimeAccount<T>): UpdateRequestBuilder<TimeAccount<T>, T> {
    return new UpdateRequestBuilder<TimeAccount<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAccount`.
   * @param externalCode Key property. See {@link TimeAccount.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAccount`.
   */
  delete(externalCode: string): DeleteRequestBuilder<TimeAccount<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAccount`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAccount` by taking the entity as a parameter.
   */
  delete(entity: TimeAccount<T>): DeleteRequestBuilder<TimeAccount<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<TimeAccount<T>, T> {
    return new DeleteRequestBuilder<TimeAccount<T>, T>(this.entityApi, externalCodeOrEntity instanceof TimeAccount ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
