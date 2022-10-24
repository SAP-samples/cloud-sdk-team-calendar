/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimePol } from './EmployeeTimePol';

/**
 * Request builder class for operations supported on the {@link EmployeeTimePol} entity.
 */
export class EmployeeTimePolRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimePol<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimePol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimePol.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimePol<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimePol<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimePol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimePol<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimePol<T>, T>(this.entityApi);
  }
}
