import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountPurchaseProfilePayComponentAssignment } from './TimeAccountPurchaseProfilePayComponentAssignment';
/**
 * Request builder class for operations supported on the [[TimeAccountPurchaseProfilePayComponentAssignment]] entity.
 */
export declare class TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder extends RequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment> {
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     * @param timeAccountPurchaseProfileExternalCode Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.timeAccountPurchaseProfileExternalCode]].
     * @param payComponent Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.payComponent]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     */
    getByKey(timeAccountPurchaseProfileExternalCode: string, payComponent: string): GetByKeyRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountPurchaseProfilePayComponentAssignment>;
}
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder.d.ts.map