import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeTypeAus } from './TimeTypeAus';
/**
 * Request builder class for operations supported on the [[TimeTypeAus]] entity.
 */
export declare class TimeTypeAusRequestBuilder extends RequestBuilder<TimeTypeAus> {
    /**
     * Returns a request builder for retrieving one `TimeTypeAus` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeAus.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeAus` entity based on its keys.
     */
    getByKey(timeTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeTypeAus>;
    /**
     * Returns a request builder for querying all `TimeTypeAus` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeAus` entities.
     */
    getAll(): GetAllRequestBuilder<TimeTypeAus>;
}
//# sourceMappingURL=TimeTypeAusRequestBuilder.d.ts.map