/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeUsa } from './EmployeeTimeUsa';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeUsa} entity.
 */
export class EmployeeTimeUsaRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeUsa<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeUsa.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeUsa.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeUsa<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeUsa` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeUsa<T>, T>(this.entityApi);
  }
}
