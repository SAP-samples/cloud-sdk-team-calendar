/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimePol } from './EmployeeTimePol';

/**
 * Request builder class for operations supported on the [[EmployeeTimePol]] entity.
 */
export class EmployeeTimePolRequestBuilder extends RequestBuilder<EmployeeTimePol> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimePol.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimePol.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimePol> {
    return new GetByKeyRequestBuilder(EmployeeTimePol, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimePol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimePol> {
    return new GetAllRequestBuilder(EmployeeTimePol);
  }
}
