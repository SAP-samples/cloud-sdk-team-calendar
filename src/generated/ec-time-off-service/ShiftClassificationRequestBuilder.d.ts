import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ShiftClassification } from './ShiftClassification';
/**
 * Request builder class for operations supported on the [[ShiftClassification]] entity.
 */
export declare class ShiftClassificationRequestBuilder extends RequestBuilder<ShiftClassification> {
    /**
     * Returns a request builder for retrieving one `ShiftClassification` entity based on its keys.
     * @param externalCode Key property. See [[ShiftClassification.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ShiftClassification` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<ShiftClassification>;
    /**
     * Returns a request builder for querying all `ShiftClassification` entities.
     * @returns A request builder for creating requests to retrieve all `ShiftClassification` entities.
     */
    getAll(): GetAllRequestBuilder<ShiftClassification>;
}
//# sourceMappingURL=ShiftClassificationRequestBuilder.d.ts.map