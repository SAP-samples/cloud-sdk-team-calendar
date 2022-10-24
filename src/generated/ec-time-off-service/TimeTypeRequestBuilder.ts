/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeType } from './TimeType';

/**
 * Request builder class for operations supported on the {@link TimeType} entity.
 */
export class TimeTypeRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeType<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeType` entity based on its keys.
   * @param externalCode Key property. See {@link TimeType.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeType` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeType<T>, T> {
    return new GetByKeyRequestBuilder<TimeType<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeType` entities.
   * @returns A request builder for creating requests to retrieve all `TimeType` entities.
   */
  getAll(): GetAllRequestBuilder<TimeType<T>, T> {
    return new GetAllRequestBuilder<TimeType<T>, T>(this.entityApi);
  }
}
