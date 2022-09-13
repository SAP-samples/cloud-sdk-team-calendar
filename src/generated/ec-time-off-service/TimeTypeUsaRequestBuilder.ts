/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeTypeUsa } from './TimeTypeUsa';

/**
 * Request builder class for operations supported on the {@link TimeTypeUsa} entity.
 */
export class TimeTypeUsaRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeTypeUsa<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeUsa` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeUsa.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeUsa.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeUsa` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<TimeTypeUsa<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeUsa<T>, T>(this.entityApi, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeUsa` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeUsa` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeUsa<T>, T> {
    return new GetAllRequestBuilder<TimeTypeUsa<T>, T>(this.entityApi);
  }
}
