/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { HolidayCalendar } from './HolidayCalendar';

/**
 * Request builder class for operations supported on the {@link HolidayCalendar} entity.
 */
export class HolidayCalendarRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<HolidayCalendar<T>, T> {
  /**
   * Returns a request builder for retrieving one `HolidayCalendar` entity based on its keys.
   * @param externalCode Key property. See {@link HolidayCalendar.externalCode}.
   * @returns A request builder for creating requests to retrieve one `HolidayCalendar` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<HolidayCalendar<T>, T> {
    return new GetByKeyRequestBuilder<HolidayCalendar<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `HolidayCalendar` entities.
   * @returns A request builder for creating requests to retrieve all `HolidayCalendar` entities.
   */
  getAll(): GetAllRequestBuilder<HolidayCalendar<T>, T> {
    return new GetAllRequestBuilder<HolidayCalendar<T>, T>(this.entityApi);
  }
}
