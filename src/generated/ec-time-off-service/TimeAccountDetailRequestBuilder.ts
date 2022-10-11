/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountDetail } from './TimeAccountDetail';

/**
 * Request builder class for operations supported on the {@link TimeAccountDetail} entity.
 */
export class TimeAccountDetailRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountDetail<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountDetail` entity based on its keys.
   * @param timeAccountExternalCode Key property. See {@link TimeAccountDetail.timeAccountExternalCode}.
   * @param externalCode Key property. See {@link TimeAccountDetail.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountDetail` entity based on its keys.
   */
  getByKey(timeAccountExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountDetail<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountDetail<T>, T>(this.entityApi, {
      TimeAccount_externalCode: timeAccountExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeAccountDetail` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountDetail` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountDetail<T>, T> {
    return new GetAllRequestBuilder<TimeAccountDetail<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAccountDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAccountDetail`.
   */
  create(entity: TimeAccountDetail<T>): CreateRequestBuilder<TimeAccountDetail<T>, T> {
    return new CreateRequestBuilder<TimeAccountDetail<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAccountDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAccountDetail`.
   */
  update(entity: TimeAccountDetail<T>): UpdateRequestBuilder<TimeAccountDetail<T>, T> {
    return new UpdateRequestBuilder<TimeAccountDetail<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAccountDetail`.
   * @param timeAccountExternalCode Key property. See {@link TimeAccountDetail.timeAccountExternalCode}.
   * @param externalCode Key property. See {@link TimeAccountDetail.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAccountDetail`.
   */
  delete(timeAccountExternalCode: string, externalCode: string): DeleteRequestBuilder<TimeAccountDetail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAccountDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAccountDetail` by taking the entity as a parameter.
   */
  delete(entity: TimeAccountDetail<T>): DeleteRequestBuilder<TimeAccountDetail<T>, T>;
  delete(timeAccountExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<TimeAccountDetail<T>, T> {
    return new DeleteRequestBuilder<TimeAccountDetail<T>, T>(this.entityApi, timeAccountExternalCodeOrEntity instanceof TimeAccountDetail ? timeAccountExternalCodeOrEntity : {
      TimeAccount_externalCode: timeAccountExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
