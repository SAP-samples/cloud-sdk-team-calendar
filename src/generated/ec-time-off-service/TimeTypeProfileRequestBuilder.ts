/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeTypeProfile } from './TimeTypeProfile';

/**
 * Request builder class for operations supported on the {@link TimeTypeProfile} entity.
 */
export class TimeTypeProfileRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeTypeProfile<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeProfile` entity based on its keys.
   * @param externalCode Key property. See {@link TimeTypeProfile.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeProfile` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeTypeProfile<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeProfile<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeTypeProfile` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeProfile` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeProfile<T>, T> {
    return new GetAllRequestBuilder<TimeTypeProfile<T>, T>(this.entityApi);
  }
}
