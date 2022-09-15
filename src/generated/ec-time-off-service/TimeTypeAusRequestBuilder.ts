/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeTypeAus } from './TimeTypeAus';

/**
 * Request builder class for operations supported on the {@link TimeTypeAus} entity.
 */
export class TimeTypeAusRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeTypeAus<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeAus` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeAus.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeAus.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeAus` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<TimeTypeAus<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeAus<T>, T>(this.entityApi, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeAus` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeAus` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeAus<T>, T> {
    return new GetAllRequestBuilder<TimeTypeAus<T>, T>(this.entityApi);
  }
}
