/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeCan } from './TimeTypeCan';

/**
 * Request builder class for operations supported on the [[TimeTypeCan]] entity.
 */
export class TimeTypeCanRequestBuilder extends RequestBuilder<TimeTypeCan> {
  /**
   * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
   * @param timeTypeExternalCode Key property. See [[TimeTypeCan.timeTypeExternalCode]].
   * @param externalCode Key property. See [[TimeTypeCan.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeTypeCan> {
    return new GetByKeyRequestBuilder(TimeTypeCan, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeCan` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeCan> {
    return new GetAllRequestBuilder(TimeTypeCan);
  }
}
