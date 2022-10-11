/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeCan } from './EmployeeTimeCan';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeCan} entity.
 */
export class EmployeeTimeCanRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeCan<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCan` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCan.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCan.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCan` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeCan<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeCan<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCan` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCan` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCan<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeCan<T>, T>(this.entityApi);
  }
}
