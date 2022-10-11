/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountPayoutProfile } from './TimeAccountPayoutProfile';

/**
 * Request builder class for operations supported on the {@link TimeAccountPayoutProfile} entity.
 */
export class TimeAccountPayoutProfileRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountPayoutProfile<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPayoutProfile` entity based on its keys.
   * @param externalCode Key property. See {@link TimeAccountPayoutProfile.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountPayoutProfile` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountPayoutProfile<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountPayoutProfile<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPayoutProfile` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPayoutProfile` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPayoutProfile<T>, T> {
    return new GetAllRequestBuilder<TimeAccountPayoutProfile<T>, T>(this.entityApi);
  }
}
