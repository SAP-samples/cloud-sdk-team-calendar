import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeType } from './TimeType';
/**
 * Request builder class for operations supported on the [[TimeType]] entity.
 */
export declare class TimeTypeRequestBuilder extends RequestBuilder<TimeType> {
    /**
     * Returns a request builder for retrieving one `TimeType` entity based on its keys.
     * @param externalCode Key property. See [[TimeType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeType` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeType>;
    /**
     * Returns a request builder for querying all `TimeType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeType` entities.
     */
    getAll(): GetAllRequestBuilder<TimeType>;
}
//# sourceMappingURL=TimeTypeRequestBuilder.d.ts.map