/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeUsa } from './EmployeeTimeUsa';

/**
 * Request builder class for operations supported on the [[EmployeeTimeUsa]] entity.
 */
export class EmployeeTimeUsaRequestBuilder extends RequestBuilder<EmployeeTimeUsa> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimeUsa.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeUsa.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeUsa> {
    return new GetByKeyRequestBuilder(EmployeeTimeUsa, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeUsa` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeUsa> {
    return new GetAllRequestBuilder(EmployeeTimeUsa);
  }
}
