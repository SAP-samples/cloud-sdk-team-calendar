/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountPurchaseProfile } from './TimeAccountPurchaseProfile';

/**
 * Request builder class for operations supported on the {@link TimeAccountPurchaseProfile} entity.
 */
export class TimeAccountPurchaseProfileRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountPurchaseProfile<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPurchaseProfile` entity based on its keys.
   * @param externalCode Key property. See {@link TimeAccountPurchaseProfile.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfile` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountPurchaseProfile<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountPurchaseProfile<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPurchaseProfile` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfile` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPurchaseProfile<T>, T> {
    return new GetAllRequestBuilder<TimeAccountPurchaseProfile<T>, T>(this.entityApi);
  }
}
