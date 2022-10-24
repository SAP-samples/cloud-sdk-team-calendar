/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTime } from './EmployeeTime';

/**
 * Request builder class for operations supported on the {@link EmployeeTime} entity.
 */
export class EmployeeTimeRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTime<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTime` entity based on its keys.
   * @param externalCode Key property. See {@link EmployeeTime.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTime` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<EmployeeTime<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTime<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmployeeTime` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTime` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTime<T>, T> {
    return new GetAllRequestBuilder<EmployeeTime<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTime` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTime`.
   */
  create(entity: EmployeeTime<T>): CreateRequestBuilder<EmployeeTime<T>, T> {
    return new CreateRequestBuilder<EmployeeTime<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTime`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTime`.
   */
  update(entity: EmployeeTime<T>): UpdateRequestBuilder<EmployeeTime<T>, T> {
    return new UpdateRequestBuilder<EmployeeTime<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTime`.
   * @param externalCode Key property. See {@link EmployeeTime.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTime`.
   */
  delete(externalCode: string): DeleteRequestBuilder<EmployeeTime<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTime`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTime` by taking the entity as a parameter.
   */
  delete(entity: EmployeeTime<T>): DeleteRequestBuilder<EmployeeTime<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<EmployeeTime<T>, T> {
    return new DeleteRequestBuilder<EmployeeTime<T>, T>(this.entityApi, externalCodeOrEntity instanceof EmployeeTime ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
