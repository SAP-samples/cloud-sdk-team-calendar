/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeType } from './TimeType';

/**
 * Request builder class for operations supported on the [[TimeType]] entity.
 */
export class TimeTypeRequestBuilder extends RequestBuilder<TimeType> {
  /**
   * Returns a request builder for retrieving one `TimeType` entity based on its keys.
   * @param externalCode Key property. See [[TimeType.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeType` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TimeType> {
    return new GetByKeyRequestBuilder(TimeType, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeType` entities.
   * @returns A request builder for creating requests to retrieve all `TimeType` entities.
   */
  getAll(): GetAllRequestBuilder<TimeType> {
    return new GetAllRequestBuilder(TimeType);
  }
}
