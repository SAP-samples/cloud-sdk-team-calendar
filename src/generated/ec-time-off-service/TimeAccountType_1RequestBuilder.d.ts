import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountType_1 } from './TimeAccountType_1';
/**
 * Request builder class for operations supported on the [[TimeAccountType_1]] entity.
 */
export declare class TimeAccountType_1RequestBuilder extends RequestBuilder<TimeAccountType_1> {
    /**
     * Returns a request builder for retrieving one `TimeAccountType_1` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountType_1.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountType_1` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountType_1>;
    /**
     * Returns a request builder for querying all `TimeAccountType_1` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountType_1` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountType_1>;
}
//# sourceMappingURL=TimeAccountType_1RequestBuilder.d.ts.map