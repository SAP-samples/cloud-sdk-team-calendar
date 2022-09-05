/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkScheduleDayModelSegment } from './WorkScheduleDayModelSegment';

/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelSegment]] entity.
 */
export class WorkScheduleDayModelSegmentRequestBuilder extends RequestBuilder<WorkScheduleDayModelSegment> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelSegment` entity based on its keys.
   * @param workScheduleDayModelExternalCode Key property. See [[WorkScheduleDayModelSegment.workScheduleDayModelExternalCode]].
   * @param externalCode Key property. See [[WorkScheduleDayModelSegment.externalCode]].
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelSegment` entity based on its keys.
   */
  getByKey(workScheduleDayModelExternalCode: string, externalCode: string): GetByKeyRequestBuilder<WorkScheduleDayModelSegment> {
    return new GetByKeyRequestBuilder(WorkScheduleDayModelSegment, {
      WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModelSegment` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelSegment` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelSegment> {
    return new GetAllRequestBuilder(WorkScheduleDayModelSegment);
  }

  /**
   * Returns a request builder for creating a `WorkScheduleDayModelSegment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelSegment`.
   */
  create(entity: WorkScheduleDayModelSegment): CreateRequestBuilder<WorkScheduleDayModelSegment> {
    return new CreateRequestBuilder(WorkScheduleDayModelSegment, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDayModelSegment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelSegment`.
   */
  update(entity: WorkScheduleDayModelSegment): UpdateRequestBuilder<WorkScheduleDayModelSegment> {
    return new UpdateRequestBuilder(WorkScheduleDayModelSegment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelSegment`.
   * @param workScheduleDayModelExternalCode Key property. See [[WorkScheduleDayModelSegment.workScheduleDayModelExternalCode]].
   * @param externalCode Key property. See [[WorkScheduleDayModelSegment.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelSegment`.
   */
  delete(workScheduleDayModelExternalCode: string, externalCode: string): DeleteRequestBuilder<WorkScheduleDayModelSegment>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelSegment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelSegment` by taking the entity as a parameter.
   */
  delete(entity: WorkScheduleDayModelSegment): DeleteRequestBuilder<WorkScheduleDayModelSegment>;
  delete(workScheduleDayModelExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<WorkScheduleDayModelSegment> {
    return new DeleteRequestBuilder(WorkScheduleDayModelSegment, workScheduleDayModelExternalCodeOrEntity instanceof WorkScheduleDayModelSegment ? workScheduleDayModelExternalCodeOrEntity : {
      WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
