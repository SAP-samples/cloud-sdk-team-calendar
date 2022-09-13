/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeCol } from './EmployeeTimeCol';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeCol} entity.
 */
export class EmployeeTimeColRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeCol<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCol.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCol` entity based on its keys.
   */
  getByKey(employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<EmployeeTimeCol<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeCol<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCol<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeCol<T>, T>(this.entityApi);
  }
}
