import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeUsa } from './TimeTypeUsa';
/**
 * Request builder class for operations supported on the [[TimeTypeUsa]] entity.
 */
export declare class TimeTypeUsaRequestBuilder extends RequestBuilder<TimeTypeUsa> {
    /**
     * Returns a request builder for retrieving one `TimeTypeUsa` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeUsa.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeUsa` entity based on its keys.
     */
    getByKey(timeTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeTypeUsa>;
    /**
     * Returns a request builder for querying all `TimeTypeUsa` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeUsa` entities.
     */
    getAll(): GetAllRequestBuilder<TimeTypeUsa>;
}
//# sourceMappingURL=TimeTypeUsaRequestBuilder.d.ts.map