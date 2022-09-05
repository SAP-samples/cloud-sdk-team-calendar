import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeCan } from './TimeTypeCan';
/**
 * Request builder class for operations supported on the [[TimeTypeCan]] entity.
 */
export declare class TimeTypeCanRequestBuilder extends RequestBuilder<TimeTypeCan> {
    /**
     * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeCan.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeCan.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
     */
    getByKey(timeTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeTypeCan>;
    /**
     * Returns a request builder for querying all `TimeTypeCan` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
     */
    getAll(): GetAllRequestBuilder<TimeTypeCan>;
}
//# sourceMappingURL=TimeTypeCanRequestBuilder.d.ts.map