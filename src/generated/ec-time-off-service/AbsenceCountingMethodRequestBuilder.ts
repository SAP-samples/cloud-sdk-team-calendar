/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AbsenceCountingMethod } from './AbsenceCountingMethod';

/**
 * Request builder class for operations supported on the {@link AbsenceCountingMethod} entity.
 */
export class AbsenceCountingMethodRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AbsenceCountingMethod<T>, T> {
  /**
   * Returns a request builder for retrieving one `AbsenceCountingMethod` entity based on its keys.
   * @param externalCode Key property. See {@link AbsenceCountingMethod.externalCode}.
   * @returns A request builder for creating requests to retrieve one `AbsenceCountingMethod` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AbsenceCountingMethod<T>, T> {
    return new GetByKeyRequestBuilder<AbsenceCountingMethod<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AbsenceCountingMethod` entities.
   * @returns A request builder for creating requests to retrieve all `AbsenceCountingMethod` entities.
   */
  getAll(): GetAllRequestBuilder<AbsenceCountingMethod<T>, T> {
    return new GetAllRequestBuilder<AbsenceCountingMethod<T>, T>(this.entityApi);
  }
}
