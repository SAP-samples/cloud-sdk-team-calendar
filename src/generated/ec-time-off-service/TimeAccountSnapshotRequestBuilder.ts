/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountSnapshot } from './TimeAccountSnapshot';

/**
 * Request builder class for operations supported on the {@link TimeAccountSnapshot} entity.
 */
export class TimeAccountSnapshotRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountSnapshot<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountSnapshot` entity based on its keys.
   * @param externalCode Key property. See {@link TimeAccountSnapshot.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountSnapshot` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountSnapshot<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountSnapshot<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountSnapshot` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountSnapshot` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountSnapshot<T>, T> {
    return new GetAllRequestBuilder<TimeAccountSnapshot<T>, T>(this.entityApi);
  }
}
