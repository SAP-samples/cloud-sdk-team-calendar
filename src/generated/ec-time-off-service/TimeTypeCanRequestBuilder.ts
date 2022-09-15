/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeTypeCan } from './TimeTypeCan';

/**
 * Request builder class for operations supported on the {@link TimeTypeCan} entity.
 */
export class TimeTypeCanRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeTypeCan<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeCan.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeCan.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<TimeTypeCan<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeCan<T>, T>(this.entityApi, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeCan` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeCan<T>, T> {
    return new GetAllRequestBuilder<TimeTypeCan<T>, T>(this.entityApi);
  }
}
