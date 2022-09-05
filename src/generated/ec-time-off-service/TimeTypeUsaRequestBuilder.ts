/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeUsa } from './TimeTypeUsa';

/**
 * Request builder class for operations supported on the [[TimeTypeUsa]] entity.
 */
export class TimeTypeUsaRequestBuilder extends RequestBuilder<TimeTypeUsa> {
  /**
   * Returns a request builder for retrieving one `TimeTypeUsa` entity based on its keys.
   * @param timeTypeExternalCode Key property. See [[TimeTypeUsa.timeTypeExternalCode]].
   * @param externalCode Key property. See [[TimeTypeUsa.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeTypeUsa` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeTypeUsa> {
    return new GetByKeyRequestBuilder(TimeTypeUsa, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeUsa` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeUsa` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeUsa> {
    return new GetAllRequestBuilder(TimeTypeUsa);
  }
}
