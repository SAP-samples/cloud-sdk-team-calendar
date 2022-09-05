/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AccrualCalculationBase } from './AccrualCalculationBase';

/**
 * Request builder class for operations supported on the [[AccrualCalculationBase]] entity.
 */
export class AccrualCalculationBaseRequestBuilder extends RequestBuilder<AccrualCalculationBase> {
  /**
   * Returns a request builder for retrieving one `AccrualCalculationBase` entity based on its keys.
   * @param externalCode Key property. See [[AccrualCalculationBase.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AccrualCalculationBase` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<AccrualCalculationBase> {
    return new GetByKeyRequestBuilder(AccrualCalculationBase, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AccrualCalculationBase` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualCalculationBase` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualCalculationBase> {
    return new GetAllRequestBuilder(AccrualCalculationBase);
  }

  /**
   * Returns a request builder for creating a `AccrualCalculationBase` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualCalculationBase`.
   */
  create(entity: AccrualCalculationBase): CreateRequestBuilder<AccrualCalculationBase> {
    return new CreateRequestBuilder(AccrualCalculationBase, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualCalculationBase`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualCalculationBase`.
   */
  update(entity: AccrualCalculationBase): UpdateRequestBuilder<AccrualCalculationBase> {
    return new UpdateRequestBuilder(AccrualCalculationBase, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualCalculationBase`.
   * @param externalCode Key property. See [[AccrualCalculationBase.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `AccrualCalculationBase`.
   */
  delete(externalCode: string): DeleteRequestBuilder<AccrualCalculationBase>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualCalculationBase`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualCalculationBase` by taking the entity as a parameter.
   */
  delete(entity: AccrualCalculationBase): DeleteRequestBuilder<AccrualCalculationBase>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<AccrualCalculationBase> {
    return new DeleteRequestBuilder(AccrualCalculationBase, externalCodeOrEntity instanceof AccrualCalculationBase ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
