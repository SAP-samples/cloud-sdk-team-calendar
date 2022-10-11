/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountType_1 } from './TimeAccountType_1';

/**
 * Request builder class for operations supported on the {@link TimeAccountType_1} entity.
 */
export class TimeAccountType_1RequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountType_1<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountType_1` entity based on its keys.
   * @param externalCode Key property. See {@link TimeAccountType_1.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountType_1` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountType_1<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountType_1<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountType_1` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountType_1` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountType_1<T>, T> {
    return new GetAllRequestBuilder<TimeAccountType_1<T>, T>(this.entityApi);
  }
}
