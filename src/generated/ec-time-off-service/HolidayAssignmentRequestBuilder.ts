/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HolidayAssignment } from './HolidayAssignment';

/**
 * Request builder class for operations supported on the [[HolidayAssignment]] entity.
 */
export class HolidayAssignmentRequestBuilder extends RequestBuilder<HolidayAssignment> {
  /**
   * Returns a request builder for retrieving one `HolidayAssignment` entity based on its keys.
   * @param holidayCalendarExternalCode Key property. See [[HolidayAssignment.holidayCalendarExternalCode]].
   * @param date Key property. See [[HolidayAssignment.date]].
   * @returns A request builder for creating requests to retrieve one `HolidayAssignment` entity based on its keys.
   */
  getByKey(holidayCalendarExternalCode: string, date: Moment): GetByKeyRequestBuilder<HolidayAssignment> {
    return new GetByKeyRequestBuilder(HolidayAssignment, {
      HolidayCalendar_externalCode: holidayCalendarExternalCode,
      date: date
    });
  }

  /**
   * Returns a request builder for querying all `HolidayAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `HolidayAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<HolidayAssignment> {
    return new GetAllRequestBuilder(HolidayAssignment);
  }
}
