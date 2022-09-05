import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPayoutProfile } from './TimeAccountPayoutProfile';
/**
 * Request builder class for operations supported on the [[TimeAccountPayoutProfile]] entity.
 */
export declare class TimeAccountPayoutProfileRequestBuilder extends RequestBuilder<TimeAccountPayoutProfile> {
    /**
     * Returns a request builder for retrieving one `TimeAccountPayoutProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountPayoutProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPayoutProfile` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountPayoutProfile>;
    /**
     * Returns a request builder for querying all `TimeAccountPayoutProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPayoutProfile` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountPayoutProfile>;
}
//# sourceMappingURL=TimeAccountPayoutProfileRequestBuilder.d.ts.map