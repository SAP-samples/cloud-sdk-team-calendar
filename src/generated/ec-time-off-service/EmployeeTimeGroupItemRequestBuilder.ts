/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeGroupItem } from './EmployeeTimeGroupItem';

/**
 * Request builder class for operations supported on the [[EmployeeTimeGroupItem]] entity.
 */
export class EmployeeTimeGroupItemRequestBuilder extends RequestBuilder<EmployeeTimeGroupItem> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeGroupItem` entity based on its keys.
   * @param employeeTimeGroupExternalCode Key property. See [[EmployeeTimeGroupItem.employeeTimeGroupExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeGroupItem.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroupItem` entity based on its keys.
   */
  getByKey(employeeTimeGroupExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeGroupItem> {
    return new GetByKeyRequestBuilder(EmployeeTimeGroupItem, {
      EmployeeTimeGroup_externalCode: employeeTimeGroupExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeGroupItem` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroupItem` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeGroupItem> {
    return new GetAllRequestBuilder(EmployeeTimeGroupItem);
  }
}
