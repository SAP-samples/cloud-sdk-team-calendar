/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeCan } from './EmployeeTimeCan';

/**
 * Request builder class for operations supported on the [[EmployeeTimeCan]] entity.
 */
export class EmployeeTimeCanRequestBuilder extends RequestBuilder<EmployeeTimeCan> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCan` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCan.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeCan.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCan` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeCan> {
    return new GetByKeyRequestBuilder(EmployeeTimeCan, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCan` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCan` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCan> {
    return new GetAllRequestBuilder(EmployeeTimeCan);
  }
}
