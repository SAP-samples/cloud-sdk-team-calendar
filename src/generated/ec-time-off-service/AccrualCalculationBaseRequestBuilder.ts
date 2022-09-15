/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AccrualCalculationBase } from './AccrualCalculationBase';

/**
 * Request builder class for operations supported on the {@link AccrualCalculationBase} entity.
 */
export class AccrualCalculationBaseRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AccrualCalculationBase<T>, T> {
  /**
   * Returns a request builder for retrieving one `AccrualCalculationBase` entity based on its keys.
   * @param externalCode Key property. See {@link AccrualCalculationBase.externalCode}.
   * @returns A request builder for creating requests to retrieve one `AccrualCalculationBase` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AccrualCalculationBase<T>, T> {
    return new GetByKeyRequestBuilder<AccrualCalculationBase<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AccrualCalculationBase` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualCalculationBase` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualCalculationBase<T>, T> {
    return new GetAllRequestBuilder<AccrualCalculationBase<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualCalculationBase` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualCalculationBase`.
   */
  create(entity: AccrualCalculationBase<T>): CreateRequestBuilder<AccrualCalculationBase<T>, T> {
    return new CreateRequestBuilder<AccrualCalculationBase<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualCalculationBase`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualCalculationBase`.
   */
  update(entity: AccrualCalculationBase<T>): UpdateRequestBuilder<AccrualCalculationBase<T>, T> {
    return new UpdateRequestBuilder<AccrualCalculationBase<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualCalculationBase`.
   * @param externalCode Key property. See {@link AccrualCalculationBase.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualCalculationBase`.
   */
  delete(externalCode: string): DeleteRequestBuilder<AccrualCalculationBase<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualCalculationBase`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualCalculationBase` by taking the entity as a parameter.
   */
  delete(entity: AccrualCalculationBase<T>): DeleteRequestBuilder<AccrualCalculationBase<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<AccrualCalculationBase<T>, T> {
    return new DeleteRequestBuilder<AccrualCalculationBase<T>, T>(this.entityApi, externalCodeOrEntity instanceof AccrualCalculationBase ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
