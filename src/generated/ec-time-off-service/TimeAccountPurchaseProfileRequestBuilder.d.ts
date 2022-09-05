import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPurchaseProfile } from './TimeAccountPurchaseProfile';
/**
 * Request builder class for operations supported on the [[TimeAccountPurchaseProfile]] entity.
 */
export declare class TimeAccountPurchaseProfileRequestBuilder extends RequestBuilder<TimeAccountPurchaseProfile> {
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountPurchaseProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfile` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountPurchaseProfile>;
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfile` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountPurchaseProfile>;
}
//# sourceMappingURL=TimeAccountPurchaseProfileRequestBuilder.d.ts.map