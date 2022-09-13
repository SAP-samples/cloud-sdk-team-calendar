/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDayModel } from './WorkScheduleDayModel';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModel} entity.
 */
export class WorkScheduleDayModelRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<WorkScheduleDayModel<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModel` entity based on its keys.
   * @param externalCode Key property. See {@link WorkScheduleDayModel.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModel` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<WorkScheduleDayModel<T>, T> {
    return new GetByKeyRequestBuilder<WorkScheduleDayModel<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModel` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModel` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModel<T>, T> {
    return new GetAllRequestBuilder<WorkScheduleDayModel<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDayModel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModel`.
   */
  create(entity: WorkScheduleDayModel<T>): CreateRequestBuilder<WorkScheduleDayModel<T>, T> {
    return new CreateRequestBuilder<WorkScheduleDayModel<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDayModel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModel`.
   */
  update(entity: WorkScheduleDayModel<T>): UpdateRequestBuilder<WorkScheduleDayModel<T>, T> {
    return new UpdateRequestBuilder<WorkScheduleDayModel<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModel`.
   * @param externalCode Key property. See {@link WorkScheduleDayModel.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModel`.
   */
  delete(externalCode: string): DeleteRequestBuilder<WorkScheduleDayModel<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModel`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModel` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDayModel<T>): DeleteRequestBuilder<WorkScheduleDayModel<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<WorkScheduleDayModel<T>, T> {
    return new DeleteRequestBuilder<WorkScheduleDayModel<T>, T>(this.entityApi, externalCodeOrEntity instanceof WorkScheduleDayModel ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
