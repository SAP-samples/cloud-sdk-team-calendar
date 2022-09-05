import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPostingRule } from './TimeAccountPostingRule';
/**
 * Request builder class for operations supported on the [[TimeAccountPostingRule]] entity.
 */
export declare class TimeAccountPostingRuleRequestBuilder extends RequestBuilder<TimeAccountPostingRule> {
    /**
     * Returns a request builder for retrieving one `TimeAccountPostingRule` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeAccountPostingRule.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeAccountPostingRule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPostingRule` entity based on its keys.
     */
    getByKey(timeTypeExternalCode: string, externalCode: string): GetByKeyRequestBuilder<TimeAccountPostingRule>;
    /**
     * Returns a request builder for querying all `TimeAccountPostingRule` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPostingRule` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountPostingRule>;
}
//# sourceMappingURL=TimeAccountPostingRuleRequestBuilder.d.ts.map