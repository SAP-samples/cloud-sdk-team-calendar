/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPostingRule } from './TimeAccountPostingRule';

/**
 * Request builder class for operations supported on the [[TimeAccountPostingRule]] entity.
 */
export class TimeAccountPostingRuleRequestBuilder extends RequestBuilder<TimeAccountPostingRule> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPostingRule` entity based on its keys.
   * @param timeTypeExternalCode Key property. See [[TimeAccountPostingRule.timeTypeExternalCode]].
   * @param externalCode Key property. See [[TimeAccountPostingRule.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeAccountPostingRule` entity based on its keys.
   */
  getByKey(timeTypeExternalCode: string, externalCode: string): GetByKeyRequestBuilder<TimeAccountPostingRule> {
    return new GetByKeyRequestBuilder(TimeAccountPostingRule, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeAccountPostingRule` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPostingRule` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPostingRule> {
    return new GetAllRequestBuilder(TimeAccountPostingRule);
  }
}
