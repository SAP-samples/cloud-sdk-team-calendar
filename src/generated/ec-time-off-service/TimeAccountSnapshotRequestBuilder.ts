/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountSnapshot } from './TimeAccountSnapshot';

/**
 * Request builder class for operations supported on the [[TimeAccountSnapshot]] entity.
 */
export class TimeAccountSnapshotRequestBuilder extends RequestBuilder<TimeAccountSnapshot> {
  /**
   * Returns a request builder for retrieving one `TimeAccountSnapshot` entity based on its keys.
   * @param externalCode Key property. See [[TimeAccountSnapshot.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeAccountSnapshot` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountSnapshot> {
    return new GetByKeyRequestBuilder(TimeAccountSnapshot, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeAccountSnapshot` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountSnapshot` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountSnapshot> {
    return new GetAllRequestBuilder(TimeAccountSnapshot);
  }
}
