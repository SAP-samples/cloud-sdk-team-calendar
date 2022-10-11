/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Holiday } from './Holiday';

/**
 * Request builder class for operations supported on the {@link Holiday} entity.
 */
export class HolidayRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Holiday<T>, T> {
  /**
   * Returns a request builder for retrieving one `Holiday` entity based on its keys.
   * @param holidayCode Key property. See {@link Holiday.holidayCode}.
   * @returns A request builder for creating requests to retrieve one `Holiday` entity based on its keys.
   */
  getByKey(holidayCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Holiday<T>, T> {
    return new GetByKeyRequestBuilder<Holiday<T>, T>(this.entityApi, { holidayCode: holidayCode });
  }

  /**
   * Returns a request builder for querying all `Holiday` entities.
   * @returns A request builder for creating requests to retrieve all `Holiday` entities.
   */
  getAll(): GetAllRequestBuilder<Holiday<T>, T> {
    return new GetAllRequestBuilder<Holiday<T>, T>(this.entityApi);
  }
}
