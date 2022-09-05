/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccount } from './TimeAccount';

/**
 * Request builder class for operations supported on the [[TimeAccount]] entity.
 */
export class TimeAccountRequestBuilder extends RequestBuilder<TimeAccount> {
  /**
   * Returns a request builder for retrieving one `TimeAccount` entity based on its keys.
   * @param externalCode Key property. See [[TimeAccount.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeAccount` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccount> {
    return new GetByKeyRequestBuilder(TimeAccount, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccount` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccount` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccount> {
    return new GetAllRequestBuilder(TimeAccount);
  }

  /**
   * Returns a request builder for creating a `TimeAccount` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAccount`.
   */
  create(entity: TimeAccount): CreateRequestBuilder<TimeAccount> {
    return new CreateRequestBuilder(TimeAccount, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAccount`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAccount`.
   */
  update(entity: TimeAccount): UpdateRequestBuilder<TimeAccount> {
    return new UpdateRequestBuilder(TimeAccount, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAccount`.
   * @param externalCode Key property. See [[TimeAccount.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `TimeAccount`.
   */
  delete(externalCode: string): DeleteRequestBuilder<TimeAccount>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAccount`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAccount` by taking the entity as a parameter.
   */
  delete(entity: TimeAccount): DeleteRequestBuilder<TimeAccount>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<TimeAccount> {
    return new DeleteRequestBuilder(TimeAccount, externalCodeOrEntity instanceof TimeAccount ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
