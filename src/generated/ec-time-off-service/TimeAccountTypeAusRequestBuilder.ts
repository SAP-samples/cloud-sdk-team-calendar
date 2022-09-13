/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountTypeAus } from './TimeAccountTypeAus';

/**
 * Request builder class for operations supported on the {@link TimeAccountTypeAus} entity.
 */
export class TimeAccountTypeAusRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountTypeAus<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountTypeAus` entity based on its keys.
   * @param timeAccountTypeExternalCode Key property. See {@link TimeAccountTypeAus.timeAccountTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeAccountTypeAus.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountTypeAus` entity based on its keys.
   */
  getByKey(timeAccountTypeExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.Int64'>): GetByKeyRequestBuilder<TimeAccountTypeAus<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountTypeAus<T>, T>(this.entityApi, {
      TimeAccountType_externalCode: timeAccountTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeAccountTypeAus` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountTypeAus` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountTypeAus<T>, T> {
    return new GetAllRequestBuilder<TimeAccountTypeAus<T>, T>(this.entityApi);
  }
}
