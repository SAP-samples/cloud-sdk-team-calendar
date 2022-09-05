/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AbsenceCountingMethod } from './AbsenceCountingMethod';

/**
 * Request builder class for operations supported on the [[AbsenceCountingMethod]] entity.
 */
export class AbsenceCountingMethodRequestBuilder extends RequestBuilder<AbsenceCountingMethod> {
  /**
   * Returns a request builder for retrieving one `AbsenceCountingMethod` entity based on its keys.
   * @param externalCode Key property. See [[AbsenceCountingMethod.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AbsenceCountingMethod` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<AbsenceCountingMethod> {
    return new GetByKeyRequestBuilder(AbsenceCountingMethod, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AbsenceCountingMethod` entities.
   * @returns A request builder for creating requests to retrieve all `AbsenceCountingMethod` entities.
   */
  getAll(): GetAllRequestBuilder<AbsenceCountingMethod> {
    return new GetAllRequestBuilder(AbsenceCountingMethod);
  }
}
