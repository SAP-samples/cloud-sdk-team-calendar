import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HolidayAssignment } from './HolidayAssignment';
/**
 * Request builder class for operations supported on the [[HolidayAssignment]] entity.
 */
export declare class HolidayAssignmentRequestBuilder extends RequestBuilder<HolidayAssignment> {
    /**
     * Returns a request builder for retrieving one `HolidayAssignment` entity based on its keys.
     * @param holidayCalendarExternalCode Key property. See [[HolidayAssignment.holidayCalendarExternalCode]].
     * @param date Key property. See [[HolidayAssignment.date]].
     * @returns A request builder for creating requests to retrieve one `HolidayAssignment` entity based on its keys.
     */
    getByKey(holidayCalendarExternalCode: string, date: Moment): GetByKeyRequestBuilder<HolidayAssignment>;
    /**
     * Returns a request builder for querying all `HolidayAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `HolidayAssignment` entities.
     */
    getAll(): GetAllRequestBuilder<HolidayAssignment>;
}
//# sourceMappingURL=HolidayAssignmentRequestBuilder.d.ts.map