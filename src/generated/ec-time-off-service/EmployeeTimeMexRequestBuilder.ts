/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeMex } from './EmployeeTimeMex';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeMex} entity.
 */
export class EmployeeTimeMexRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeMex<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeMex` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeMex.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeMex.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeMex` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeMex<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeMex<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeMex` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeMex` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeMex<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeMex<T>, T>(this.entityApi);
  }
}
