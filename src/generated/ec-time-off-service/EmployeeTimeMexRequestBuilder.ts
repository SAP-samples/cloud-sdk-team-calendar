/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeMex } from './EmployeeTimeMex';

/**
 * Request builder class for operations supported on the [[EmployeeTimeMex]] entity.
 */
export class EmployeeTimeMexRequestBuilder extends RequestBuilder<EmployeeTimeMex> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeMex` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimeMex.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeMex.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeMex` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeMex> {
    return new GetByKeyRequestBuilder(EmployeeTimeMex, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeMex` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeMex` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeMex> {
    return new GetAllRequestBuilder(EmployeeTimeMex);
  }
}
