import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Holiday } from './Holiday';
/**
 * Request builder class for operations supported on the [[Holiday]] entity.
 */
export declare class HolidayRequestBuilder extends RequestBuilder<Holiday> {
    /**
     * Returns a request builder for retrieving one `Holiday` entity based on its keys.
     * @param holidayCode Key property. See [[Holiday.holidayCode]].
     * @returns A request builder for creating requests to retrieve one `Holiday` entity based on its keys.
     */
    getByKey(holidayCode: string): GetByKeyRequestBuilder<Holiday>;
    /**
     * Returns a request builder for querying all `Holiday` entities.
     * @returns A request builder for creating requests to retrieve all `Holiday` entities.
     */
    getAll(): GetAllRequestBuilder<Holiday>;
}
//# sourceMappingURL=HolidayRequestBuilder.d.ts.map