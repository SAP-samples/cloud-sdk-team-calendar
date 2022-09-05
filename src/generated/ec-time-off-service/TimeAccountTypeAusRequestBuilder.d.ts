import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountTypeAus } from './TimeAccountTypeAus';
/**
 * Request builder class for operations supported on the [[TimeAccountTypeAus]] entity.
 */
export declare class TimeAccountTypeAusRequestBuilder extends RequestBuilder<TimeAccountTypeAus> {
    /**
     * Returns a request builder for retrieving one `TimeAccountTypeAus` entity based on its keys.
     * @param timeAccountTypeExternalCode Key property. See [[TimeAccountTypeAus.timeAccountTypeExternalCode]].
     * @param externalCode Key property. See [[TimeAccountTypeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountTypeAus` entity based on its keys.
     */
    getByKey(timeAccountTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<TimeAccountTypeAus>;
    /**
     * Returns a request builder for querying all `TimeAccountTypeAus` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountTypeAus` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountTypeAus>;
}
//# sourceMappingURL=TimeAccountTypeAusRequestBuilder.d.ts.map