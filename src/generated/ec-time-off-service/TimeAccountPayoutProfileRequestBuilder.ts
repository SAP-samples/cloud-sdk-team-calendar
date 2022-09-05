/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPayoutProfile } from './TimeAccountPayoutProfile';

/**
 * Request builder class for operations supported on the [[TimeAccountPayoutProfile]] entity.
 */
export class TimeAccountPayoutProfileRequestBuilder extends RequestBuilder<TimeAccountPayoutProfile> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPayoutProfile` entity based on its keys.
   * @param externalCode Key property. See [[TimeAccountPayoutProfile.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeAccountPayoutProfile` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountPayoutProfile> {
    return new GetByKeyRequestBuilder(TimeAccountPayoutProfile, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPayoutProfile` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPayoutProfile` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPayoutProfile> {
    return new GetAllRequestBuilder(TimeAccountPayoutProfile);
  }
}
