/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeGroup } from './EmployeeTimeGroup';

/**
 * Request builder class for operations supported on the [[EmployeeTimeGroup]] entity.
 */
export class EmployeeTimeGroupRequestBuilder extends RequestBuilder<EmployeeTimeGroup> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeGroup` entity based on its keys.
   * @param externalCode Key property. See [[EmployeeTimeGroup.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroup` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeTimeGroup> {
    return new GetByKeyRequestBuilder(EmployeeTimeGroup, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeGroup` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroup` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeGroup> {
    return new GetAllRequestBuilder(EmployeeTimeGroup);
  }
}
