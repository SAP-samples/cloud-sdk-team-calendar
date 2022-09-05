/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TemporaryTimeInformation } from './TemporaryTimeInformation';

/**
 * Request builder class for operations supported on the [[TemporaryTimeInformation]] entity.
 */
export class TemporaryTimeInformationRequestBuilder extends RequestBuilder<TemporaryTimeInformation> {
  /**
   * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
   * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TemporaryTimeInformation> {
    return new GetByKeyRequestBuilder(TemporaryTimeInformation, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TemporaryTimeInformation` entities.
   * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
   */
  getAll(): GetAllRequestBuilder<TemporaryTimeInformation> {
    return new GetAllRequestBuilder(TemporaryTimeInformation);
  }
}
