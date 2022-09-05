/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeCol } from './EmployeeTimeCol';

/**
 * Request builder class for operations supported on the [[EmployeeTimeCol]] entity.
 */
export class EmployeeTimeColRequestBuilder extends RequestBuilder<EmployeeTimeCol> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCol.employeeTimeExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeCol.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCol` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmployeeTimeCol> {
    return new GetByKeyRequestBuilder(EmployeeTimeCol, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCol> {
    return new GetAllRequestBuilder(EmployeeTimeCol);
  }
}
