/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Holiday } from './Holiday';

/**
 * Request builder class for operations supported on the [[Holiday]] entity.
 */
export class HolidayRequestBuilder extends RequestBuilder<Holiday> {
  /**
   * Returns a request builder for retrieving one `Holiday` entity based on its keys.
   * @param holidayCode Key property. See [[Holiday.holidayCode]].
   * @returns A request builder for creating requests to retrieve one `Holiday` entity based on its keys.
   */
  getByKey(holidayCode: string): GetByKeyRequestBuilder<Holiday> {
    return new GetByKeyRequestBuilder(Holiday, { holidayCode: holidayCode });
  }

  /**
   * Returns a request builder for querying all `Holiday` entities.
   * @returns A request builder for creating requests to retrieve all `Holiday` entities.
   */
  getAll(): GetAllRequestBuilder<Holiday> {
    return new GetAllRequestBuilder(Holiday);
  }
}
