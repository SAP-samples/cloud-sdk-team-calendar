/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpTimeAccountBalance } from './EmpTimeAccountBalance';

/**
 * Request builder class for operations supported on the [[EmpTimeAccountBalance]] entity.
 */
export class EmpTimeAccountBalanceRequestBuilder extends RequestBuilder<EmpTimeAccountBalance> {
  /**
   * Returns a request builder for retrieving one `EmpTimeAccountBalance` entity based on its keys.
   * @param timeAccount Key property. See [[EmpTimeAccountBalance.timeAccount]].
   * @returns A request builder for creating requests to retrieve one `EmpTimeAccountBalance` entity based on its keys.
   */
  getByKey(timeAccount: string): GetByKeyRequestBuilder<EmpTimeAccountBalance> {
    return new GetByKeyRequestBuilder(EmpTimeAccountBalance, { timeAccount: timeAccount });
  }

  /**
   * Returns a request builder for querying all `EmpTimeAccountBalance` entities.
   * @returns A request builder for creating requests to retrieve all `EmpTimeAccountBalance` entities.
   */
  getAll(): GetAllRequestBuilder<EmpTimeAccountBalance> {
    return new GetAllRequestBuilder(EmpTimeAccountBalance);
  }
}
