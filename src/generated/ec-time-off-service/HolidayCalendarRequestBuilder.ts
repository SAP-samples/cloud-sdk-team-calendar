/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HolidayCalendar } from './HolidayCalendar';

/**
 * Request builder class for operations supported on the [[HolidayCalendar]] entity.
 */
export class HolidayCalendarRequestBuilder extends RequestBuilder<HolidayCalendar> {
  /**
   * Returns a request builder for retrieving one `HolidayCalendar` entity based on its keys.
   * @param externalCode Key property. See [[HolidayCalendar.externalCode]].
   * @returns A request builder for creating requests to retrieve one `HolidayCalendar` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<HolidayCalendar> {
    return new GetByKeyRequestBuilder(HolidayCalendar, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `HolidayCalendar` entities.
   * @returns A request builder for creating requests to retrieve all `HolidayCalendar` entities.
   */
  getAll(): GetAllRequestBuilder<HolidayCalendar> {
    return new GetAllRequestBuilder(HolidayCalendar);
  }
}
