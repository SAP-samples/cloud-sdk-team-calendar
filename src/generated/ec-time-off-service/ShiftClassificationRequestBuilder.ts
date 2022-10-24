/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { ShiftClassification } from './ShiftClassification';

/**
 * Request builder class for operations supported on the {@link ShiftClassification} entity.
 */
export class ShiftClassificationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<ShiftClassification<T>, T> {
  /**
   * Returns a request builder for retrieving one `ShiftClassification` entity based on its keys.
   * @param externalCode Key property. See {@link ShiftClassification.externalCode}.
   * @returns A request builder for creating requests to retrieve one `ShiftClassification` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<ShiftClassification<T>, T> {
    return new GetByKeyRequestBuilder<ShiftClassification<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `ShiftClassification` entities.
   * @returns A request builder for creating requests to retrieve all `ShiftClassification` entities.
   */
  getAll(): GetAllRequestBuilder<ShiftClassification<T>, T> {
    return new GetAllRequestBuilder<ShiftClassification<T>, T>(this.entityApi);
  }
}
