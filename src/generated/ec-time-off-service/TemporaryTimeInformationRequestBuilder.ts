/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TemporaryTimeInformation } from './TemporaryTimeInformation';

/**
 * Request builder class for operations supported on the {@link TemporaryTimeInformation} entity.
 */
export class TemporaryTimeInformationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TemporaryTimeInformation<T>, T> {
  /**
   * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
   * @param externalCode Key property. See {@link TemporaryTimeInformation.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TemporaryTimeInformation<T>, T> {
    return new GetByKeyRequestBuilder<TemporaryTimeInformation<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TemporaryTimeInformation` entities.
   * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
   */
  getAll(): GetAllRequestBuilder<TemporaryTimeInformation<T>, T> {
    return new GetAllRequestBuilder<TemporaryTimeInformation<T>, T>(this.entityApi);
  }
}
