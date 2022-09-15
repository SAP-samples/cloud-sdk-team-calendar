/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountPurchaseProfilePayComponentAssignment } from './TimeAccountPurchaseProfilePayComponentAssignment';

/**
 * Request builder class for operations supported on the {@link TimeAccountPurchaseProfilePayComponentAssignment} entity.
 */
export class TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
   * @param timeAccountPurchaseProfileExternalCode Key property. See {@link TimeAccountPurchaseProfilePayComponentAssignment.timeAccountPurchaseProfileExternalCode}.
   * @param payComponent Key property. See {@link TimeAccountPurchaseProfilePayComponentAssignment.payComponent}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
   */
  getByKey(timeAccountPurchaseProfileExternalCode: DeserializedType<T, 'Edm.String'>, payComponent: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment<T>, T> {
    return new GetByKeyRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment<T>, T>(this.entityApi, {
      TimeAccountPurchaseProfile_externalCode: timeAccountPurchaseProfileExternalCode,
      payComponent: payComponent
    });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment<T>, T> {
    return new GetAllRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment<T>, T>(this.entityApi);
  }
}
