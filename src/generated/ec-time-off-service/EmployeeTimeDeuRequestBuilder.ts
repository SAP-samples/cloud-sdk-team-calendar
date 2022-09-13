/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeDeu } from './EmployeeTimeDeu';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeDeu} entity.
 */
export class EmployeeTimeDeuRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeDeu<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeDeu.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeDeu.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeDeu<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeDeu` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeDeu<T>, T>(this.entityApi);
  }
}
