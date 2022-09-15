/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { HolidayAssignment } from './HolidayAssignment';

/**
 * Request builder class for operations supported on the {@link HolidayAssignment} entity.
 */
export class HolidayAssignmentRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<HolidayAssignment<T>, T> {
  /**
   * Returns a request builder for retrieving one `HolidayAssignment` entity based on its keys.
   * @param holidayCalendarExternalCode Key property. See {@link HolidayAssignment.holidayCalendarExternalCode}.
   * @param date Key property. See {@link HolidayAssignment.date}.
   * @returns A request builder for creating requests to retrieve one `HolidayAssignment` entity based on its keys.
   */
  getByKey(holidayCalendarExternalCode: DeserializedType<T, 'Edm.String'>, date: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<HolidayAssignment<T>, T> {
    return new GetByKeyRequestBuilder<HolidayAssignment<T>, T>(this.entityApi, {
      HolidayCalendar_externalCode: holidayCalendarExternalCode,
      date: date
    });
  }

  /**
   * Returns a request builder for querying all `HolidayAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `HolidayAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<HolidayAssignment<T>, T> {
    return new GetAllRequestBuilder<HolidayAssignment<T>, T>(this.entityApi);
  }
}
