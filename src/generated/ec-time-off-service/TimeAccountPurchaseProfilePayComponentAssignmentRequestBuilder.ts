/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPurchaseProfilePayComponentAssignment } from './TimeAccountPurchaseProfilePayComponentAssignment';

/**
 * Request builder class for operations supported on the [[TimeAccountPurchaseProfilePayComponentAssignment]] entity.
 */
export class TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder extends RequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
   * @param timeAccountPurchaseProfileExternalCode Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.timeAccountPurchaseProfileExternalCode]].
   * @param payComponent Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.payComponent]].
   * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
   */
  getByKey(timeAccountPurchaseProfileExternalCode: string, payComponent: string): GetByKeyRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment> {
    return new GetByKeyRequestBuilder(TimeAccountPurchaseProfilePayComponentAssignment, {
      TimeAccountPurchaseProfile_externalCode: timeAccountPurchaseProfileExternalCode,
      payComponent: payComponent
    });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment> {
    return new GetAllRequestBuilder(TimeAccountPurchaseProfilePayComponentAssignment);
  }
}
