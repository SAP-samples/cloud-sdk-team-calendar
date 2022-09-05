/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeDeu } from './EmployeeTimeDeu';

/**
 * Request builder class for operations supported on the [[EmployeeTimeDeu]] entity.
 */
export class EmployeeTimeDeuRequestBuilder extends RequestBuilder<EmployeeTimeDeu> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimeDeu.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeDeu.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeDeu> {
    return new GetByKeyRequestBuilder(EmployeeTimeDeu, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeDeu` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeDeu> {
    return new GetAllRequestBuilder(EmployeeTimeDeu);
  }
}
