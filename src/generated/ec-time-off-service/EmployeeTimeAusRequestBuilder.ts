/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeAus } from './EmployeeTimeAus';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeAus} entity.
 */
export class EmployeeTimeAusRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeAus<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeAus` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeAus.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeAus.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeAus` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeAus<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeAus<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeAus` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeAus` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeAus<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeAus<T>, T>(this.entityApi);
  }
}
