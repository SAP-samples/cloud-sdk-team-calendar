import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeProfile } from './TimeTypeProfile';
/**
 * Request builder class for operations supported on the [[TimeTypeProfile]] entity.
 */
export declare class TimeTypeProfileRequestBuilder extends RequestBuilder<TimeTypeProfile> {
    /**
     * Returns a request builder for retrieving one `TimeTypeProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeTypeProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeProfile` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeTypeProfile>;
    /**
     * Returns a request builder for querying all `TimeTypeProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeProfile` entities.
     */
    getAll(): GetAllRequestBuilder<TimeTypeProfile>;
}
//# sourceMappingURL=TimeTypeProfileRequestBuilder.d.ts.map