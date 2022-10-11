/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AvailableTimeType } from './AvailableTimeType';

/**
 * Request builder class for operations supported on the {@link AvailableTimeType} entity.
 */
export class AvailableTimeTypeRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AvailableTimeType<T>, T> {
  /**
   * Returns a request builder for retrieving one `AvailableTimeType` entity based on its keys.
   * @param timeTypeProfileExternalCode Key property. See {@link AvailableTimeType.timeTypeProfileExternalCode}.
   * @param externalCode Key property. See {@link AvailableTimeType.externalCode}.
   * @returns A request builder for creating requests to retrieve one `AvailableTimeType` entity based on its keys.
   */
  getByKey(timeTypeProfileExternalCode: DeserializedType<T, 'Edm.String'>, externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AvailableTimeType<T>, T> {
    return new GetByKeyRequestBuilder<AvailableTimeType<T>, T>(this.entityApi, {
      TimeTypeProfile_externalCode: timeTypeProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `AvailableTimeType` entities.
   * @returns A request builder for creating requests to retrieve all `AvailableTimeType` entities.
   */
  getAll(): GetAllRequestBuilder<AvailableTimeType<T>, T> {
    return new GetAllRequestBuilder<AvailableTimeType<T>, T>(this.entityApi);
  }
}
